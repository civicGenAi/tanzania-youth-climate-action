import { ArrowRight, Globe, TreeDeciduous, Leaf, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const workAreas = [
  { icon: Globe, title: "Climate Action", description: "Education and awareness campaigns" },
  { icon: Leaf, title: "Biodiversity Protection", description: "Conservation and habitat restoration" },
  { icon: TreeDeciduous, title: "Tree Growing", description: "Large-scale reforestation initiatives" },
  { icon: Trash2, title: "Clean Communities", description: "Waste management programs" },
];

const HomeWorkPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Our Focus
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            What We Work On
          </h2>
          <p className="text-muted-foreground">
            Four key pillars driving environmental change across Tanzania
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {workAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="p-5 rounded-xl bg-card border border-border/50 text-center group hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <area.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{area.title}</h3>
              <p className="text-xs text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outlinePrimary" asChild>
            <Link to="/work">
              Explore All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeWorkPreview;
