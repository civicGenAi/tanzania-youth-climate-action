import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const recentNews = [
  {
    title: "National Tree Planting Day Success",
    date: "January 2024",
    category: "Events",
  },
  {
    title: "Youth Climate Summit Announcement",
    date: "December 2023",
    category: "News",
  },
  {
    title: "Coastal Conservation Partnership Launch",
    date: "November 2023",
    category: "Partnerships",
  },
];

const HomeNewsPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              News & Updates
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Latest Stories
            </h2>
          </div>
          <Button variant="outlinePrimary" asChild>
            <Link to="/news">
              View All News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {recentNews.map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to="/news"
                className="block p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <span className="text-xs font-medium text-primary mb-2 block">
                  {news.category}
                </span>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {news.date}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNewsPreview;
