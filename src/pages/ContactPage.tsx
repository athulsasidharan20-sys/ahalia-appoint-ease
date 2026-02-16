import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/PageHeader";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", { description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactCards = [
    { icon: MapPin, label: "Address", value: "Ahalia Campus, Palakkad, Kerala" },
    { icon: Phone, label: "Call Us Now", value: "+91 491 2505100" },
    { icon: Mail, label: "Mail Us Now", value: "info@ahalia.org" },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Pages" },
          { label: "Contact" },
        ]}
      />

      <div className="container mx-auto px-4 pb-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary/50 rounded-lg flex items-center gap-4 p-6"
            >
              <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">{card.label}</p>
                <h5 className="font-semibold text-foreground">{card.value}</h5>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/50 rounded-lg p-8"
          >
            <span className="inline-block border border-border rounded-full py-1.5 px-5 text-sm text-muted-foreground mb-4">
              Contact Us
            </span>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Have Any Query? Please Contact Us!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Leave a message here" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
              </div>
              <Button type="submit" className="w-full py-6">Send Message</Button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8569!2d76.6548!3d10.7867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzEyLjEiTiA3NsKwMzknMTcuMyJF!5e0!3m2!1sen!2sin!4v1603794290143!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              title="Ahalia Hospital Location"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
