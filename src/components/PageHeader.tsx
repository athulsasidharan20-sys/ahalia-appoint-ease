import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
}

export const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="bg-hero-gradient py-16 md:py-20 mb-10">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ol className="flex items-center gap-2 text-sm uppercase tracking-wide">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-primary-foreground/50">/</span>}
                {crumb.path ? (
                  <Link to={crumb.path} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground font-semibold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>
      </div>
    </div>
  );
};
