import { useEffect, useState } from "react";

import { getStormglass } from "@/lib/stormglass";
import { getWeather } from "@/lib/openmeteo";
import { getSurfSpots } from "@/lib/base44";

export interface DashboardData {
  stormglass: any;
  weather: any;
  surfSpots: any[];
}

export function useDashboard() {
  const [data, setData] = useState<DashboardData>({
    stormglass: null,
    weather: null,
    surfSpots: [],
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  async function loadDashboard() {
    try {
      setLoading(true);

      const [
        stormglass,
        weather,
        surfSpots,
      ] = await Promise.all([
        getStormglass(),
        getWeather(),
        getSurfSpots(),
      ]);

      setData({
        stormglass,
        weather,
        surfSpots,
      });

      setError(null);
    } catch (err) {
      console.error(err);

      setError("Unable to load dashboard.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return {
    data,
    loading,
    error,
    refresh: loadDashboard,
  };
}
