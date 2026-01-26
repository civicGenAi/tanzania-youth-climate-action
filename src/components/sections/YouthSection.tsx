import { Users, Award, MapPin, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Access to environmental training and workshops",
  "Leadership development opportunities",
  "Connect with youth across Tanzania",
  "Participate in national campaigns",
  "Gain certificates and recognition",
  "Lead community projects",
];

const contributions = [
  { icon: Users, title: "Who Can Join", description: "Youth aged 15-35 passionate about environmental conservation" },
  { icon: Award, title: "How Youth Contribute", description: "Lead local initiatives, organize awareness campaigns, mentor peers" },
  { icon: MapPin, title: "Regional Youth Groups", description: "Active chapters in all 26 regions of Tanzania" },
  { icon: GraduationCap, title: "Leadership & Learning", description: "Training programs, scholarships, and advancement pathways" },
];

const YouthSection = () => {
  return (
    <section id="youth" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Central to Our Mission</span>
          </div>
          <h2 className="heading-section text-foreground mb-4">Youth Network</h2>
          <p className="text-body">
            The Youth Network is the heart of Green Samia. This is where young Tanzanians unite to drive environmental action, develop leadership skills, and create lasting change in their communities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Contributions */}
          <div className="space-y-6">
            {contributions.map((item) => (
              <div key={item.title} className="card-institutional flex items-start gap-4">
                <div className="icon-container flex-shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Benefits & CTA */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Why Join the Network?</h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="#involved">
                Become a Member
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50,000+", label: "Youth Members" },
            { number: "26", label: "Regional Chapters" },
            { number: "500+", label: "Projects Completed" },
            { number: "1M+", label: "Lives Impacted" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouthSection;
