import { Calendar, ArrowRight, Tag, Clock, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";

const featuredStory = {
  type: "Youth Story",
  title: "How Amina Led Her Village's First Tree Planting Campaign",
  excerpt: "From a small village in Mwanza, 22-year-old Amina mobilized 200 youth volunteers to plant over 5,000 trees in just three months. Her story is an inspiration to youth across Tanzania.",
  date: "January 20, 2026",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-544027993-37dbfe43562a?w=1200&h=600&fit=crop",
};

const newsItems = [
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
  {
    type: "Update",
    title: "New Partnership with UNDP Announced",
    excerpt: "This partnership will bring new resources and expertise to support youth-led environmental initiatives...",
    date: "January 12, 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
  },
  {
    type: "Youth Story",
    title: "From Cleanup Volunteer to Regional Leader",
    excerpt: "Meet James, who started as a weekend volunteer and now leads environmental efforts across Arusha Region...",
    date: "January 10, 2026",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",
  },
  {
    type: "Campaign",
    title: "Mangrove Restoration Reaches Major Milestone",
    excerpt: "500 hectares of mangrove forest restored in Tanga Region, protecting coastal communities and marine life...",
    date: "January 8, 2026",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
  },
  {
    type: "Event",
    title: "Youth Leadership Training Program Applications Open",
    excerpt: "Apply now for our intensive 3-month leadership program designed for emerging environmental leaders...",
    date: "January 5, 2026",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
  },
];

const updates = [
  { title: "500 new members joined in December", date: "Dec 2025" },
  { title: "Mangrove restoration project reaches milestone", date: "Dec 2025" },
  { title: "Partnership with UNDP announced", date: "Nov 2025" },
  { title: "Youth leadership training completed", date: "Nov 2025" },
  { title: "New recycling centers opened in Dar", date: "Oct 2025" },
];

const News = () => {
  return (
    <PageLayout>
      <PageHeader
        title="News & Stories"
        description="Stay updated with the latest from our youth network, environmental campaigns, and community success stories."
        badge="Latest Updates"
        badgeIcon={Newspaper}
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=1080&fit=crop"
        theme="news"
      />

      {/* Featured Story */}
      <section className="pb-12">
        <div className="container-main">
          <motion.article
            className="card-modern p-0 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                  Featured
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {featuredStory.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {featuredStory.readTime}
                  </span>
                </div>
                <h2 className="heading-subsection text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredStory.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredStory.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {featuredStory.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all cursor-pointer">
                    Read full story <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Stories */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {newsItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="card-modern p-0 overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{item.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-primary font-medium text-sm cursor-pointer hover:gap-2.5 transition-all">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="card-modern p-6 sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default News;