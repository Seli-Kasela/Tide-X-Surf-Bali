import {
  Waves,
  Wind,
  Thermometer,
  Sun,
  CloudRain,
  Eye,
  Gauge,
} from "lucide-react";

const stats = [
  { title: "Wave Height", value: "-- m", icon: Waves },
  { title: "Swell Height", value: "-- m", icon: Waves },
  { title: "Wind Speed", value: "-- km/h", icon: Wind },
  { title: "Water Temp", value: "--°C", icon: Thermometer },
  { title: "Air Temp", value: "--°C", icon: Sun },
  { title: "Humidity", value: "--%", icon: CloudRain },
  { title: "Visibility", value: "-- km", icon: Eye },
  { title: "UV Index", value: "--", icon: Gauge },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl p-6">

        <header className="mb-8">
          <h1 className="text-4xl font-bold">
            🌊 TIDE X Surf Bali
          </h1>

          <p className="mt-2 text-slate-400">
            Live Surf Conditions • Balangan Beach
          </p>
        </header>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>
                </div>

                <item.icon className="h-10 w-10 text-cyan-400" />

              </div>
            </div>
          ))}

        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-4 text-2xl font-semibold">
            Today's Surf Rating
          </h2>

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                GOOD
              </h3>

              <p className="mt-2 text-slate-400">
                Suitable for beginner and intermediate surfers.
              </p>
            </div>

            <div className="text-7xl">
              🏄
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}
