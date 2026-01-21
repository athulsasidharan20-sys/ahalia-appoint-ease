import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">A</span>
              </motion.div>
              <span className="text-xl font-bold text-gradient">AHALIA</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              Providing quality healthcare services with compassion and care. 
              Your health is our priority.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for better healthcare
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Hospitals", path: "/hospitals" },
                { name: "Doctors", path: "/doctors" },
                { name: "My Appointments", path: "/appointments" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 491 2505100</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@ahalia.org</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Ahalia Campus, Palakkad, Kerala - 678557</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ahalia Healthcare. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Developed for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};
