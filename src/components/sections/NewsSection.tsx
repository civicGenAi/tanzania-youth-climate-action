import { Calendar, ArrowRight, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    type: "Youth Story",
    title: "How Amina Led Her Village's First Tree Planting Campaign",
    excerpt: "From a small village in Mwanza, 22-year-old Amina mobilized 200 youth volunteers to plant over 5,000 trees...",
    date: "January 20, 2026",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
  },
  {
    type: "Event",
    title: "National Youth Climate Summit 2026 Registration Now Open",
    excerpt: "Join thousands of young environmental leaders at the largest youth climate gathering in East Africa...",
    date: "January 18, 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    type: "Campaign",
    title: "World Environment Day 2026: Clean Tanzania Initiative",
    excerpt: "Join us as we mobilize communities across all 26 regions for the biggest cleanup campaign in our history...",
    date: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
  },
];

const updates = [
  { title: "500 new members joined in December", date: "Dec 2025" },
  { title: "Mangrove restoration project reaches milestone", date: "Dec 2025" },
  { title: "Partnership with UNDP announced", date: "Nov 2025" },
  { title: "Youth leadership training completed", date: "Nov 2025" },
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-foreground mb-4">News & Stories</h2>
          <p className="text-body">
            Stay updated with the latest from our youth network, environmental campaigns, and community success stories.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Stories */}
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((item) => (
              <article key={item.title} className="card-institutional p-0 overflow-hidden group flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-accent px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {item.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:underline">
                    Read more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar - Quick Updates */}
          <div className="lg:col-span-1">
            <div className="card-institutional sticky top-24">
              <h3 className="font-semibold text-foreground text-lg mb-6">Quick Updates</h3>
              <div className="space-y-4">
                {updates.map((update, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-foreground text-sm font-medium">{update.title}</p>
                      <span className="text-xs text-muted-foreground">{update.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="outlinePrimary" size="default" className="w-full">
                  View All News
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
