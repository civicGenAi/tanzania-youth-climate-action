import { UserPlus, Heart, Building, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: UserPlus,
    title: "Join as a Youth",
    description: "Become a member of Tanzania's largest youth environmental network. Access training, leadership opportunities, and connect with peers nationwide.",
    cta: "Register Now",
    primary: true,
  },
  {
    icon: Heart,
    title: "Volunteer in Projects",
    description: "Contribute your time and skills to environmental initiatives in your community. From tree planting to clean-ups, every action counts.",
    cta: "Find Opportunities",
    primary: false,
  },
  {
    icon: Building,
    title: "Register an Organization",
    description: "Partner with Green Samia as a civil society organization, community group, or institution. Amplify your impact through collaboration.",
    cta: "Partner With Us",
    primary: false,
  },
  {
    icon: Mail,
    title: "Contact the Platform",
    description: "Have questions, suggestions, or want to learn more? Our team is here to help you get involved in environmental action.",
    cta: "Get in Touch",
    primary: false,
  },
];

const InvolvedSection = () => {
  return (
    <section id="involved" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-foreground mb-4">Get Involved</h2>
          <p className="text-body">
            Every action matters. Choose how you want to contribute to environmental conservation and join Tanzania's movement for positive change.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {actions.map((action) => (
            <div
              key={action.title}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                action.primary
                  ? "bg-primary text-primary-foreground"
                  : "card-institutional"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                action.primary
                  ? "bg-primary-foreground/20"
                  : "bg-accent"
              }`}>
                <action.icon className={`w-7 h-7 ${action.primary ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${action.primary ? "" : "text-foreground"}`}>
                {action.title}
              </h3>
              
              <p className={`mb-6 leading-relaxed ${action.primary ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {action.description}
              </p>
              
              <Button
                variant={action.primary ? "heroOutline" : "outlinePrimary"}
                size="lg"
                className={action.primary ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" : ""}
              >
                {action.cta}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure where to start? We're here to help.
          </p>
          <a 
            href="mailto:info@greensamia.go.tz" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
          >
            <Mail className="w-5 h-5" />
            info@greensamia.go.tz
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvolvedSection;
