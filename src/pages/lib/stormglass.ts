const API = "https://api.stormglass.io/v2/weather/point";

export async function getStormglass() {
  const params = [
    "waveHeight",
    "swellHeight",
    "swellPeriod",
    "swellDirection",
    "windSpeed",
    "windDirection",
    "waterTemperature",
  ].join(",");

  const url =
    `${API}?lat=-8.7933801&lng=115.1227102&params=${params}`;

  const response = await fetch(url, {
    headers: {
      Authorization:
        import.meta.env.VITE_STORMGLASS_API_KEY,
    },
  });

  if (!response.ok)
    throw new Error("Stormglass request failed");

  return response.json();
}
