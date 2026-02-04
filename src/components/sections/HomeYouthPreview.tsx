import { ArrowRight, Users, Award, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "10,000+", label: "Youth Members" },
  { icon: MapPin, value: "26", label: "Regional Chapters" },
  { icon: Award, value: "500+", label: "Youth Leaders" },
  { icon: BookOpen, value: "50+", label: "Training Programs" },
];

const HomeYouthPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Youth Network
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join Tanzania's Largest Youth Environmental Movement
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Become part of a nationwide network of young environmental champions. 
              Access training, leadership opportunities, and connect with peers 
              dedicated to protecting Tanzania's natural heritage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <Link to="/youth">
                  Become a Member
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outlinePrimary" asChild>
                <Link to="/youth">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl bg-card border border-border/50 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeYouthPreview;
