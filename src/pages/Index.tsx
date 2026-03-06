import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DatingRealSection from "@/components/DatingRealSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SafetySection from "@/components/SafetySection";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DatingRealSection />
      <WhyDifferentSection />
      <HowItWorksSection />
      <SafetySection />
      <ComparisonSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
