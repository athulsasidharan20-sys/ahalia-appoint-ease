import { useState, useEffect } from "react";
import { Appointment } from "@/types/booking";

const STORAGE_KEY = "ahalia_appointments";

export const useAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  const saveAppointment = (appointment: Appointment) => {
    const updated = [...appointments, appointment];
    setAppointments(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const updateAppointmentStatus = (id: string, status: Appointment["status"]) => {
    const updated = appointments.map((apt) =>
      apt.id === id ? { ...apt, status } : apt
    );
    setAppointments(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const cancelAppointment = (id: string) => {
    const updated = appointments.filter((apt) => apt.id !== id);
    setAppointments(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    appointments,
    saveAppointment,
    updateAppointmentStatus,
    cancelAppointment,
  };
};
