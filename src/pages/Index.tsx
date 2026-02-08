import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CommunitySection from "@/components/CommunitySection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const SectionDivider = () => (
  <div className="max-w-6xl mx-auto px-6 lg:px-10">
    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <CommunitySection />
      <SectionDivider />
      <AchievementsSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
