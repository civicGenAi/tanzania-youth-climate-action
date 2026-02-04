import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HomeAboutPreview from "@/components/sections/HomeAboutPreview";
import HomeWorkPreview from "@/components/sections/HomeWorkPreview";
import HomeProjectsPreview from "@/components/sections/HomeProjectsPreview";
import HomeYouthPreview from "@/components/sections/HomeYouthPreview";
import HomePartnersPreview from "@/components/sections/HomePartnersPreview";
import HomeNewsPreview from "@/components/sections/HomeNewsPreview";
import HomeInvolvedPreview from "@/components/sections/HomeInvolvedPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HomeAboutPreview />
        <HomeWorkPreview />
        <HomeProjectsPreview />
        <HomeYouthPreview />
        <HomePartnersPreview />
        <HomeNewsPreview />
        <HomeInvolvedPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
