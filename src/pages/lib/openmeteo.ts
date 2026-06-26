const URL =
"https://api.open-meteo.com/v1/forecast";

export async function getWeather() {

  const response = await fetch(
    `${URL}?latitude=-8.7933801&longitude=115.1227102&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,visibility,uv_index,precipitation_probability&timezone=auto`
  );

  if (!response.ok)
    throw new Error("Open-Meteo request failed");

  return response.json();
}
