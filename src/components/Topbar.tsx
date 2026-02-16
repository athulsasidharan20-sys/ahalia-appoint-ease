import { MapPin, Clock, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Topbar = () => {
  return (
    <div className="hidden lg:block bg-secondary/50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Ahalia Campus, Palakkad, Kerala</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>Mon - Sat : 08.00 AM - 08.00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>+91 491 2505100</span>
            </div>
            <div className="flex items-center gap-1">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-7 h-7 rounded-full bg-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
