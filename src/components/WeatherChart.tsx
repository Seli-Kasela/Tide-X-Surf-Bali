import {
  ComposedChart,
  Bar,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export interface WeatherChartData {
  time: string;
  temperature: number;
  humidity: number;
  rainChance?: number;
}

interface WeatherChartProps {
  data: WeatherChartData[];
}

export default function WeatherChart({
  data,
}: WeatherChartProps) {
  return (
    <div className="h-80 w-full rounded-2xl bg-slate-900 p-4">

      <h2 className="mb-4 text-lg font-bold text-white">
        🌡 Weather Overview
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>

          <defs>
            <linearGradient
              id="tempGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#ef4444"
                stopOpacity={0.8}
              />

              <stop
                offset="100%"
                stopColor="#ef4444"
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
            yAxisId="left"
            label={{ value: "°C", angle: -90, position: "insideLeft" }}
          />

          <YAxis
            stroke="#94a3b8"
            yAxisId="right"
            orientation="right"
            label={{ value: "%", angle: 90, position: "insideRight" }}
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: 12,
            }}
          />

          <Legend />

          <Bar
            yAxisId="left"
            dataKey="temperature"
            fill="#ef4444"
            name="Temperature"
            radius={[8, 8, 0, 0]}
            opacity={0.7}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="humidity"
            stroke="#3b82f6"
            strokeWidth={3}
            name="Humidity"
            dot={false}
          />

        </ComposedChart>
      </ResponsiveContainer>

    </div>
  );
}
