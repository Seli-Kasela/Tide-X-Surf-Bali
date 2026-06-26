import { useEffect, useState } from "react";

import { getStormglass } from "@/lib/stormglass";
import { getWeather } from "@/lib/openmeteo";

export interface ForecastData {
  hourly: any[];
  daily: any[];
  marine: any;
}

export function useForecast() {
  const [forecast, setForecast] = useState<ForecastData>({
    hourly: [],
    daily: [],
    marine: null,
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  async function loadForecast() {
    try {
      setLoading(true);

      const [marine, weather] = await Promise.all([
        getStormglass(),
        getWeather(),
      ]);

      setForecast({
        marine,
        hourly: weather.hourly ?? [],
        daily: weather.daily ?? [],
      });

      setError(null);
    } catch (err) {
      console.error(err);

      setError("Unable to load forecast.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadForecast();
  }, []);

  return {
    forecast,
    loading,
    error,
    refresh: loadForecast,
  };
}
