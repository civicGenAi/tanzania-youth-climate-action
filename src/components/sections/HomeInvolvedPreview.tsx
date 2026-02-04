import { ArrowRight, UserPlus, Heart, Building, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const actions = [
  { icon: UserPlus, title: "Join as Youth", description: "Become a network member" },
  { icon: Heart, title: "Volunteer", description: "Contribute to projects" },
  { icon: Building, title: "Partner With Us", description: "Register your organization" },
  { icon: Mail, title: "Contact Us", description: "Get in touch with our team" },
];

const HomeInvolvedPreview = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Take Action
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Get Involved Today
          </h2>
          <p className="text-muted-foreground">
            Every action matters. Join Tanzania's movement for environmental change.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to="/involved"
                className="block p-5 rounded-xl bg-card border border-border/50 text-center hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                  <action.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/involved">
              Explore All Opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeInvolvedPreview;
