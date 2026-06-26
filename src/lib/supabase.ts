import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* -------------------------------- */
/* Authentication */
/* -------------------------------- */

export async function signUp(email: string, password: string, name?: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}

export async function updateProfile(
  userId: string,
  updates: Record<string, unknown>
) {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", userId);

  if (error) throw error;
  return data;
}

/* -------------------------------- */
/* Bookings */
/* -------------------------------- */

export async function getBookings(userId: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("user_id", userId)
    .order("booking_date", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getBooking(bookingId: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", bookingId)
    .single();

  if (error) throw error;
  return data;
}

export async function createBooking(
  userId: string,
  bookingData: Record<string, unknown>
) {
  const { data, error } = await supabase
    .from("bookings")
    .insert({
      user_id: userId,
      ...bookingData,
      created_at: new Date().toISOString(),
    });

  if (error) throw error;
  return data;
}

export async function updateBooking(
  bookingId: string,
  updates: Record<string, unknown>
) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updates)
    .eq("id", bookingId);

  if (error) throw error;
  return data;
}

export async function deleteBooking(bookingId: string) {
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw error;
}

/* -------------------------------- */
/* Lessons */
/* -------------------------------- */

export async function getLessons(limit: number = 50) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("active", true)
    .limit(limit);

  if (error) throw error;
  return data;
}

export async function getLesson(lessonId: string) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("id", lessonId)
    .single();

  if (error) throw error;
  return data;
}

export async function createLesson(lessonData: Record<string, unknown>) {
  const { data, error } = await supabase
    .from("lessons")
    .insert({
      ...lessonData,
      created_at: new Date().toISOString(),
    });

  if (error) throw error;
  return data;
}

/* -------------------------------- */
/* Instructors */
/* -------------------------------- */

export async function getInstructors(limit: number = 50) {
  const { data, error } = await supabase
    .from("instructors")
    .select("*")
    .eq("active", true)
    .limit(limit);

  if (error) throw error;
  return data;
}

export async function getInstructor(instructorId: string) {
  const { data, error } = await supabase
    .from("instructors")
    .select("*")
    .eq("id", instructorId)
    .single();

  if (error) throw error;
  return data;
}

/* -------------------------------- */
/* Favorites */
/* -------------------------------- */

export async function getFavorites(userId: string) {
  const { data, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;
  return data;
}

export async function addFavorite(
  userId: string,
  lessonId: string
) {
  const { data, error } = await supabase
    .from("favorites")
    .insert({
      user_id: userId,
      lesson_id: lessonId,
      created_at: new Date().toISOString(),
    });

  if (error) throw error;
  return data;
}

export async function removeFavorite(
  userId: string,
  lessonId: string
) {
  const { error } = await supabase
    .from("favorites")
    .delete()
    .eq("user_id", userId)
    .eq("lesson_id", lessonId);

  if (error) throw error;
}

/* -------------------------------- */
/* Reviews */
/* -------------------------------- */

export async function getReviews(lessonId: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("lesson_id", lessonId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function createReview(
  userId: string,
  lessonId: string,
  reviewData: Record<string, unknown>
) {
  const { data, error } = await supabase
    .from("reviews")
    .insert({
      user_id: userId,
      lesson_id: lessonId,
      ...reviewData,
      created_at: new Date().toISOString(),
    });

  if (error) throw error;
  return data;
}
