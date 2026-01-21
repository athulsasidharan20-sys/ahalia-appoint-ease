import { motion } from "framer-motion";
import { Doctor, Hospital } from "@/types/booking";
import { Star, Clock, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  doctor: Doctor;
  hospital?: Hospital;
  index: number;
  onBook: (doctor: Doctor) => void;
}

export const DoctorCard = ({ doctor, hospital, index, onBook }: DoctorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-hero-gradient flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
        >
          <span className="text-2xl sm:text-3xl font-bold text-white">
            {doctor.name.split(" ")[1]?.charAt(0) || doctor.name.charAt(0)}
          </span>
        </motion.div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-foreground">{doctor.name}</h3>
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-sm font-semibold text-accent">{doctor.rating}</span>
            </div>
          </div>

          <p className="text-sm text-primary font-medium mb-1">{doctor.department}</p>
          <p className="text-sm text-muted-foreground mb-3">{doctor.qualification}</p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-primary" />
              <span>{doctor.experience} yrs exp</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" />
              <span>{doctor.availableTime}</span>
            </div>
          </div>

          {/* Available Days */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-1 mb-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => {
              const fullDay = day === "Mon" ? "Monday" :
                             day === "Tue" ? "Tuesday" :
                             day === "Wed" ? "Wednesday" :
                             day === "Thu" ? "Thursday" :
                             day === "Fri" ? "Friday" :
                             day === "Sat" ? "Saturday" : "Sunday";
              const isAvailable = doctor.availableDays.includes(fullDay);
              return (
                <span
                  key={day}
                  className={`text-xs px-2 py-1 rounded-md font-medium ${
                    isAvailable
                      ? "bg-success/10 text-success"
                      : "bg-muted text-muted-foreground/50"
                  }`}
                >
                  {day}
                </span>
              );
            })}
          </div>

          {hospital && (
            <p className="text-xs text-muted-foreground mb-3">
              📍 {hospital.name}
            </p>
          )}

          <Button onClick={() => onBook(doctor)} variant="hero" className="w-full sm:w-auto">
            <Calendar className="w-4 h-4 mr-1" />
            Book Appointment
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
