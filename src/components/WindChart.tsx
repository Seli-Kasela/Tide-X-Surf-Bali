import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export interface WindData {
  time: string;
  windSpeed: number;
  windDirection?: number;
}

interface WindChartProps {
  data: WindData[];
}

export default function WindChart({
  data,
}: WindChartProps) {
  return (
    <div className="h-80 w-full rounded-2xl bg-slate-900 p-4">

      <h2 className="mb-4 text-lg font-bold text-white">
        💨 Wind Speed
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>

          <defs>
            <linearGradient
              id="windGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#f59e0b"
                stopOpacity={0.8}
              />

              <stop
                offset="100%"
                stopColor="#f59e0b"
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
            unit=" m/s"
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: 12,
            }}
          />

          <Line
            type="monotone"
            dataKey="windSpeed"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={false}
            isAnimationActive={true}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}
