import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HiringPartnersSection from "@/components/HiringPartnersSection";
import SkillsSection from "@/components/SkillsSection";
import SkillsBrochureSection from "@/components/SkillsBrochureSection";
import PartnershipSection from "@/components/PartnershipSection";
import StudentAchievementsSection from "@/components/StudentAchievementsSection";
import WhyNewtonsSection from "@/components/WhyNewtonsSection";
import NSTsPillarsSection from "@/components/NSTsPillarsSection";
import InstructorProfileSection from "@/components/InstructorProfileSection";
import HiringStepsSection from "@/components/HiringStepsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HiringPartnersSection />
      <SkillsSection />
      <SkillsBrochureSection />
      <PartnershipSection />
      <StudentAchievementsSection />
      <WhyNewtonsSection />
      <NSTsPillarsSection />
      <InstructorProfileSection />
      <HiringStepsSection />
      <Footer />
    </div>
  );
};

export default Index;
