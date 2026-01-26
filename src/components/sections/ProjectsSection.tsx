import { MapPin, Calendar, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dar es Salaam Urban Tree Planting",
    location: "Dar es Salaam",
    status: "ongoing",
    impact: "10,000+ trees planted across 15 neighborhoods",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
  },
  {
    title: "Coastal Mangrove Restoration",
    location: "Tanga Region",
    status: "ongoing",
    impact: "500 hectares of mangrove forest restored",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
  },
  {
    title: "Youth Climate Education Program",
    location: "Nationwide",
    status: "completed",
    impact: "50,000 students reached in 200 schools",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
  },
  {
    title: "Kilimanjaro Clean-Up Initiative",
    location: "Kilimanjaro Region",
    status: "completed",
    impact: "20 tons of waste collected and recycled",
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&h=400&fit=crop",
  },
];

const locations = [
  "Dar es Salaam",
  "Arusha",
  "Mwanza",
  "Tanga",
  "Dodoma",
  "Kilimanjaro",
  "Mbeya",
  "Morogoro",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-foreground mb-4">Our Projects</h2>
          <p className="text-body">
            Real stories of environmental impact driven by youth across Tanzania. Every project represents communities coming together for positive change.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.title} className="card-institutional overflow-hidden p-0 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${
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
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium text-foreground">Impact:</span> {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Locations Map */}
        <div className="card-institutional">
          <h3 className="heading-subsection text-foreground mb-6 text-center">Where We're Making an Impact</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <div
                key={location}
                className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outlinePrimary" size="lg" asChild>
            <a href="#involved">
              Start a Project in Your Community
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
