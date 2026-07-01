import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="text-center">

        {/* 404 Icon */}
        <div className="mb-6">
          <AlertCircle className="mx-auto h-24 w-24 text-cyan-400" />
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-white">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-xl text-slate-400">
          Oops! Page not found
        </p>

        <p className="mt-2 text-slate-500">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* CTA */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          🌊 Back to Dashboard
        </Link>

      </div>
    </main>
  );
}
