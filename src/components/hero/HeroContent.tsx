import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center z-20 w-full mb-16"
    >
      <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.05] mb-8 select-none">
        Meet someone
        <br />
        <span className="font-bold">Who’s <span className="text-primary">actually</span> here.</span>
      </h1>
      
      <p className="text-muted-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
        Verified people. Real-time presence. Genuine connections near you.
        <br />
        No bots. No fake profiles. No endless noise.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <button 
          onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          className="h-14 px-10 rounded-full font-bold border border-white/10 bg-white/5 backdrop-blur-md text-foreground transition-all duration-200 hover:bg-white/10 flex items-center justify-center gap-2 group active:scale-95"
        >
          See how it works <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <button className="h-14 px-10 rounded-full font-bold bg-[#FF7F47] text-white transition-all duration-200 hover:brightness-110 flex items-center justify-center gap-2 group shadow-lg shadow-[#FF7F47]/20 active:scale-95">
          Download on M&U <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      <div className="text-sm font-semibold text-muted-foreground/60 tracking-tight">
        100% Verified Profiles • Real-Time Discovery • Privacy First
      </div>
    </motion.div>
  );
};

export default HeroContent;
