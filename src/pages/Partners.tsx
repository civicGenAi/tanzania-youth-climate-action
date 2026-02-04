import { Building2, Users2, Landmark, ArrowRight, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partnerCategories = [
  {
    icon: Building2,
    title: "Civil Society Organizations",
    description: "NGOs and advocacy groups driving environmental policy change",
    partners: [
      { name: "Tanzania Environmental Action Association", description: "Environmental advocacy and policy" },
      { name: "Youth Development Foundation", description: "Youth empowerment programs" },
      { name: "Clean Africa Initiative", description: "Waste management solutions" },
      { name: "Climate Action Network Tanzania", description: "Climate policy advocacy" },
    ],
  },
  {
    icon: Users2,
    title: "Community Groups",
    description: "Grassroots organizations implementing local solutions",
    partners: [
      { name: "Dar es Salaam Green Network", description: "Urban environmental initiatives" },
      { name: "Coastal Communities Alliance", description: "Marine conservation efforts" },
      { name: "Rural Women's Environmental Group", description: "Sustainable agriculture" },
      { name: "Lake Victoria Conservation Forum", description: "Freshwater ecosystem protection" },
    ],
  },
  {
    icon: Landmark,
    title: "Institutions & Supporters",
    description: "Academic and government institutions providing expertise and resources",
    partners: [
      { name: "University of Dar es Salaam", description: "Research and education partnership" },
      { name: "Tanzania National Parks Authority", description: "Conservation collaboration" },
      { name: "Ministry of Environment", description: "Policy support and guidance" },
      { name: "National Environment Management Council", description: "Regulatory partnership" },
    ],
  },
];

const Partners = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Our Partners"
        description="Together with our trusted partners, we amplify our impact and reach more communities across Tanzania."
        badge="Collaboration"
        badgeIcon={Handshake}
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop"
        theme="collaboration"
      />

      {/* Partner Categories */}
      <section className="section-padding">
        <div className="container-main">
          <div className="space-y-16">
            {partnerCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary">
                    <category.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="heading-subsection text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      className="card-modern p-6 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Handshake className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary text-sm font-medium mb-6">
              <Handshake className="w-4 h-4" />
              Partnership Opportunities
            </div>
            <h2 className="heading-section text-foreground mb-6">Become a Partner</h2>
            <p className="text-body mb-8 max-w-2xl mx-auto">
              Join our network of organizations committed to environmental conservation and youth empowerment in Tanzania. Together, we can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/involved">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/involved">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Partners;