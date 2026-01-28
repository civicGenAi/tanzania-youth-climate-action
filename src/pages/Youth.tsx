import { Users, Award, MapPin, GraduationCap, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  "Access to environmental training and workshops",
  "Leadership development opportunities",
  "Connect with youth across Tanzania",
  "Participate in national campaigns",
  "Gain certificates and recognition",
  "Lead community projects",
];

const contributions = [
  { 
    icon: Users, 
    title: "Who Can Join", 
    description: "Youth aged 15-35 passionate about environmental conservation and climate action. No prior experience required – just enthusiasm and commitment.",
    stats: "50,000+ members"
  },
  { 
    icon: Award, 
    title: "How Youth Contribute", 
    description: "Lead local initiatives, organize awareness campaigns, mentor peers, participate in tree planting, and advocate for environmental policies.",
    stats: "500+ projects led"
  },
  { 
    icon: MapPin, 
    title: "Regional Youth Groups", 
    description: "Active chapters in all 26 regions of Tanzania with regular meetups, training sessions, and collaborative projects.",
    stats: "26 regional chapters"
  },
  { 
    icon: GraduationCap, 
    title: "Leadership & Learning", 
    description: "Training programs, scholarships, internships, and clear advancement pathways from volunteer to regional leader.",
    stats: "1,000+ leaders trained"
  },
];

const stats = [
  { number: "50,000+", label: "Youth Members" },
  { number: "26", label: "Regional Chapters" },
  { number: "500+", label: "Projects Completed" },
  { number: "1M+", label: "Lives Impacted" },
];

const Youth = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Youth Network"
        description="The Youth Network is the heart of Green Samia. Join Tanzania's largest youth environmental movement and become an agent of change."
        badge="Join the Movement"
      >
        <Button variant="hero" size="xl" asChild>
          <Link to="/involved">
            Become a Member
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </PageHeader>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-section text-foreground mb-4">How It Works</h2>
            <p className="text-body">
              Everything you need to know about joining and contributing to the network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contributions.map((item, index) => (
              <motion.div
                key={item.title}
                className="card-modern p-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className="icon-container flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="heading-subsection text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-primary text-sm font-medium">
                      <Sparkles className="w-3 h-3" />
                      {item.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section text-foreground mb-6">Why Join the Network?</h2>
              <p className="text-body mb-8">
                As a member, you'll gain access to resources, training, and a community of like-minded youth dedicated to environmental action.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-primary text-primary-foreground rounded-2xl p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                Join thousands of young Tanzanians who are already leading environmental change in their communities. Registration is free and takes only 2 minutes.
              </p>
              <Button 
                variant="heroOutline" 
                size="xl" 
                className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/involved">
                  Become a Member
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <p className="text-primary-foreground/70 text-sm text-center mt-4">
                Already a member? Sign in to access your dashboard
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Youth;