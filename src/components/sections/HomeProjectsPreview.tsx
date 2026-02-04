import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Dar es Salaam Urban Forest",
    location: "Dar es Salaam",
    impact: "50,000 trees planted",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
  },
  {
    title: "Coastal Clean-up Campaign",
    location: "Zanzibar",
    impact: "200+ volunteers engaged",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop",
  },
  {
    title: "Kilimanjaro Youth Conservation",
    location: "Moshi",
    impact: "15 communities reached",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
  },
];

const HomeProjectsPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Our Impact
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Real stories of environmental action making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-xl overflow-hidden bg-card border border-border/50 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="text-primary font-medium">{project.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outlinePrimary" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectsPreview;
