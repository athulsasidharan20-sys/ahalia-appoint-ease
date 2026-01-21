import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Smartphone, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Doctor, Hospital, BookingFormData, Appointment } from "@/types/booking";
import { useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  hospital: Hospital | null;
  bookingData: BookingFormData | null;
  onPaymentComplete: (appointment: Appointment) => void;
}

export const PaymentModal = ({
  isOpen,
  onClose,
  doctor,
  hospital,
  bookingData,
  onPaymentComplete,
}: PaymentModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const consultationFee = 500; // Demo fee

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);

      if (doctor && hospital && bookingData) {
        const appointment: Appointment = {
          id: `APT-${Date.now()}`,
          patientName: bookingData.patientName,
          phone: bookingData.phone,
          date: bookingData.date,
          time: bookingData.time,
          doctor,
          hospital,
          status: "confirmed",
          createdAt: new Date().toISOString(),
        };

        setTimeout(() => {
          onPaymentComplete(appointment);
          setIsComplete(false);
        }, 2000);
      }
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && doctor && bookingData && (
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
            className="bg-card rounded-2xl p-6 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isComplete ? (
              // Success State
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center"
                >
                  <CheckCircle className="w-10 h-10 text-success" />
                </motion.div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Payment Successful!
                </h2>
                <p className="text-muted-foreground">
                  Your appointment has been confirmed.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Payment</h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Booking Summary */}
                <div className="bg-muted/50 rounded-xl p-4 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Doctor</span>
                    <span className="font-medium">{doctor.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">
                      {new Date(bookingData.date).toLocaleDateString("en-IN", {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{bookingData.time}</span>
                  </div>
                  <div className="border-t border-border my-2" />
                  <div className="flex justify-between">
                    <span className="font-semibold">Consultation Fee</span>
                    <span className="font-bold text-primary">₹{consultationFee}</span>
                  </div>
                </div>

                {/* UPI Payment Option */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    Pay via UPI
                  </h3>
                  
                  {/* QR Code */}
                  <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                    <div className="w-40 h-40 bg-foreground rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      {/* Simulated QR Code Pattern */}
                      <div className="absolute inset-2 grid grid-cols-8 gap-0.5">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`${
                              Math.random() > 0.5 ? "bg-white" : "bg-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <QrCode className="w-8 h-8 text-white z-10" />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Scan with any UPI app to pay
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      ahalia@upi
                    </p>
                  </div>
                </div>

                {/* Simulate Payment Button */}
                <Button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  {isProcessing ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Payment (Demo)
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  This is a demo payment. No actual transaction will occur.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
