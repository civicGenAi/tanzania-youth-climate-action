import { useState } from "react";
import { Globe, TreeDeciduous, Leaf, Trash2, X } from "lucide-react";

const workAreas = [
  {
    icon: Globe,
    title: "Climate Action & Awareness",
    description: "Empowering communities with knowledge and tools to understand, mitigate, and adapt to climate change through education campaigns, workshops, and sustainable practices.",
  },
  {
    icon: Leaf,
    title: "Nature & Biodiversity Protection",
    description: "Protecting Tanzania's rich ecosystems and wildlife through conservation programs, habitat restoration, and community-based natural resource management.",
  },
  {
    icon: TreeDeciduous,
    title: "Tree Growing & Land Restoration",
    description: "Leading large-scale tree planting initiatives and land restoration projects to combat deforestation, prevent soil erosion, and restore degraded landscapes.",
  },
  {
    icon: Trash2,
    title: "Clean Communities & Waste Reduction",
    description: "Building cleaner, healthier communities through waste management programs, recycling initiatives, and campaigns to reduce plastic pollution.",
  },
];

const WorkSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="work" className="section-padding">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-foreground mb-4">What We Work On</h2>
          <p className="text-body">
            Our focus areas represent the critical environmental challenges facing Tanzania, addressed through youth-led action and community engagement.
          </p>
        </div>

        {/* Work Area Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {workAreas.map((area, index) => (
            <div
              key={area.title}
              className="card-focus cursor-pointer relative overflow-hidden group"
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className="icon-container mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <area.icon className="w-6 h-6" />
              </div>
              <h3 className="heading-subsection text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm">Click to learn more</p>

              {/* Expanded Description */}
              {activeCard === index && (
                <div className="absolute inset-0 bg-primary text-primary-foreground p-6 flex flex-col justify-center animate-scale-in">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(null);
                    }}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-primary-foreground/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <area.icon className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">{area.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
