const OPENMETEO_URL = "https://api.open-meteo.com/v1";

interface OpenMeteoParams {
  latitude: number;
  longitude: number;
  hourly?: string;
  daily?: string;
  timezone?: string;
  forecast_days?: number;
}

async function request(
  endpoint: string,
  params: Record<string, string | number | string[]> = {}
) {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      queryParams.append(key, value.join(","));
    } else {
      queryParams.append(key, String(value));
    }
  });

  const url = `${OPENMETEO_URL}${endpoint}?${queryParams.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Open-Meteo Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/* -------------------------------- */
/* Current Weather */
/* -------------------------------- */

export async function getCurrentWeather(
  latitude: number = -8.6705,
  longitude: number = 115.212
) {
  return request("/forecast", {
    latitude,
    longitude,
    current: "temperature,humidity,apparent_temperature,weather_code,wind_speed,wind_direction",
    timezone: "auto",
  });
}

/* -------------------------------- */
/* Hourly Forecast */
/* -------------------------------- */

export async function getHourlyForecast(
  latitude: number = -8.6705,
  longitude: number = 115.212,
  forecastDays: number = 7
) {
  return request("/forecast", {
    latitude,
    longitude,
    hourly: [
      "temperature",
      "apparent_temperature",
      "humidity",
      "weather_code",
      "wind_speed",
      "wind_direction",
      "rain",
      "precipitation_probability",
    ],
    timezone: "auto",
    forecast_days: forecastDays,
  });
}

/* -------------------------------- */
/* Daily Forecast */
/* -------------------------------- */

export async function getDailyForecast(
  latitude: number = -8.6705,
  longitude: number = 115.212,
  forecastDays: number = 7
) {
  return request("/forecast", {
    latitude,
    longitude,
    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
      "precipitation_probability_max",
      "weather_code",
      "wind_speed_10m_max",
      "wind_direction_10m_dominant",
      "uv_index_max",
    ],
    timezone: "auto",
    forecast_days: forecastDays,
  });
}

/* -------------------------------- */
/* Combined Weather Forecast */
/* -------------------------------- */

export async function getWeather(
  latitude: number = -8.6705,
  longitude: number = 115.212,
  forecastDays: number = 7
) {
  try {
    const [current, hourly, daily] = await Promise.all([
      getCurrentWeather(latitude, longitude),
      getHourlyForecast(latitude, longitude, forecastDays),
      getDailyForecast(latitude, longitude, forecastDays),
    ]);

    return {
      current: current.current,
      hourly: hourly.hourly,
      daily: daily.daily,
      location: { latitude, longitude },
      timezone: current.timezone,
      timestamp: new Date().toISOString(),
    };
  } catch (err) {
    console.error("Open-Meteo API Error:", err);
    throw new Error("Failed to fetch weather forecast data");
  }
}

/* -------------------------------- */
/* Weather Code Decoder */
/* -------------------------------- */

export function getWeatherDescription(code: number): string {
  const weatherCodes: Record<number, string> = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };

  return weatherCodes[code] || "Unknown";
}

export function getWeatherEmoji(code: number): string {
  if (code === 0) return "☀️";
  if (code === 1 || code === 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 86) return "❄️";
  if (code >= 95 && code <= 99) return "⛈️";
  return "🌡️";
}
