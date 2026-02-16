import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { doctors, hospitals, getHospitalById, getDoctorsByHospital, getAllDepartments } from "@/data/hospitals";
import { DoctorCard } from "@/components/DoctorCard";
import { BookingModal } from "@/components/BookingModal";
import { PaymentModal } from "@/components/PaymentModal";
import { Doctor, BookingFormData, Appointment } from "@/types/booking";
import { Stethoscope, Filter, Building2 } from "lucide-react";
import { useAppointments } from "@/hooks/useAppointments";
import { toast } from "sonner";
import { PageHeader } from "@/components/PageHeader";

const DoctorsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const hospitalId = searchParams.get("hospital");

  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedHospital, setSelectedHospital] = useState<string>(hospitalId || "all");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);
  const { saveAppointment } = useAppointments();

  const hospital = hospitalId ? getHospitalById(hospitalId) : null;
  const allDepartments = getAllDepartments();

  const filteredDoctors = useMemo(() => {
    let result = [...doctors];
    if (selectedHospital !== "all") result = getDoctorsByHospital(selectedHospital);
    if (selectedDepartment !== "all") result = result.filter((d) => d.department === selectedDepartment);
    return result;
  }, [selectedHospital, selectedDepartment]);

  const handleBookDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsBookingOpen(true);
  };

  const handleBookingConfirm = (data: BookingFormData) => {
    setBookingData(data);
    setIsBookingOpen(false);
    setIsPaymentOpen(true);
  };

  const handlePaymentComplete = (appointment: Appointment) => {
    saveAppointment(appointment);
    setIsPaymentOpen(false);
    setSelectedDoctor(null);
    setBookingData(null);
    toast.success("Appointment booked successfully!", {
      description: `Your appointment with ${appointment.doctor.name} is confirmed.`,
    });
    navigate("/appointments");
  };

  return (
    <div>
      <PageHeader
        title="Our Doctors"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages" },
          { label: "Doctors" },
        ]}
      />

      <div className="container mx-auto px-4 pb-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 max-w-xl mx-auto"
        >
          <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">
            Doctors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {hospital ? hospital.name : "Our Experienced Doctors"}
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-secondary/50 rounded-lg p-4 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" /> Filters:
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                <Building2 className="w-4 h-4 text-primary" /> Hospital
              </div>
              <select
                value={selectedHospital}
                onChange={(e) => setSelectedHospital(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-card border border-border text-sm focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Hospitals</option>
                {hospitals.map((h) => (
                  <option key={h.id} value={h.id}>{h.name}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                <Stethoscope className="w-4 h-4 text-primary" /> Department
              </div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-card border border-border text-sm focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Departments</option>
                {allDepartments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Doctors List */}
        {filteredDoctors.length > 0 ? (
          <div className="space-y-4">
            {filteredDoctors.map((doctor, index) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                hospital={getHospitalById(doctor.hospitalId)}
                index={index}
                onBook={handleBookDoctor}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Stethoscope className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground">No doctors found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        doctor={selectedDoctor}
        hospital={selectedDoctor ? getHospitalById(selectedDoctor.hospitalId) || null : null}
        onConfirm={handleBookingConfirm}
      />
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        doctor={selectedDoctor}
        hospital={selectedDoctor ? getHospitalById(selectedDoctor.hospitalId) || null : null}
        bookingData={bookingData}
        onPaymentComplete={handlePaymentComplete}
      />
    </div>
  );
};

export default DoctorsPage;
