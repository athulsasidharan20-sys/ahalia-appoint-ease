import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { hospitals } from "@/data/hospitals";
import { HospitalCard } from "@/components/HospitalCard";
import { Hospital } from "@/types/booking";
import { Building2 } from "lucide-react";

const HospitalsPage = () => {
  const navigate = useNavigate();

  const handleSelectHospital = (hospital: Hospital) => {
    navigate(`/doctors?hospital=${hospital.id}`);
  };

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
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Hospitals</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our network of specialized healthcare facilities, each offering
            world-class medical services and expert care.
          </p>
        </motion.div>

        {/* Hospital Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital, index) => (
            <HospitalCard
              key={hospital.id}
              hospital={hospital}
              index={index}
              onSelect={handleSelectHospital}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalsPage;
