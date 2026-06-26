📚 TIDE X Surf Bali Documentation

Welcome to the TIDE X Surf Bali developer documentation.

This project provides live surf forecasting, weather conditions, tide information, and online surf lesson booking for Balangan Beach, Bali.

---

Project Overview

TIDE X combines marine and weather data into a single platform.

Data Providers

- Stormglass API
- Open-Meteo API
- Supabase
- Base44

---

Architecture

Stormglass
      │
Open-Meteo
      │
      ▼
Supabase Edge Functions
      │
      ▼
Supabase Database
      │
      ▼
Base44
      │
      ▼
React Dashboard

---

Folder Structure

src/
components/
pages/
hooks/
lib/
styles/

supabase/
functions/
migrations/

docs/

public/

---

Environment Variables

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

STORMGLASS_API_KEY=

BASE44_API_KEY=

Never commit real API keys to GitHub.

---

Database

Supabase Tables

- surf_conditions
- forecast
- bookings
- instructors
- surf_spots
- forecast_articles

---

Base44 Entities

- SurfSpot
- ForecastArticle
- Booking

---

APIs

Stormglass

Provides:

- Wave Height
- Swell Height
- Swell Period
- Wave Direction
- Wind
- Tide
- Water Temperature

---

Open-Meteo

Provides:

- Air Temperature
- Humidity
- Visibility
- UV Index
- Rain Probability
- Sunrise
- Sunset

---

Synchronization

A scheduled Edge Function runs every 30 minutes to:

1. Fetch Stormglass data.
2. Fetch Open-Meteo data.
3. Merge the responses.
4. Update Supabase.
5. Synchronize Base44.

---

Frontend Pages

- Dashboard
- Forecast
- Surf Spots
- Surf Lessons
- Booking
- Contact
- About

---

Features

- Live Surf Dashboard
- 24-Hour Forecast
- 7-Day Forecast
- Tide Charts
- Surf Rating
- Booking System
- Forecast Articles
- Responsive Design
- Progressive Web App

---

Deployment

- GitHub
- Vercel
- Supabase
- Base44

---

Coordinates

Balangan Beach, Bali

Latitude:

-8.7933801

Longitude:

115.1227102

---

License

MIT License

---

Developed for TIDE X Surf Bali.
