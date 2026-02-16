import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Twitter, Facebook, Youtube, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const services = ["Cardiology", "Ophthalmology", "Neurology", "Orthopedics", "Ayurveda"];
const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Our Hospitals", path: "/hospitals" },
  { name: "Our Doctors", path: "/doctors" },
  { name: "Appointments", path: "/appointments" },
];

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-[hsl(200_50%_8%)] text-[hsl(195_20%_75%)] mt-10 pt-16">
      <div className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div>
            <h5 className="text-[hsl(0_0%_95%)] font-semibold text-lg mb-5">Address</h5>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Ahalia Campus, Palakkad, Kerala - 678557
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 491 2505100
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@ahalia.org
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-[hsl(195_20%_30%)] flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[hsl(0_0%_95%)] font-semibold text-lg mb-5">Services</h5>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm hover:text-primary transition-colors hover:tracking-wide duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[hsl(0_0%_95%)] font-semibold text-lg mb-5">Quick Links</h5>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary transition-colors hover:tracking-wide duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-[hsl(0_0%_95%)] font-semibold text-lg mb-5">Newsletter</h5>
            <p className="text-sm mb-4">Subscribe for health tips and updates from Ahalia Hospitals.</p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[hsl(200_40%_12%)] border-[hsl(200_30%_20%)] text-[hsl(195_20%_90%)] pr-24 h-12 placeholder:text-[hsl(195_15%_40%)]"
              />
              <Button
                size="sm"
                className="absolute right-1.5 top-1/2 -translate-y-1/2"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[hsl(200_30%_15%)]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <p>
              © <span className="border-b border-[hsl(195_20%_40%)]">Ahalia Hospitals</span>, All Rights Reserved.
            </p>
            <p>Developed for educational purposes only.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
