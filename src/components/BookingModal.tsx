import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Calendar, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Doctor, Hospital, BookingFormData } from "@/types/booking";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  hospital: Hospital | null;
  onConfirm: (data: BookingFormData) => void;
}

export const BookingModal = ({
  isOpen,
  onClose,
  doctor,
  hospital,
  onConfirm,
}: BookingModalProps) => {
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: "",
    phone: "",
    date: "",
    time: "",
  });

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.patientName && formData.phone && formData.date && formData.time) {
      onConfirm(formData);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && doctor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-card rounded-2xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Book Appointment</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Doctor Info */}
            <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl mb-6">
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  {doctor.name.split(" ")[1]?.charAt(0) || "D"}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                <p className="text-sm text-primary">{doctor.department}</p>
                {hospital && (
                  <p className="text-xs text-muted-foreground">{hospital.name}</p>
                )}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="patientName" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Patient Name
                </Label>
                <Input
                  id="patientName"
                  placeholder="Enter your full name"
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Appointment Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Select Time Slot
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                        formData.time === time
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full mt-6">
                <CreditCard className="w-4 h-4 mr-2" />
                Proceed to Payment
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
