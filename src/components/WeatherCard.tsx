import { LucideIcon } from "lucide-react";

interface WeatherCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  description?: string;
  color?: string;
}

export default function WeatherCard({
  title,
  value,
  unit = "",
  icon: Icon,
  description,
  color = "text-cyan-400",
}: WeatherCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
            <span className="ml-1 text-lg font-medium text-slate-400">
              {unit}
            </span>
          </h2>

          {description && (
            <p className="mt-2 text-xs text-slate-500">
              {description}
            </p>
          )}
        </div>

        <div className="rounded-xl bg-slate-800 p-3">
          <Icon className={`h-7 w-7 ${color}`} />
        </div>

      </div>
    </div>
  );
}

🌊 Wave Height      🌊 Swell Height
💨 Wind Speed       🧭 Wind Direction
🌡 Water Temp       ☀ Air Temp
💧 Humidity         👀 Visibility
☀ UV Index         🌧 Rain Chance
🌊 High Tide        🌊 Low Tide
⭐⭐⭐⭐⭐ Surf Rating  🏄 Skill Level
