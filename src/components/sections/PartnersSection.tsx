import { Building2, Users2, Landmark } from "lucide-react";

const partnerCategories = [
  {
    icon: Building2,
    title: "Civil Society Organizations",
    partners: [
      { name: "Tanzania Environmental Action Association", description: "Environmental advocacy and policy" },
      { name: "Youth Development Foundation", description: "Youth empowerment programs" },
      { name: "Clean Africa Initiative", description: "Waste management solutions" },
    ],
  },
  {
    icon: Users2,
    title: "Community Groups",
    partners: [
      { name: "Dar es Salaam Green Network", description: "Urban environmental initiatives" },
      { name: "Coastal Communities Alliance", description: "Marine conservation efforts" },
      { name: "Rural Women's Environmental Group", description: "Sustainable agriculture" },
    ],
  },
  {
    icon: Landmark,
    title: "Institutions and Supporters",
    partners: [
      { name: "University of Dar es Salaam", description: "Research and education partnership" },
      { name: "Tanzania National Parks Authority", description: "Conservation collaboration" },
      { name: "Ministry of Environment", description: "Policy support and guidance" },
    ],
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-foreground mb-4">Our Partners</h2>
          <p className="text-body">
            Together with our trusted partners, we amplify our impact and reach more communities across Tanzania.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {partnerCategories.map((category) => (
            <div key={category.title} className="card-institutional">
              <div className="icon-container">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="heading-subsection text-foreground mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.partners.map((partner) => (
                  <div key={partner.name} className="p-4 rounded-lg bg-accent/50 border border-border/50">
                    <h4 className="font-medium text-foreground mb-1">{partner.name}</h4>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partner CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-2xl border border-border p-8 md:p-12 max-w-2xl">
            <h3 className="heading-subsection text-foreground mb-4">Become a Partner</h3>
            <p className="text-muted-foreground mb-6">
              Join our network of organizations committed to environmental conservation and youth empowerment in Tanzania.
            </p>
            <a 
              href="#involved" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Learn about partnership opportunities
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
