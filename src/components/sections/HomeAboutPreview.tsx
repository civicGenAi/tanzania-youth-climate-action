import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const highlights = [
  { icon: Target, label: "Our Mission", text: "Mobilizing youth across Tanzania for climate action" },
  { icon: Eye, label: "Our Vision", text: "A sustainable, climate-resilient Tanzania" },
  { icon: Heart, label: "Our Values", text: "Collaboration, integrity, and environmental stewardship" },
];

const HomeAboutPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Who We Are
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Green Samia is Tanzania's premier youth-led environmental platform, 
              officially supported by the President's Office. We unite young changemakers 
              across all regions to drive meaningful climate action and conservation.
            </p>
            <Button variant="outlinePrimary" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutPreview;
