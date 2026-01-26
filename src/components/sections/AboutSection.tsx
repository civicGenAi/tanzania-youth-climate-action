import { Target, Eye, Building2, Users, Heart, Globe } from "lucide-react";

const supporters = [
  { icon: Building2, label: "President's Office of Tanzania" },
  { icon: Heart, label: "Partners" },
];

const targetGroups = [
  { icon: Users, label: "Youth" },
  { icon: Globe, label: "Civil Society Organizations (CSOs)" },
  { icon: Heart, label: "Communities" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-foreground mb-4">About Us</h2>
          <p className="text-body">
            Understanding who we are, what drives us, and who supports our mission for environmental conservation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Who We Are */}
          <div className="card-institutional">
            <h3 className="heading-subsection text-foreground mb-4">Who We Are</h3>
            <p className="text-body mb-6">
              Green Samia is Tanzania's premier youth-led environmental conservation and climate action platform. We unite young people across the nation to drive meaningful environmental change through community-based projects, education, and advocacy.
            </p>
            <p className="text-body">
              Operating under the guidance of the President's Office, we represent a new generation of environmental stewards committed to protecting Tanzania's natural heritage for future generations.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <div className="card-institutional">
              <div className="flex items-start gap-4">
                <div className="icon-container flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Our Mission</h4>
                  <p className="text-muted-foreground">
                    To mobilize and empower Tanzanian youth to lead environmental conservation and climate action initiatives that create lasting positive impact in communities nationwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-institutional">
              <div className="flex items-start gap-4">
                <div className="icon-container flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Our Vision</h4>
                  <p className="text-muted-foreground">
                    A Tanzania where every young person is an active agent of environmental change, and every community thrives in harmony with nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporters & Target Groups */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Who Supports Us */}
          <div className="card-institutional">
            <h3 className="heading-subsection text-foreground mb-6">Who Supports the Platform</h3>
            <div className="space-y-4">
              {supporters.map((supporter) => (
                <div key={supporter.label} className="flex items-center gap-4 p-3 rounded-lg bg-accent/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <supporter.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{supporter.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Group */}
          <div className="card-institutional">
            <h3 className="heading-subsection text-foreground mb-6">Target Group</h3>
            <div className="space-y-4">
              {targetGroups.map((group) => (
                <div key={group.label} className="flex items-center gap-4 p-3 rounded-lg bg-accent/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <group.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{group.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
