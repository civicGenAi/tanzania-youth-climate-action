import { UserPlus, Heart, Building, Mail, ArrowRight, Send, HandHeart } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: UserPlus,
    title: "Join as a Youth",
    description: "Become a member of Tanzania's largest youth environmental network. Access training, leadership opportunities, and connect with peers nationwide.",
    cta: "Register Now",
    primary: true,
    features: ["Free membership", "Access to training", "Leadership pathways", "Community events"],
  },
  {
    icon: Heart,
    title: "Volunteer in Projects",
    description: "Contribute your time and skills to environmental initiatives in your community. From tree planting to clean-ups, every action counts.",
    cta: "Find Opportunities",
    primary: false,
    features: ["Flexible schedules", "Local projects", "Skills development", "Certificates"],
  },
  {
    icon: Building,
    title: "Register an Organization",
    description: "Partner with Green Samia as a civil society organization, community group, or institution. Amplify your impact through collaboration.",
    cta: "Partner With Us",
    primary: false,
    features: ["Joint projects", "Resource sharing", "Network access", "Co-branding"],
  },
  {
    icon: Mail,
    title: "Contact the Platform",
    description: "Have questions, suggestions, or want to learn more? Our team is here to help you get involved in environmental action.",
    cta: "Get in Touch",
    primary: false,
    features: ["Quick response", "Dedicated support", "Regional contacts", "Media inquiries"],
  },
];

const Involved = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Get Involved"
        description="Every action matters. Choose how you want to contribute to environmental conservation and join Tanzania's movement for positive change."
        badge="Take Action"
        badgeIcon={HandHeart}
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop"
        theme="action"
      />

      {/* Action Cards */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {actions.map((action, index) => (
              <motion.div
                key={action.title}
                className={`rounded-2xl overflow-hidden ${
                  action.primary
                    ? "bg-primary text-primary-foreground"
                    : "card-modern"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
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

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {action.features.map((feature) => (
                      <div
                        key={feature}
                        className={`text-sm flex items-center gap-2 ${
                          action.primary ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${action.primary ? "bg-primary-foreground" : "bg-primary"}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant={action.primary ? "heroOutline" : "outlinePrimary"}
                    size="lg"
                    className={action.primary ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full" : "w-full"}
                  >
                    {action.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section text-foreground mb-6">Send Us a Message</h2>
              <p className="text-body mb-8">
                Have a question or want to learn more about our initiatives? Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us at</p>
                    <a href="mailto:info@greensamia.go.tz" className="text-foreground font-medium hover:text-primary transition-colors">
                      info@greensamia.go.tz
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card-modern p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Join as Youth</option>
                    <option>Partnership Opportunity</option>
                    <option>Media Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Involved;