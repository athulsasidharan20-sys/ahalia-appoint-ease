import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Heart, Shield, Clock, Stethoscope, Check, UserCheck,
  MessageCircle, Headphones, Plus, ArrowRight, Phone, Mail,
  HeartPulse, Brain, Bone, Eye, Pill, FlaskConical
} from "lucide-react";
import { doctors } from "@/data/hospitals";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import featureImg from "@/assets/feature.jpg";

const carouselSlides = [
  { image: carousel1, title: "Cardiology" },
  { image: carousel2, title: "Neurology" },
];

const services = [
  { icon: HeartPulse, title: "Cardiology", desc: "Comprehensive heart care with advanced diagnostics and treatment for all cardiovascular conditions." },
  { icon: Brain, title: "Neurology", desc: "Expert neurological care for brain and nervous system disorders with cutting-edge technology." },
  { icon: Bone, title: "Orthopedics", desc: "Advanced bone and joint care including replacements, sports medicine, and rehabilitation." },
  { icon: Eye, title: "Ophthalmology", desc: "Complete eye care services from routine checkups to advanced surgical procedures." },
  { icon: Pill, title: "Ayurveda", desc: "Traditional Ayurvedic treatments combined with modern healthcare practices for holistic healing." },
  { icon: FlaskConical, title: "Laboratory", desc: "State-of-the-art diagnostic laboratory with accurate and timely test results." },
];

const features = [
  { icon: UserCheck, label: "Experience", title: "Doctors" },
  { icon: Check, label: "Quality", title: "Services" },
  { icon: MessageCircle, label: "Positive", title: "Consultation" },
  { icon: Headphones, label: "24 Hours", title: "Support" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Patient", text: "The care I received at Ahalia was exceptional. The doctors were incredibly knowledgeable and compassionate. I felt completely at ease throughout my treatment journey." },
  { name: "Priya Sharma", role: "Patient", text: "From the reception to the operating room, every staff member was professional and caring. Ahalia truly puts patients first. Highly recommended!" },
  { name: "Mohammed Ali", role: "Patient", text: "I was referred to Ahalia for a complex procedure. The medical team handled everything with precision and care. The follow-up care was equally impressive." },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % carouselSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTestimonial((s) => (s + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const displayDoctors = doctors.slice(0, 4);

  return (
    <div>
      {/* Hero / Header Section */}
      <section className="bg-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8 leading-tight">
              Good Health Is The Root Of All Happiness
            </h1>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "50+", label: "Expert Doctors" },
                { num: "200+", label: "Medical Staff" },
                { num: "10000+", label: "Happy Patients" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary-foreground/30 pl-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.num}</h2>
                  <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Carousel */}
          <div className="relative h-[300px] md:h-[400px] lg:h-auto overflow-hidden">
            {carouselSlides.map((slide, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: currentSlide === i ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">{slide.title}</h2>
                </div>
              </motion.div>
            ))}
            {/* Carousel dots */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {carouselSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === i ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={about1} alt="Doctor" className="rounded-lg w-3/4 ml-auto shadow-lg" />
              <img
                src={about2}
                alt="Medical Team"
                className="rounded-lg w-1/2 absolute bottom-0 left-0 border-4 border-background shadow-lg -mb-4"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why You Should Trust Us? Get To Know About Us!
              </h2>
              <p className="text-muted-foreground mb-3">
                Ahalia Hospitals has been providing quality healthcare services in Palakkad, Kerala for over two decades. Our commitment to patient care and medical excellence has made us a trusted name in healthcare.
              </p>
              <p className="text-muted-foreground mb-6">
                With state-of-the-art facilities and a team of experienced medical professionals, we ensure that every patient receives the best possible care in a compassionate environment.
              </p>
              <div className="space-y-3 mb-6">
                {["Quality health care", "Only Qualified Doctors", "Medical Research Professionals"].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </p>
                ))}
              </div>
              <Link to="/about">
                <Button className="rounded-full px-8">Read More</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-xl mx-auto"
          >
            <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Health Care Solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/50 rounded-lg p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4 text-primary" /> Read More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us Section */}
      <section className="bg-primary overflow-hidden my-16">
        <div className="container mx-auto px-0 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12 lg:p-16"
            >
              <span className="inline-block border border-primary-foreground/30 rounded-full py-1.5 px-5 text-sm text-primary-foreground/80 mb-4">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Why Choose Us</h2>
              <p className="text-primary-foreground/80 mb-8">
                With decades of experience in healthcare, Ahalia Hospitals provides comprehensive medical services with a patient-first approach. Our state-of-the-art facilities and expert team ensure the best outcomes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feat) => (
                  <div key={feat.title} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <feat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/70 text-sm">{feat.label}</p>
                      <h5 className="text-primary-foreground font-semibold">{feat.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[300px] lg:h-auto"
            >
              <img src={featureImg} alt="Feature" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors / Team Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-xl mx-auto"
          >
            <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">
              Doctors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Experienced Doctors</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayDoctors.map((doctor, i) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-lg overflow-hidden"
              >
                <div className="relative overflow-hidden bg-hero-gradient h-56 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary-foreground/30">
                    {doctor.name.split(" ")[1]?.charAt(0) || doctor.name.charAt(0)}
                  </span>
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                </div>
                <div className="bg-secondary/50 text-center p-5">
                  <h5 className="font-semibold text-foreground">{doctor.name}</h5>
                  <p className="text-primary text-sm">{doctor.department}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/doctors">
              <Button variant="outline" className="rounded-full px-8">
                View All Doctors <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">
                Appointment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Make An Appointment To Visit Our Doctor
              </h2>
              <p className="text-muted-foreground mb-6">
                Book your appointment easily through our online system. Choose your preferred hospital, doctor, and time slot for a hassle-free healthcare experience.
              </p>
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-lg flex items-center gap-4 p-5">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Call Us Now</p>
                    <h5 className="font-semibold text-foreground">+91 491 2505100</h5>
                  </div>
                </div>
                <div className="bg-secondary/50 rounded-lg flex items-center gap-4 p-5">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Mail Us Now</p>
                    <h5 className="font-semibold text-foreground">info@ahalia.org</h5>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Book CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary/50 rounded-lg p-8 md:p-10 flex flex-col items-center justify-center text-center"
            >
              <Stethoscope className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Book Your Appointment Online</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Select a hospital, choose your doctor, and book an appointment in just a few easy steps.
              </p>
              <Link to="/hospitals">
                <Button size="lg" className="rounded-full px-10">
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-xl mx-auto"
          >
            <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">
              Testimonial
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Say Our Patients!</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-full bg-secondary border-4 border-background mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </span>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-sm">
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h5 className="font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </h5>
                <span className="text-sm text-muted-foreground italic">
                  {testimonials[currentTestimonial].role}
                </span>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentTestimonial === i ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
