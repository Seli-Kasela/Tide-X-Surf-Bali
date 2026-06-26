import { Calendar, Users, Phone, Mail, User, Send } from "lucide-react";
import { useState } from "react";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  lesson: string;
  participants: number;
  date: string;
  time: string;
  message: string;
}

export default function Booking() {
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    lesson: "Private Beginner",
    participants: 1,
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-12">

        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            🏄 Book Your Surf Lesson
          </h1>

          <p className="mt-2 text-slate-400">
            Reserve your surf experience with TIDE X Surf Bali
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl bg-slate-900 p-8 shadow-xl"
        >

          {/* Personal Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-cyan-400">
              Personal Information
            </h2>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                <User size={18} />
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                <Mail size={18} />
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                <Phone size={18} />
                Phone / WhatsApp
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
                placeholder="+62..."
              />
            </div>
          </div>

          {/* Lesson Details */}
          <div className="space-y-4 border-t border-slate-700 pt-6">
            <h2 className="text-xl font-semibold text-cyan-400">
              Lesson Details
            </h2>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Lesson Type
              </label>

              <select
                name="lesson"
                value={form.lesson}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
              >
                <option>Private Beginner</option>
                <option>Semi Private</option>
                <option>Group Lesson</option>
                <option>Kids Lesson</option>
                <option>Intermediate Coaching</option>
                <option>Surf Guiding</option>
              </select>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                <Users size={18} />
                Participants
              </label>

              <input
                type="number"
                name="participants"
                value={form.participants}
                onChange={handleChange}
                min="1"
                max="10"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Calendar size={18} />
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 border-t border-slate-700 pt-6">
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Send size={18} />
              Additional Notes
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-cyan-500"
              placeholder="Any special requests or questions?"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 px-6 py-3 text-lg font-bold text-slate-950 transition hover:bg-cyan-400"
          >
            Book Now
          </button>

          {submitted && (
            <div className="rounded-xl bg-green-500/20 border border-green-500 px-4 py-3 text-green-300">
              ✓ Booking submitted successfully! We'll contact you soon.
            </div>
          )}

        </form>

      </div>
    </main>
  );
}
