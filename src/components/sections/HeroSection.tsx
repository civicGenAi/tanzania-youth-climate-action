import { ArrowRight, Leaf, Users, Globe, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const focusAreas = [
  { icon: Globe, label: "Climate Action" },
  { icon: Leaf, label: "Environmental Conservation" },
  { icon: Users, label: "Youth Engagement" },
  { icon: TreePine, label: "Community Projects" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-8 animate-fade-up">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Official Government Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-hero text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Youth-Led Environmental 
            <span className="text-primary"> Action</span> for Tanzania
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A youth-led environmental conservation and climate action platform supported by the President's Office of Tanzania.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#youth">
                Join the Network
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>

          {/* Focus Areas */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Key Focus Areas</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {focusAreas.map((area, index) => (
                <div
                  key={area.label}
                  className="card-focus group cursor-pointer"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="icon-container mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <area.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground">{area.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
