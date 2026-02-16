import { motion } from "framer-motion";
import { Check, UserCheck, MessageCircle, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { doctors } from "@/data/hospitals";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import featureImg from "@/assets/feature.jpg";

const features = [
  { icon: UserCheck, label: "Experience", title: "Doctors" },
  { icon: Check, label: "Quality", title: "Services" },
  { icon: MessageCircle, label: "Positive", title: "Consultation" },
  { icon: Headphones, label: "24 Hours", title: "Support" },
];

const AboutPage = () => {
  const displayDoctors = doctors.slice(0, 4);

  return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages" },
          { label: "About" },
        ]}
      />

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={about1} alt="Doctor" className="rounded-lg w-3/4 ml-auto shadow-lg" />
              <img src={about2} alt="Medical Team" className="rounded-lg w-1/2 absolute bottom-0 left-0 border-4 border-background shadow-lg -mb-4" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why You Should Trust Us? Get To Know About Us!</h2>
              <p className="text-muted-foreground mb-3">Ahalia Hospitals has been providing quality healthcare services in Palakkad, Kerala for over two decades. Our commitment to patient care and medical excellence has made us a trusted name in healthcare.</p>
              <p className="text-muted-foreground mb-6">With state-of-the-art facilities and a team of experienced medical professionals, we ensure that every patient receives the best possible care in a compassionate environment.</p>
              <div className="space-y-3 mb-6">
                {["Quality health care", "Only Qualified Doctors", "Medical Research Professionals"].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </p>
                ))}
              </div>
              <Button className="rounded-full px-8">Read More</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary overflow-hidden my-10">
        <div className="container mx-auto px-0 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <span className="inline-block border border-primary-foreground/30 rounded-full py-1.5 px-5 text-sm text-primary-foreground/80 mb-4">Features</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Why Choose Us</h2>
              <p className="text-primary-foreground/80 mb-8">With decades of experience in healthcare, Ahalia Hospitals provides comprehensive medical services with a patient-first approach.</p>
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
            </div>
            <div className="h-[300px] lg:h-auto">
              <img src={featureImg} alt="Feature" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">Doctors</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Experienced Doctors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayDoctors.map((doctor) => (
              <div key={doctor.id} className="group rounded-lg overflow-hidden">
                <div className="relative overflow-hidden bg-hero-gradient h-56 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary-foreground/30">
                    {doctor.name.split(" ")[1]?.charAt(0) || doctor.name.charAt(0)}
                  </span>
                </div>
                <div className="bg-secondary/50 text-center p-5">
                  <h5 className="font-semibold text-foreground">{doctor.name}</h5>
                  <p className="text-primary text-sm">{doctor.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
