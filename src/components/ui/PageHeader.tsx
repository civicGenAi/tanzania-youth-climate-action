import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  badgeIcon?: LucideIcon;
  children?: ReactNode;
  backgroundImage?: string;
  theme?: "nature" | "community" | "action" | "collaboration" | "youth" | "news" | "default";
}

const themeGradients = {
  nature: "from-emerald-900/90 via-emerald-800/80 to-primary/70",
  community: "from-slate-900/90 via-slate-800/80 to-primary/60",
  action: "from-amber-900/80 via-orange-900/70 to-primary/60",
  collaboration: "from-blue-900/90 via-indigo-900/80 to-primary/60",
  youth: "from-violet-900/90 via-purple-900/80 to-primary/60",
  news: "from-rose-900/80 via-pink-900/70 to-primary/60",
  default: "from-foreground/90 via-foreground/70 to-primary/50",
};

const PageHeader = ({ 
  title, 
  description, 
  badge, 
  badgeIcon: BadgeIcon,
  children,
  backgroundImage,
  theme = "default"
}: PageHeaderProps) => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${themeGradients[theme]}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      )}
      
      {/* Fallback gradient background */}
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 gradient-mesh" />
          <motion.div
            className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/30 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      {/* Floating particles for visual interest */}
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container-main relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          {badge && (
            <motion.span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                backgroundImage 
                  ? "bg-white/20 text-white backdrop-blur-sm border border-white/20" 
                  : "bg-accent text-primary"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
              {badge}
            </motion.span>
          )}
          
          <motion.h1
            className={`heading-hero mb-6 ${backgroundImage ? "text-white" : "text-foreground"}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p
              className={`text-xl md:text-2xl leading-relaxed ${
                backgroundImage ? "text-white/90" : "text-muted-foreground"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom decorative wave */}
      {backgroundImage && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-background"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default PageHeader;
