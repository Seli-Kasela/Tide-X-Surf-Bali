import { User, Mail, Phone, MapPin, Calendar, LogOut, Edit2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  level: string;
  bio: string;
}

interface ProfileProps {
  onLogout?: () => void;
}

export default function Profile({ onLogout }: ProfileProps) {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState<UserProfile>({
    name: "John Surfer",
    email: "john@example.com",
    phone: "+62 812 3456 7890",
    location: "Bali, Indonesia",
    joinDate: "2024-01-15",
    level: "Intermediate",
    bio: "Passionate surfer exploring Bali's best breaks",
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setEditing(false);
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              🏄 My Profile
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your surf account
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg bg-red-500/20 px-4 py-2 text-red-300 transition hover:bg-red-500/30"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Profile Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

          {/* Edit Toggle */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              Account Information
            </h2>

            <button
              onClick={() => {
                if (editing) {
                  handleSave();
                } else {
                  setEditing(true);
                }
              }}
              className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-slate-950 font-semibold transition hover:bg-cyan-400"
            >
              <Edit2 size={18} />
              {editing ? "Save" : "Edit"}
            </button>
          </div>

          {/* Profile Fields */}
          <div className="space-y-6">

            {/* Name */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-400">
                <User size={18} />
                Full Name
              </label>

              {editing ? (
                <input
                  type="text"
                  value={editedProfile.name}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              ) : (
                <p className="text-lg text-white">
                  {profile.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-400">
                <Mail size={18} />
                Email Address
              </label>

              {editing ? (
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              ) : (
                <p className="text-lg text-white">
                  {profile.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-400">
                <Phone size={18} />
                Phone Number
              </label>

              {editing ? (
                <input
                  type="tel"
                  value={editedProfile.phone}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              ) : (
                <p className="text-lg text-white">
                  {profile.phone}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-400">
                <MapPin size={18} />
                Location
              </label>

              {editing ? (
                <input
                  type="text"
                  value={editedProfile.location}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      location: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              ) : (
                <p className="text-lg text-white">
                  {profile.location}
                </p>
              )}
            </div>

            {/* Skill Level */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-400">
                Skill Level
              </label>

              {editing ? (
                <select
                  value={editedProfile.level}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      level: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Pro</option>
                </select>
              ) : (
                <p className="text-lg text-cyan-400">
                  {profile.level}
                </p>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-400">
                Bio
              </label>

              {editing ? (
                <textarea
                  value={editedProfile.bio}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      bio: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              ) : (
                <p className="text-lg text-white">
                  {profile.bio}
                </p>
              )}
            </div>

            {/* Join Date (Read-only) */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-400">
                <Calendar size={18} />
                Member Since
              </label>

              <p className="text-lg text-slate-300">
                {new Date(profile.joinDate).toLocaleDateString()}
              </p>
            </div>

          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Total Lessons
            </p>

            <p className="mt-2 text-3xl font-bold text-cyan-400">
              12
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Hours in Water
            </p>

            <p className="mt-2 text-3xl font-bold text-cyan-400">
              48
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Favorite Spots
            </p>

            <p className="mt-2 text-3xl font-bold text-cyan-400">
              5
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
