const BASE44_URL =
  import.meta.env.VITE_BASE44_URL;

const API_KEY =
  import.meta.env.VITE_BASE44_API_KEY;

async function request(
  endpoint: string,
  options: RequestInit = {}
) {
  const response = await fetch(
    `${BASE44_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        api_key: API_KEY,
        ...options.headers,
      },
      ...options,
    }
  );

  if (!response.ok) {
    throw new Error(
      `Base44 Error: ${response.status}`
    );
  }

  return response.json();
}

/* -------------------------------- */
/* Surf Spots */
/* -------------------------------- */

export function getSurfSpots() {
  return request("/entities/SurfSpot");
}

export function getSurfSpot(id: string) {
  return request(`/entities/SurfSpot/${id}`);
}

export function createSurfSpot(data: unknown) {
  return request("/entities/SurfSpot", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateSurfSpot(
  id: string,
  data: unknown
) {
  return request(`/entities/SurfSpot/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

/* -------------------------------- */
/* Forecast Articles */
/* -------------------------------- */

export function getArticles() {
  return request("/entities/ForecastArticle");
}

export function createArticle(data: unknown) {
  return request("/entities/ForecastArticle", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/* -------------------------------- */
/* Booking */
/* -------------------------------- */

export function getBookings() {
  return request("/entities/Booking");
}

export function createBooking(data: unknown) {
  return request("/entities/Booking", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/* -------------------------------- */
/* Users */
/* -------------------------------- */

export function getUsers() {
  return request("/entities/User");
    }
