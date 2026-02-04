import { MapPin, Calendar, CheckCircle2, Clock, ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Dar es Salaam Urban Tree Planting",
    location: "Dar es Salaam",
    status: "ongoing",
    impact: "10,000+ trees planted across 15 neighborhoods",
    description: "A city-wide initiative to increase urban green cover and combat heat islands.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
  },
  {
    title: "Coastal Mangrove Restoration",
    location: "Tanga Region",
    status: "ongoing",
    impact: "500 hectares of mangrove forest restored",
    description: "Protecting coastal communities and marine biodiversity through mangrove restoration.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  },
  {
    title: "Youth Climate Education Program",
    location: "Nationwide",
    status: "completed",
    impact: "50,000 students reached in 200 schools",
    description: "Comprehensive climate literacy program for secondary schools across Tanzania.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
  },
  {
    title: "Kilimanjaro Clean-Up Initiative",
    location: "Kilimanjaro Region",
    status: "completed",
    impact: "20 tons of waste collected and recycled",
    description: "Protecting the iconic mountain through waste management and cleanup campaigns.",
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&h=600&fit=crop",
  },
  {
    title: "Sustainable Agriculture Training",
    location: "Mwanza Region",
    status: "ongoing",
    impact: "2,000 farmers trained in eco-friendly practices",
    description: "Teaching sustainable farming methods to reduce environmental impact.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e7?w=800&h=600&fit=crop",
  },
  {
    title: "Community Solar Project",
    location: "Dodoma Region",
    status: "completed",
    impact: "500 households with clean energy access",
    description: "Bringing renewable energy to rural communities.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  },
];

const locations = [
  "Dar es Salaam", "Arusha", "Mwanza", "Tanga", "Dodoma",
  "Kilimanjaro", "Mbeya", "Morogoro", "Kagera", "Mara",
];

const Projects = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Our Projects"
        description="Real stories of environmental impact driven by youth across Tanzania. Every project represents communities coming together for positive change."
        badge="Impact Stories"
        badgeIcon={Rocket}
        backgroundImage="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&h=1080&fit=crop"
        theme="action"
      />

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="card-modern p-0 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 ${
                    project.status === "ongoing" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-foreground text-background"
                  }`}>
                    {project.status === "ongoing" ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    {project.location}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="p-3 rounded-lg bg-accent/50 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Impact</p>
                    <p className="text-sm font-medium text-foreground">{project.impact}</p>
                  </div>
                  
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all cursor-pointer">
                    Read full story <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Map */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-section text-foreground mb-4">Where We're Making an Impact</h2>
            <p className="text-body max-w-2xl mx-auto">
              Our projects span across Tanzania, from urban centers to rural communities.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {locations.map((location, index) => (
              <motion.div
                key={location}
                className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{location}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/involved">
                Start a Project in Your Community
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;