import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HiringPartnersSection from "@/components/HiringPartnersSection";
import StudentAchievementsSection from "@/components/StudentAchievementsSection";
import WhyNewtonsSection from "@/components/WhyNewtonsSection";
import SkillsBrochureSection from "@/components/SkillsBrochureSection";
import NSTsPillarsSection from "@/components/NSTsPillarsSection";
import PartnershipSection from "@/components/PartnershipSection";
import InstructorProfileSection from "@/components/InstructorProfileSection";
import SkillsSection from "@/components/SkillsSection";
import HiringStepsSection from "@/components/HiringStepsSection";
import SimpleFooter from "@/components/SimpleFooter";
import SectionBreaker from "@/components/SectionBreaker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SectionBreaker />
      <HiringPartnersSection />
      <SectionBreaker />
      <StudentAchievementsSection />
      <SectionBreaker />
      <WhyNewtonsSection />
      <SectionBreaker />
      <SkillsBrochureSection />
      <SectionBreaker />
      <NSTsPillarsSection />
      <SectionBreaker />
      <PartnershipSection />
      <SectionBreaker />
      <InstructorProfileSection />
      <SectionBreaker />
      <SkillsSection />
      <SectionBreaker />
      <HiringStepsSection />
      <SectionBreaker />
      <SimpleFooter />
    </div>
  );
};

export default Index;
