import { ArrowRight, Building2, Users2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const partnerTypes = [
  { icon: Building2, label: "Civil Society Organizations", count: "15+" },
  { icon: Users2, label: "Community Groups", count: "50+" },
  { icon: Landmark, label: "Institutions", count: "10+" },
];

const HomePartnersPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Our Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Collaborating for Impact
          </h2>
          <p className="text-muted-foreground">
            Together with trusted partners, we amplify our reach across Tanzania
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={type.label}
              className="p-6 rounded-xl bg-card border border-border/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-3">
                <type.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xl font-bold text-primary mb-1">{type.count}</div>
              <div className="text-sm text-muted-foreground">{type.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outlinePrimary" asChild>
            <Link to="/partners">
              View All Partners
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePartnersPreview;
