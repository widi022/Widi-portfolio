import AboutSection from "@/components/AboutSection";
import ComparisonSection from "@/components/ComparisonSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import MarqueeSection from "@/components/MarqueeSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ComparisonSection />
      <ProjectsSection />
      <JourneySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
