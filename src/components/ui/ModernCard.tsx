import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ModernCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  image?: string;
  badge?: string;
  variant?: "default" | "featured" | "compact";
}

const ModernCard = ({
  icon: Icon,
  title,
  description,
  link,
  linkText = "Read more",
  image,
  badge,
  variant = "default",
}: ModernCardProps) => {
  const content = (
    <>
      {/* Image for featured cards */}
      {image && variant === "featured" && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          {badge && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className={variant === "featured" ? "p-6" : ""}>
        {/* Badge for non-featured cards */}
        {badge && variant !== "featured" && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-primary mb-4">
            {badge}
          </span>
        )}

        {/* Icon */}
        {Icon && (
          <div className="icon-container">
            <Icon className="w-6 h-6" />
          </div>
        )}

        {/* Title */}
        <h3
          className={`font-semibold text-foreground mb-2 group-hover:text-primary transition-colors ${
            variant === "compact" ? "text-base" : "text-lg"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-muted-foreground leading-relaxed ${
            variant === "compact" ? "text-sm mb-3" : "text-sm mb-4"
          }`}
        >
          {description}
        </p>

        {/* Link */}
        {link && (
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
            {linkText}
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {link ? (
        <Link
          to={link}
          className={`block card-modern relative overflow-hidden group ${
            variant === "featured" ? "p-0" : variant === "compact" ? "p-5" : "p-6"
          }`}
        >
          {content}
        </Link>
      ) : (
        <div
          className={`card-modern relative overflow-hidden group ${
            variant === "featured" ? "p-0" : variant === "compact" ? "p-5" : "p-6"
          }`}
        >
          {content}
        </div>
      )}
    </motion.div>
  );
};

export default ModernCard;