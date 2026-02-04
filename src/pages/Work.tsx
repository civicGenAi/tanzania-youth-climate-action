import { useState } from "react";
import { Globe, TreeDeciduous, Leaf, Trash2, ArrowRight, X, Focus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const workAreas = [
  {
    icon: Globe,
    title: "Climate Action & Awareness",
    shortDescription: "Empowering communities with climate knowledge",
    description: "Empowering communities with knowledge and tools to understand, mitigate, and adapt to climate change through education campaigns, workshops, and sustainable practices.",
    stats: ["200+ workshops conducted", "50,000+ people reached", "26 regions covered"],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
  },
  {
    icon: Leaf,
    title: "Nature & Biodiversity Protection",
    shortDescription: "Protecting Tanzania's rich ecosystems",
    description: "Protecting Tanzania's rich ecosystems and wildlife through conservation programs, habitat restoration, and community-based natural resource management.",
    stats: ["15 protected areas supported", "100+ species monitored", "5,000 hectares conserved"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  },
  {
    icon: TreeDeciduous,
    title: "Tree Growing & Land Restoration",
    shortDescription: "Leading reforestation initiatives",
    description: "Leading large-scale tree planting initiatives and land restoration projects to combat deforestation, prevent soil erosion, and restore degraded landscapes.",
    stats: ["1M+ trees planted", "500 hectares restored", "100 nurseries established"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
  },
  {
    icon: Trash2,
    title: "Clean Communities & Waste Reduction",
    shortDescription: "Building cleaner, healthier communities",
    description: "Building cleaner, healthier communities through waste management programs, recycling initiatives, and campaigns to reduce plastic pollution.",
    stats: ["50 tons waste collected", "20 recycling centers", "10,000 volunteers"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  },
];

const Work = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <PageLayout>
      <PageHeader
        title="What We Work On"
        description="Our focus areas represent the critical environmental challenges facing Tanzania, addressed through youth-led action and community engagement."
        badge="Our Focus"
        badgeIcon={Focus}
        backgroundImage="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=1080&fit=crop"
        theme="nature"
      />

      {/* Work Areas Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {workAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="card-modern p-0 overflow-hidden cursor-pointer h-full"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                          <area.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Focus Area
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="heading-subsection text-foreground mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{area.shortDescription}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Expanded Overlay */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      className="absolute inset-0 bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col justify-center z-10"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(null);
                        }}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      <area.icon className="w-12 h-12 mb-4" />
                      <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                      <p className="text-primary-foreground/90 leading-relaxed mb-6">
                        {area.description}
                      </p>
                      <div className="space-y-2">
                        {area.stats.map((stat) => (
                          <div key={stat} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                            <span>{stat}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mb-6">
              Want to contribute to our work?
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/involved">
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Work;