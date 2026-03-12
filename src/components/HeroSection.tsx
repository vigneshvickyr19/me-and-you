import HeroContent from "./hero/HeroContent";
import HeroVisuals from "./hero/HeroVisuals";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-24 px-6 overflow-hidden bg-[#0A0A0A]">
      {/* Optimized Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] opacity-15 blur-[100px] pointer-events-none z-0" 
        style={{ 
          background: "radial-gradient(circle, #FF7F47, transparent 70%)",
          willChange: "transform, opacity" 
        }} 
      />

      <HeroContent />
      <HeroVisuals />

      {/* Optimized Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 rounded-full border border-primary/10 border-dashed animate-[spin_100s_linear_infinite]" />
        <div className="absolute inset-[20%] rounded-full border border-primary/5 border-dashed animate-[spin_80s_linear_infinite_reverse]" />
      </div>
    </section>
  );
};

export default HeroSection;
