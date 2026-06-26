import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export interface SwellData {
  time: string;
  swellHeight: number;
  swellPeriod?: number;
}

interface SwellChartProps {
  data: SwellData[];
}

export default function SwellChart({
  data,
}: SwellChartProps) {
  return (
    <div className="h-80 w-full rounded-2xl bg-slate-900 p-4">

      <h2 className="mb-4 text-lg font-bold text-white">
        🌊 Swell Height
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

          <defs>
            <linearGradient
              id="swellGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#8b5cf6"
                stopOpacity={0.8}
              />

              <stop
                offset="100%"
                stopColor="#8b5cf6"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />

          <XAxis
            dataKey="time"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
            unit=" m"
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: 12,
            }}
          />

          <Area
            type="monotone"
            dataKey="swellHeight"
            stroke="#8b5cf6"
            fill="url(#swellGradient)"
            strokeWidth={3}
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}
