import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/Forecast";
import SurfSpots from "./pages/SurfSpots";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app min-h-screen bg-slate-950">
        <Navbar isAuthenticated={isAuthenticated} />

        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/surf-spots" element={<SurfSpots />} />
            <Route path="/about" element={<About />} />

            {/* Auth Routes */}
            <Route
              path="/login"
              element={
                <Login
                  onLogin={() => setIsAuthenticated(true)}
                />
              }
            />

            {/* Protected Routes */}
            {isAuthenticated && (
              <>
                <Route
                  path="/booking"
                  element={<Booking />}
                />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
              </>
            )}

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
