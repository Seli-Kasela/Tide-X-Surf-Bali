const STORMGLASS_URL = "https://api.stormglass.io/v2";
const API_KEY = import.meta.env.VITE_STORMGLASS_API_KEY;

interface StormglassParams {
  lat: number;
  lng: number;
  params?: string[];
  start?: number;
  end?: number;
}

async function request(
  endpoint: string,
  params: Record<string, string | number> = {}
) {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    queryParams.append(key, String(value));
  });

  const url = `${STORMGLASS_URL}${endpoint}?${queryParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Stormglass Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/* -------------------------------- */
/* Wave Data */
/* -------------------------------- */

export async function getWaveData(
  lat: number = -8.6705,
  lng: number = 115.212
) {
  return request("/waves", {
    lat,
    lng,
    params: "waveHeight,wavePeriod,waveDirection,windWaveHeight,windWavePeriod,windWaveDirection,swellWaveHeight,swellWavePeriod,swellWaveDirection",
  });
}

export async function getWaveDataDetailed(
  lat: number,
  lng: number,
  start?: number,
  end?: number
) {
  const params: Record<string, string | number> = {
    lat,
    lng,
    params: "waveHeight,wavePeriod,waveDirection,windWaveHeight,windWavePeriod,windWaveDirection,swellWaveHeight,swellWavePeriod,swellWaveDirection",
  };

  if (start) params.start = start;
  if (end) params.end = end;

  return request("/waves", params);
}

/* -------------------------------- */
/* Tide Data */
/* -------------------------------- */

export async function getTideData(
  lat: number = -8.6705,
  lng: number = 115.212
) {
  return request("/tide/extremes", {
    lat,
    lng,
  });
}

export async function getTideDataPoints(
  lat: number = -8.6705,
  lng: number = 115.212,
  start?: number,
  end?: number
) {
  const params: Record<string, string | number> = {
    lat,
    lng,
  };

  if (start) params.start = start;
  if (end) params.end = end;

  return request("/tide/sea_level", params);
}

/* -------------------------------- */
/* Wind Data */
/* -------------------------------- */

export async function getWindData(
  lat: number = -8.6705,
  lng: number = 115.212
) {
  return request("/weather/point", {
    lat,
    lng,
    params: "windSpeed,windDirection,gust",
  });
}

/* -------------------------------- */
/* Combined Marine Forecast */
/* -------------------------------- */

export async function getStormglass(
  lat: number = -8.6705,
  lng: number = 115.212
) {
  try {
    const [waves, tide, wind] = await Promise.all([
      getWaveData(lat, lng),
      getTideData(lat, lng),
      getWindData(lat, lng),
    ]);

    return {
      waves,
      tide,
      wind,
      location: { lat, lng },
      timestamp: new Date().toISOString(),
    };
  } catch (err) {
    console.error("Stormglass API Error:", err);
    throw new Error("Failed to fetch marine forecast data");
  }
}
