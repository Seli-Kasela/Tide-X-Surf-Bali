import {
  CalendarDays,
  Waves,
  Wind,
  Thermometer,
  CloudRain,
} from "lucide-react";

const forecast = [
  {
    day: "Today",
    wave: "1.4 m",
    wind: "12 km/h",
    temp: "29°C",
    rain: "10%",
    rating: "Good",
  },
  {
    day: "Tomorrow",
    wave: "1.7 m",
    wind: "10 km/h",
    temp: "30°C",
    rain: "5%",
    rating: "Excellent",
  },
  {
    day: "Sunday",
    wave: "2.0 m",
    wind: "15 km/h",
    temp: "29°C",
    rain: "20%",
    rating: "Advanced",
  },
];
export default function Forecast() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl p-6">

        <header className="mb-8">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-10 w-10 text-cyan-400" />

            <div>
              <h1 className="text-4xl font-bold">
                7 Day Surf Forecast
              </h1>

              <p className="text-slate-400">
                Balangan Beach • Bali
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">

          {forecast.map((item) => (
            <div
              key={item.day}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >

              <h2 className="text-2xl font-bold">
                {item.day}
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Waves className="text-cyan-400" />
                    Wave
                  </div>

                  <strong>{item.wave}</strong>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wind className="text-cyan-400" />
                    Wind
                  </div>

                  <strong>{item.wind}</strong>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="text-cyan-400" />
                    Temperature
                  </div>

                  <strong>{item.temp}</strong>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CloudRain className="text-cyan-400" />
                    Rain
                  </div>

                  <strong>{item.rain}</strong>
                </div>

              </div>

              <div className="mt-8 rounded-xl bg-cyan-500/10 p-4 text-center">

                <p className="text-sm text-slate-400">
                  Surf Rating
                </p>

                <h3 className="mt-2 text-3xl font-bold text-cyan-400">
                  {item.rating}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}
