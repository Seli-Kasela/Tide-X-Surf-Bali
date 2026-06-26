import {
  Waves,
  Compass,
  Globe,
  ShieldCheck,
  MapPinned,
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Hero */}

        <section className="text-center">

          <h1 className="text-5xl font-bold">
            About TIDE X
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            TIDE X Surf Bali is a modern surf forecasting and surf lesson
            platform designed to help surfers discover the best conditions
            around Bali while connecting with experienced local instructors.
          </p>

        </section>

        {/* Mission */}

        <section className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-slate-900 p-8">

            <Waves className="mb-4 h-10 w-10 text-cyan-400" />

            <h2 className="text-2xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 text-slate-400">
              Deliver accurate marine forecasts, premium surf lessons,
              and unforgettable ocean experiences for surfers of every
              skill level.
            </p>

          </div>

          <div className="rounded-2xl bg-slate-900 p-8">

            <Compass className="mb-4 h-10 w-10 text-cyan-400" />

            <h2 className="text-2xl font-bold">
              Our Vision
            </h2>

            <p className="mt-4 text-slate-400">
              Become Bali's leading digital surf platform by combining
              live ocean intelligence with professional surf coaching.
            </p>

          </div>

        </section>

        {/* Features */}

        <section className="mt-20">

          <h2 className="mb-8 text-center text-3xl font-bold">
            What We Offer
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-900 p-6">

              <Globe className="mb-4 h-8 w-8 text-cyan-400" />

              <h3 className="text-xl font-semibold">
                Live Forecasts
              </h3>

              <p className="mt-3 text-slate-400">
                Real-time wave, swell, tide, wind, and weather conditions
                powered by trusted marine and weather services.
              </p>

            </div>

            <div className="rounded-2xl bg-slate-900 p-6">

              <ShieldCheck className="mb-4 h-8 w-8 text-cyan-400" />

              <h3 className="text-xl font-semibold">
                Professional Coaching
              </h3>

              <p className="mt-3 text-slate-400">
                Certified local surf instructors providing safe, fun,
                and personalized lessons for all ages.
              </p>

            </div>

            <div className="rounded-2xl bg-slate-900 p-6">

              <MapPinned className="mb-4 h-8 w-8 text-cyan-400" />

              <h3 className="text-xl font-semibold">
                Bali Surf Spots
              </h3>

              <p className="mt-3 text-slate-400">
                Explore Balangan, Bingin, Dreamland, Uluwatu,
                Padang Padang, and many more world-class surf breaks.
              </p>

            </div>

          </div>

        </section>

        {/* Footer */}

        <section className="mt-20 rounded-3xl bg-cyan-500/10 p-10 text-center">

          <h2 className="text-3xl font-bold">
            Ride the Tide. Feel the Freedom.
          </h2>

          <p className="mt-4 text-slate-300">
            TIDE X Surf Bali combines surf forecasting, ocean conditions,
            and premium surf lessons into one seamless platform for surfers
            visiting Bali.
          </p>

        </section>

      </div>

    </main>
  );
          }
