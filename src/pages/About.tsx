import { Target, Eye, Building2, Users, Heart, Globe, CheckCircle2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import ModernCard from "@/components/ui/ModernCard";

const supporters = [
  { icon: Building2, label: "President's Office of Tanzania", description: "Official government backing and policy support" },
  { icon: Heart, label: "Development Partners", description: "International organizations and donors" },
];

const targetGroups = [
  { icon: Users, label: "Youth", description: "Young people aged 15-35 across Tanzania" },
  { icon: Globe, label: "Civil Society Organizations", description: "NGOs and community-based organizations" },
  { icon: Heart, label: "Communities", description: "Local communities in all 26 regions" },
];

const values = [
  "Youth-centered approach in all initiatives",
  "Environmental sustainability at the core",
  "Community-driven solutions",
  "Transparency and accountability",
  "Collaboration and partnership",
  "Innovation and adaptability",
];

const About = () => {
  return (
    <PageLayout>
      <PageHeader
        title="About Us"
        description="Understanding who we are, what drives us, and who supports our mission for environmental conservation across Tanzania."
        badge="Our Story"
        badgeIcon={BookOpen}
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop"
        theme="community"
      />

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section text-foreground mb-6">Who We Are</h2>
              <p className="text-body mb-6">
                Green Samia is Tanzania's premier youth-led environmental conservation and climate action platform. We unite young people across the nation to drive meaningful environmental change through community-based projects, education, and advocacy.
              </p>
              <p className="text-body mb-8">
                Operating under the guidance of the President's Office, we represent a new generation of environmental stewards committed to protecting Tanzania's natural heritage for future generations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["50,000+ Youth Members", "26 Regional Chapters", "500+ Projects", "1M+ Lives Impacted"].map((stat, index) => (
                  <motion.div
                    key={stat}
                    className="p-4 rounded-xl bg-accent/50 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-sm font-medium text-foreground">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=800&fit=crop"
                  alt="Youth environmental action"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop"
                  alt="Tree planting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section text-foreground mb-4">Our Mission & Vision</h2>
            <p className="text-body">
              Driving environmental change through youth empowerment and community action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card-modern p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="icon-container">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="heading-subsection text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To mobilize and empower Tanzanian youth to lead environmental conservation and climate action initiatives that create lasting positive impact in communities nationwide.
              </p>
            </motion.div>

            <motion.div
              className="card-modern p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="icon-container">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="heading-subsection text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Tanzania where every young person is an active agent of environmental change, and every community thrives in harmony with nature.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            className="mt-12 card-modern p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="heading-subsection text-foreground mb-6 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={value} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supporters & Target Groups */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Supporters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-section text-foreground mb-8">Who Supports Us</h2>
              <div className="space-y-4">
                {supporters.map((supporter, index) => (
                  <motion.div
                    key={supporter.label}
                    className="card-modern p-6 flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="icon-container w-12 h-12 rounded-xl flex-shrink-0">
                      <supporter.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{supporter.label}</h4>
                      <p className="text-muted-foreground text-sm">{supporter.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Target Groups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="heading-section text-foreground mb-8">Target Groups</h2>
              <div className="space-y-4">
                {targetGroups.map((group, index) => (
                  <motion.div
                    key={group.label}
                    className="card-modern p-6 flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="icon-container w-12 h-12 rounded-xl flex-shrink-0">
                      <group.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{group.label}</h4>
                      <p className="text-muted-foreground text-sm">{group.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;