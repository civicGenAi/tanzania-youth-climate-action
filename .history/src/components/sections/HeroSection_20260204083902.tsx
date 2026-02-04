import { ArrowRight, Leaf, Users, Globe, TreePine, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const focusAreas = [
  { icon: Globe, label: "Climate Action", description: "Leading climate initiatives across Tanzania" },
  { icon: Leaf, label: "Environmental Conservation", description: "Protecting our natural heritage" },
  { icon: Users, label: "Youth Engagement", description: "Empowering the next generation" },
  { icon: TreePine, label: "Community Projects", description: "Building sustainable communities" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=600&fit=crop",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Mobile: Single floating image */}
        <motion.div
          className="absolute top-24 right-4 w-32 h-24 rounded-xl overflow-hidden shadow-xl opacity-40 lg:hidden"
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={heroImages[0]} alt="" className="w-full h-full object-cover" />
        </motion.div>
        
        {/* Desktop: Multiple floating images */}
        <motion.div
          className="hidden lg:block absolute top-20 right-10 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl opacity-60"
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={heroImages[0]} alt="" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div
          className="hidden lg:block absolute top-1/3 right-1/4 w-48 h-36 rounded-2xl overflow-hidden shadow-2xl opacity-50"
          animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src={heroImages[1]} alt="" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div
          className="hidden lg:block absolute bottom-1/4 right-20 w-56 h-40 rounded-2xl overflow-hidden shadow-2xl opacity-40"
          animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <img src={heroImages[2]} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-2/3 left-10 w-40 h-32 rounded-2xl overflow-hidden shadow-2xl opacity-30"
          animate={{ y: [0, 10, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <img src={heroImages[3]} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Decorative circles - adjusted for mobile */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-accent/30 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container-main relative z-10 pt-32 pb-16 lg:pt-24 lg:pb-12">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 lg:mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Youth-Led{" "}
            <span className="block mt-2 lg:inline lg:mt-0">
              Environmental{" "}
            </span>
            <span className="text-primary relative inline-block">
              Action
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>{" "}
            <span className="block mt-2 lg:inline lg:mt-0">
              for Tanzania
            </span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Mobile: Single rounded button */}
            <Button variant="hero" size="xl" asChild className="lg:hidden rounded-full">
              <Link to="/youth">
                Join the Network
              </Link>
            </Button>

            {/* Desktop: Two buttons */}
            <Button variant="hero" size="xl" asChild className="hidden lg:flex">
              <Link to="/youth">
                Join the Network
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="hidden lg:flex">
              <Link to="/projects">
                View Projects
              </Link>
            </Button>
          </motion.div>

          {/* Focus Areas - Hidden on mobile, shown on desktop */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-widest">
              Key Focus Areas
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.label}
                  className="card-modern p-5 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="icon-container w-12 h-12 rounded-xl mx-0 mb-3">
                    <area.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{area.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link to="/about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium uppercase tracking-wider">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;