import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const mainNavItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Hospitals", path: "/hospitals" },
  { name: "Doctors", path: "/doctors" },
];

const dropdownItems = [
  { name: "My Appointments", path: "/appointments" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = dropdownItems.some((item) => isActive(item.path));

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 px-2 py-4">
            <Building2 className="w-8 h-8 text-primary" />
            <img src={logo} alt="Ahalia Hospitals" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-5 py-7 text-[15px] font-medium transition-colors relative",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}

            {/* Pages Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-5 py-7 text-[15px] font-medium transition-colors",
                  isDropdownActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                Pages
                <ChevronDown className={cn("w-4 h-4 transition-transform", dropdownOpen && "rotate-180")} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-card border border-border shadow-lg min-w-[200px] py-2 rounded-b-lg">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "block px-5 py-2.5 text-sm transition-colors",
                        isActive(item.path)
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Appointment CTA */}
            <Link
              to="/hospitals"
              className="ml-4 bg-primary text-primary-foreground px-6 py-7 text-[15px] font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {[...mainNavItems, ...dropdownItems].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-[15px] font-medium transition-colors",
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/hospitals"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg text-[15px] font-medium text-center mt-2"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
