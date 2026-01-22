import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { hospitals } from "@/data/hospitals";
import { HospitalCard } from "@/components/HospitalCard";
import { Hospital } from "@/types/booking";
import logo from "@/assets/logo.png";

const HospitalsPage = () => {
  const navigate = useNavigate();

  const handleSelectHospital = (hospital: Hospital) => {
    navigate(`/doctors?hospital=${hospital.id}`);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header with Logo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.img
            src={logo}
            alt="Ahalia Hospitals"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-20 md:h-28 w-auto object-contain mx-auto mb-6"
          />
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
