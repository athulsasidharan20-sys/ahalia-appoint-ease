import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { hospitals } from "@/data/hospitals";
import { HospitalCard } from "@/components/HospitalCard";
import { Hospital } from "@/types/booking";
import { PageHeader } from "@/components/PageHeader";

const HospitalsPage = () => {
  const navigate = useNavigate();

  const handleSelectHospital = (hospital: Hospital) => {
    navigate(`/doctors?hospital=${hospital.id}`);
  };

  return (
    <div>
      <PageHeader
        title="Our Hospitals"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Hospitals" },
        ]}
      />

      <div className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-xl mx-auto"
        >
          <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">
            Hospitals
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Healthcare Facilities
          </h2>
        </motion.div>

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
