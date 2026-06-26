import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export interface TideData {
  time: string;
  height: number;
}

interface TideChartProps {
  data: TideData[];
}

export default function TideChart({
  data,
}: TideChartProps) {
  return (
    <div className="h-80 w-full rounded-2xl bg-slate-900 p-4">

      <h2 className="mb-4 text-lg font-bold text-white">
        🌊 Tide Chart
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

          <defs>
            <linearGradient
              id="tideGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#22d3ee"
                stopOpacity={0.8}
              />

              <stop
                offset="100%"
                stopColor="#22d3ee"
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

          <Tooltip />

          <Area
            type="monotone"
            dataKey="height"
            stroke="#22d3ee"
            fill="url(#tideGradient)"
            strokeWidth={3}
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}
