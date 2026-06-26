import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export interface WaveData {
  time: string;
  waveHeight: number;
}

interface WaveChartProps {
  data: WaveData[];
}

export default function WaveChart({
  data,
}: WaveChartProps) {
  return (
    <div className="h-80 w-full rounded-2xl bg-slate-900 p-4">

      <h2 className="mb-4 text-lg font-bold text-white">
        🌊 Wave Height
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

          <defs>
            <linearGradient
              id="waveGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#06b6d4"
                stopOpacity={0.9}
              />

              <stop
                offset="95%"
                stopColor="#06b6d4"
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
            dataKey="waveHeight"
            stroke="#06b6d4"
            fill="url(#waveGradient)"
            strokeWidth={3}
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}
