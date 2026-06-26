import { useEffect, useState } from "react";
import {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} from "@/lib/supabase";

export interface Booking {
  id: string;
  user_id: string;
  lesson_id: string;
  instructor_id?: string;
  booking_date: string;
  start_time: string;
  end_time: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  participants: number;
  notes?: string;
  price: number;
  created_at: string;
  updated_at?: string;
}

interface UseBookingReturn {
  bookings: Booking[];
  currentBooking: Booking | null;
  loading: boolean;
  error: string | null;
  createNewBooking: (bookingData: Partial<Booking>) => Promise<void>;
  updateCurrentBooking: (updates: Partial<Booking>) => Promise<void>;
  deleteCurrentBooking: () => Promise<void>;
  fetchBookings: (userId: string) => Promise<void>;
  fetchBooking: (bookingId: string) => Promise<void>;
  refresh: () => Promise<void>;
}

export function useBooking(userId: string): UseBookingReturn {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = async (uid: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getBookings(uid);
      setBookings(data || []);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
      setError("Unable to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const fetchBooking = async (bookingId: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getBooking(bookingId);
      setCurrentBooking(data);
    } catch (err) {
      console.error("Failed to fetch booking:", err);
      setError("Unable to load booking");
    } finally {
      setLoading(false);
    }
  };

  const createNewBooking = async (bookingData: Partial<Booking>) => {
    try {
      setLoading(true);
      setError(null);

      const data = await createBooking(userId, bookingData);

      if (data && data.length > 0) {
        setBookings((prev) => [...prev, data[0] as Booking]);
      }
    } catch (err) {
      console.error("Failed to create booking:", err);
      setError("Unable to create booking");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateCurrentBooking = async (updates: Partial<Booking>) => {
    try {
      setLoading(true);
      setError(null);

      if (!currentBooking) {
        throw new Error("No booking selected");
      }

      await updateBooking(currentBooking.id, updates);

      setCurrentBooking((prev) =>
        prev ? { ...prev, ...updates } : null
      );

      setBookings((prev) =>
        prev.map((b) =>
          b.id === currentBooking.id ? { ...b, ...updates } : b
        )
      );
    } catch (err) {
      console.error("Failed to update booking:", err);
      setError("Unable to update booking");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteCurrentBooking = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!currentBooking) {
        throw new Error("No booking selected");
      }

      await deleteBooking(currentBooking.id);

      setBookings((prev) => prev.filter((b) => b.id !== currentBooking.id));
      setCurrentBooking(null);
    } catch (err) {
      console.error("Failed to delete booking:", err);
      setError("Unable to delete booking");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    await fetchBookings(userId);
  };

  useEffect(() => {
    if (userId) {
      fetchBookings(userId);
    }
  }, [userId]);

  return {
    bookings,
    currentBooking,
    loading,
    error,
    createNewBooking,
    updateCurrentBooking,
    deleteCurrentBooking,
    fetchBookings,
    fetchBooking,
    refresh,
  };
}
