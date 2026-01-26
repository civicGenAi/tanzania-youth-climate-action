import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import YouthSection from "@/components/sections/YouthSection";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsSection from "@/components/sections/NewsSection";
import InvolvedSection from "@/components/sections/InvolvedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <YouthSection />
        <PartnersSection />
        <NewsSection />
        <InvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
