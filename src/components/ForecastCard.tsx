import { LucideIcon } from "lucide-react";

interface ForecastDay {
  day: string;
  date: string;
  high: number;
  low: number;
  icon: LucideIcon;
  condition: string;
  rainChance?: number;
}

interface ForecastCardProps {
  forecast: ForecastDay[];
}

export default function ForecastCard({
  forecast,
}: ForecastCardProps) {
  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg">

      <h2 className="mb-6 text-lg font-bold text-white">
        📅 7-Day Forecast
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {forecast.map((day, index) => {
          const Icon = day.icon;
          return (
            <div
              key={index}
              className="group rounded-lg border border-slate-700 bg-slate-800/50 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-800"
            >

              <p className="text-sm font-semibold text-white">
                {day.day}
              </p>

              <p className="text-xs text-slate-400">
                {day.date}
              </p>

              <div className="my-3 flex items-center justify-center">
                <Icon className="h-8 w-8 text-cyan-400" />
              </div>

              <p className="text-center text-xs text-slate-300">
                {day.condition}
              </p>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">High</p>
                  <p className="text-lg font-bold text-white">
                    {day.high}°
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Low</p>
                  <p className="text-lg font-bold text-white">
                    {day.low}°
                  </p>
                </div>
              </div>

              {day.rainChance !== undefined && (
                <div className="mt-2 text-center">
                  <p className="text-xs text-slate-400">
                    💧 {day.rainChance}%
                  </p>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
