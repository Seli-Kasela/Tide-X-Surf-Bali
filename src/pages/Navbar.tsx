import { Link, useLocation } from "react-router-dom";
import { Waves, LogOut, User } from "lucide-react";

interface NavbarProps {
  isAuthenticated: boolean;
}

export default function Navbar({ isAuthenticated }: NavbarProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <Waves className="h-8 w-8 text-cyan-400" />
          <span className="text-xl font-bold">TIDE X Surf Bali</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className={`transition ${
              isActive("/")
                ? "text-cyan-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/forecast"
            className={`transition ${
              isActive("/forecast")
                ? "text-cyan-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Forecast
          </Link>

          <Link
            to="/surf-spots"
            className={`transition ${
              isActive("/surf-spots")
                ? "text-cyan-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Surf Spots
          </Link>

          {isAuthenticated && (
            <Link
              to="/booking"
              className={`transition ${
                isActive("/booking")
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Booking
            </Link>
          )}

          <Link
            to="/about"
            className={`transition ${
              isActive("/about")
                ? "text-cyan-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Auth Actions */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
            >
              <User className="h-4 w-4" />
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
