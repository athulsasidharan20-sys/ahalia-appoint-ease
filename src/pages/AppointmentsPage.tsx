import { motion } from "framer-motion";
import { useAppointments } from "@/hooks/useAppointments";
import { Calendar, Clock, User, Phone, Trash2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AppointmentsPage = () => {
  const { appointments, cancelAppointment } = useAppointments();

  const handleCancel = (id: string, doctorName: string) => {
    cancelAppointment(id);
    toast.success("Appointment cancelled", {
      description: `Your appointment with ${doctorName} has been cancelled.`,
    });
  };

  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Appointments</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View and manage your booked appointments.
          </p>
        </motion.div>

        {/* Appointments List */}
        {sortedAppointments.length > 0 ? (
          <div className="max-w-3xl mx-auto space-y-4">
            {sortedAppointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      {appointment.status === "confirmed" ? (
                        <span className="flex items-center gap-1 text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          Confirmed
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                          <AlertCircle className="w-3 h-3" />
                          Pending
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">
                        ID: {appointment.id}
                      </span>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-white">
                          {appointment.doctor.name.split(" ")[1]?.charAt(0) || "D"}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {appointment.doctor.name}
                        </h3>
                        <p className="text-sm text-primary">
                          {appointment.doctor.department}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {appointment.hospital.name}
                        </p>
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4 text-primary" />
                        <span>{appointment.patientName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>{appointment.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>
                          {new Date(appointment.date).toLocaleDateString("en-IN", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col gap-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleCancel(appointment.id, appointment.doctor.name)}
                      className="flex-1 sm:flex-none"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Cancel
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Calendar className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              No appointments yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your first appointment with our expert doctors.
            </p>
            <Link to="/hospitals">
              <Button variant="hero">Book Now</Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
