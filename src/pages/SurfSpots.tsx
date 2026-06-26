import { MapPin, Waves, Wind, Star } from "lucide-react";

const surfSpots = [
  {
    id: 1,
    name: "Balangan Beach",
    region: "Uluwatu, Bali",
    difficulty: "Beginner",
    wave: "1.2 - 1.8 m",
    wind: "Offshore",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    name: "Dreamland",
    region: "Uluwatu, Bali",
    difficulty: "Intermediate",
    wave: "1.5 - 2.5 m",
    wind: "Offshore",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    id: 3,
    name: "Bingin",
    region: "Uluwatu, Bali",
    difficulty: "Advanced",
    wave: "2.0 - 3.5 m",
    wind: "Offshore",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
  },
];

export default function SurfSpots() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <header className="mb-10">
          <h1 className="text-4xl font-bold">
            🌊 Surf Spots
          </h1>

          <p className="mt-2 text-slate-400">
            Discover Bali's best surfing locations.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {surfSpots.map((spot) => (
            <div
              key={spot.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg"
            >

              <img
                src={spot.image}
                alt={spot.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {spot.name}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-slate-400">
                  <MapPin size={16} />
                  {spot.region}
                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <Waves size={18} />
                      Wave
                    </span>

                    <strong>{spot.wave}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <Wind size={18} />
                      Wind
                    </span>

                    <strong>{spot.wind}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Difficulty</span>

                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
                      {spot.difficulty}
                    </span>
                  </div>

                </div>

                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={18} fill="currentColor" />
                    <span>{spot.rating}</span>
                  </div>

                  <button className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
                    View Forecast
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
              }
