import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  change?: number;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
}

export default function StatCard({
  label,
  value,
  unit = "",
  trend,
  change,
  description,
  backgroundColor = "bg-gradient-to-br from-cyan-900/20 to-blue-900/20",
  textColor = "text-cyan-400",
  icon,
}: StatCardProps) {
  const trendIcon = () => {
    if (!trend || !change) return null;
    if (trend === "up") {
      return (
        <div className="flex items-center gap-1 text-green-400">
          <TrendingUp className="h-4 w-4" />
          <span className="text-xs font-semibold">+{change}%</span>
        </div>
      );
    }
    if (trend === "down") {
      return (
        <div className="flex items-center gap-1 text-red-400">
          <TrendingDown className="h-4 w-4" />
          <span className="text-xs font-semibold">-{change}%</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`group rounded-2xl border border-slate-700 ${backgroundColor} p-6 shadow-lg transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10`}
    >

      <div className="flex items-start justify-between">

        <div className="flex-1">
          <p className="text-sm font-medium text-slate-400">
            {label}
          </p>

          <div className="mt-2 flex items-baseline gap-1">
            <h3 className="text-3xl font-bold text-white">
              {value}
            </h3>

            {unit && (
              <span className={`text-lg font-medium ${textColor}`}>
                {unit}
              </span>
            )}
          </div>

          {description && (
            <p className="mt-2 text-xs text-slate-500">
              {description}
            </p>
          )}

          {trendIcon() && (
            <div className="mt-3">
              {trendIcon()}
            </div>
          )}
        </div>

        {icon && (
          <div className={`rounded-xl bg-slate-800 p-3`}>
            {icon}
          </div>
        )}

      </div>

    </div>
  );
}
