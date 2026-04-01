import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, Globe, Zap, Heart } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const FlyingOrb = ({ delay, x, y, size, color }: { delay: number, x: string, y: string, size: number, color: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.4, 0.4, 0],
      scale: [0.5, 1.2, 0.8, 0.5],
      x: [0, 50, -50, 0],
      y: [0, -40, 40, 0],
    }}
    transition={{ 
      duration: 12, 
      delay, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className="absolute rounded-full blur-[40px] pointer-events-none z-[-1] will-change-transform"
    style={{ 
      left: x, 
      top: y, 
      width: size, 
      height: size,
      background: color
    }}
  />
);

const FlyingHeart = ({ delay, y, direction = 'right' }: { delay: number, y: string, direction?: 'left' | 'right' }) => {
  const isRight = direction === 'right';
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: isRight ? -100 : "120%", y: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1.2, 1, 0.5],
        x: isRight ? [-100, 1800] : [1800, -200],
        y: [0, -30, 30, -10, 0],
      }}
      transition={{ 
        duration: isRight ? 20 : 25, 
        delay, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute pointer-events-none text-primary/10 z-0 will-change-transform"
      style={{ left: 0, top: y }}
    >
      <Heart size={20} fill="currentColor" />
    </motion.div>
  );
};

const HeroContent = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative text-center z-20 w-full mb-16"
    >
      {/* Background Animated Layer */}
      <div className="absolute inset-0 overflow-visible pointer-events-none -translate-y-20 z-0">
        {/* Flying Hearts - Bi-directional Content Mix */}
        <FlyingHeart delay={1.2} y="10%" direction="right" />
        <FlyingHeart delay={5.5} y="40%" direction="left" />
        <FlyingHeart delay={9.8} y="70%" direction="right" />
        <FlyingHeart delay={14.1} y="85%" direction="left" />

        {/* Background Flying Orbs */}
        <FlyingOrb delay={0} x="10%" y="20%" size={150} color="rgba(255, 127, 71, 0.1)" />
        <FlyingOrb delay={4} x="80%" y="10%" size={120} color="rgba(255, 127, 71, 0.08)" />
        <FlyingOrb delay={8} x="50%" y="80%" size={200} color="rgba(255, 127, 71, 0.05)" />
      </div>

      {/* Floating Particles around Badge */}
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-40 h-40 pointer-events-none hidden md:block"
      >
        <motion.div 
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-10"
        >
          <Zap size={10} className="text-primary/30 fill-primary/10" />
        </motion.div>
        <motion.div 
          animate={{ x: [0, -10, 10, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-0"
        >
          <Sparkles size={12} className="text-primary/20" />
        </motion.div>
      </motion.div>
      {/* Premium Badge */}
      <motion.div 
        variants={fadeInUp}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary mb-8 backdrop-blur-md"
      >
        <Sparkles size={14} className="animate-pulse" />
        <span className="text-[11px] font-bold uppercase tracking-wider">The Future of Social Discovery</span>
      </motion.div>

      <motion.h1 
        variants={fadeInUp}
        className="text-5xl md:text-8xl font-medium tracking-tight leading-[1.05] mb-8 select-none"
      >
        Meet someone
        <br />
        <span className="font-extrabold">Who’s <span className="gradient-text drop-shadow-[0_0_30px_rgba(241,111,37,0.3)]">actually</span> here.</span>
      </motion.h1>
      
      <motion.p 
        variants={fadeInUp}
        className="text-muted-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
      >
        Verified people. Real-time presence. Genuine connections near you.
        <br />
        <span className="text-foreground/90 font-semibold italic">No bots. No fake profiles. No endless noise.</span>
      </motion.p>

      <motion.div 
        variants={fadeInUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12"
      >
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          className="h-14 px-10 rounded-full font-bold border border-white/10 bg-white/5 backdrop-blur-md text-foreground transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 group"
        >
          See how it works <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(241, 111, 37, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="h-14 px-10 rounded-full font-bold bg-[#FF7F47] text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-[#FF7F47]/20"
        >
          Download on M&U <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.button>
      </motion.div>

      <motion.div 
        variants={fadeInUp}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[11px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em]"
      >
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-primary/40" />
          <span>100% Verified Profiles</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-primary/40" />
          <span>Real-Time Discovery</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-primary/40" />
          <span>Privacy First</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

