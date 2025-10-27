import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import TechSkillsSection from "@/components/TechSkillsSection";
import AchievementsSection from "@/components/AchievementsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection /> 
      <ExperienceSection />
      {/* <TechSkillsSection /> */}
      <AchievementsSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
  
    </>
  );
}
