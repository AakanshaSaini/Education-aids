import HeroSection from "../components/HeroSection";
import TrustSection from "../components/TrustSection";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import PersonalizedSection from "../components/PersonalizedSection";
import FinalCTASection from "../components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <ProcessSection />
      <ServicesSection />
      <PersonalizedSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
