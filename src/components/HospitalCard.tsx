import { motion } from "framer-motion";
import { Hospital } from "@/types/booking";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface HospitalCardProps {
  hospital: Hospital;
  index: number;
  onSelect: (hospital: Hospital) => void;
}

export const HospitalCard = ({ hospital, index, onSelect }: HospitalCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -6, 
        scale: 1.015,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500 ease-out"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src={logo}
            alt="Ahalia Hospitals"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.08 + 0.15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="h-20 w-auto object-contain drop-shadow-lg"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 animate-float" />
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/10 animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {hospital.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {hospital.description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{hospital.address}</span>
        </div>

        {/* Departments Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hospital.departments.slice(0, 3).map((dept) => (
            <span
              key={dept}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {dept}
            </span>
          ))}
          {hospital.departments.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              +{hospital.departments.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => onSelect(hospital)}
          className="w-full group/btn"
          variant="default"
        >
          View Doctors
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};
