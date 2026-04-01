import { motion, AnimatePresence } from "framer-motion";
import { Phone, Video, MapPin, Heart, X, Users, ShieldCheck, Zap, Sparkles } from "lucide-react";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import profile4 from "@/assets/profile-4.png";
import profile5 from "@/assets/profile-5.png";

const profiles = [
  { img: profile1, name: "Emma W., 24", rotation: -15, rotY: -25, scale: 0.8, zIndex: 10, x: -260, y: 50, opacity: 0.6, blur: "blur(2px)", brightness: 0.7 },
  { img: profile4, name: "Sophia L., 22", rotation: -8, rotY: -12, scale: 0.9, zIndex: 20, x: -130, y: 20, opacity: 0.9, blur: "blur(0.5px)", brightness: 0.9 },
  { img: profile2, name: "Jenny Wilson, 26", rotation: 0, rotY: 0, scale: 1.1, zIndex: 30, featured: true, x: 0, y: 0, opacity: 1, blur: "blur(0px)", brightness: 1 },
  { img: profile5, name: "Olivia R., 23", rotation: 8, rotY: 12, scale: 0.9, zIndex: 20, x: 130, y: 20, opacity: 0.9, blur: "blur(0.5px)", brightness: 0.9 },
  { img: profile3, name: "Mia S., 23", rotation: 15, rotY: 25, scale: 0.8, zIndex: 10, x: 260, y: 50, opacity: 0.6, blur: "blur(2px)", brightness: 0.7 },
];

const sideBubbles = {
  left: [
    { img: profile1, delay: 0.1, x: -480, y: -80, size: 42, hasDot: true },
    { type: 'icon', icon: <Phone size={16} className="text-primary fill-primary/10" />, delay: 0.3, x: -380, y: 40, size: 48 },
    { img: profile4, delay: 0.5, x: -450, y: 160, size: 52, hasDot: true },
  ],
  right: [
    { img: profile3, delay: 0.2, x: 480, y: -60, size: 40, hasDot: true },
    { type: 'icon', icon: <Video size={16} className="text-primary fill-primary/10" />, delay: 0.4, x: 400, y: 80, size: 50 },
    { img: profile2, delay: 0.6, x: 500, y: 180, size: 46, hasDot: true },
    { img: profile5, delay: 0.8, x: 440, y: 240, size: 38, hasDot: true },
  ],
};

// Flying elements for extra dynamism
const FlyingHeart = ({ delay, y, direction = 'right' }: { delay: number, y: string, direction?: 'left' | 'right' }) => {
  const isRight = direction === 'right';
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: isRight ? -100 : "100%", y: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1.2, 0.5],
        x: isRight ? [-100, 1600] : [1600, -200],
        y: [0, -40, 40, -10, 0],
      }}
      transition={{ 
        duration: isRight ? 15 : 18, // Slightly different speeds for depth
        delay, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute pointer-events-none text-primary/20 z-10 will-change-transform"
      style={{ left: 0, top: y }}
    >
      <Heart size={24} fill="currentColor" className="drop-shadow-[0_0_10px_rgba(255,127,71,0.2)]" />
    </motion.div>
  );
};

const FlyingSparkle = ({ delay, x, y }: { delay: number, x: string, y: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5],
      rotate: [0, 180, 360],
      x: [0, -30, 30, 0],
      y: [0, -50, -100, -150],
    }}
    transition={{ 
      duration: 3, 
      delay, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="absolute pointer-events-none text-primary/30 z-10"
    style={{ left: x, top: y }}
  >
    <Sparkles size={16} />
  </motion.div>
);

const HeroVisuals = () => {
  return (
    <div className="relative mt-8 w-full max-w-7xl mx-auto h-[480px] flex items-center justify-center" style={{ perspective: "1500px" }}>
      {/* Dynamic Flying Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Side Flyers */}
        <FlyingSparkle delay={0} x="10%" y="80%" />
        <FlyingSparkle delay={1.5} x="15%" y="70%" />
        {/* Continuous Stream of Hearts - Bi-Directional & Optimized */}
        {/* Left to Right */}
        <FlyingHeart delay={0} y="15%" direction="right" />
        <FlyingHeart delay={5} y="45%" direction="right" />
        <FlyingHeart delay={10} y="75%" direction="right" />
        
        {/* Right to Left */}
        <FlyingHeart delay={2.5} y="30%" direction="left" />
        <FlyingHeart delay={7.5} y="60%" direction="left" />
        <FlyingHeart delay={12.5} y="90%" direction="left" />
      </div>

      {/* Performance-Optimized Glowing Connection Network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0" viewBox="-600 -250 1200 500">
        <defs>
          <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 127, 71, 0)" />
            <stop offset="30%" stopColor="rgba(255, 127, 71, 0.6)" />
            <stop offset="70%" stopColor="rgba(255, 127, 71, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 127, 71, 0)" />
          </linearGradient>
        </defs>
        
        <g fill="none" className="opacity-60">
          <g stroke="#FF7F47" strokeWidth="2" className="opacity-5">
            <path d="M-150,0 C-250,-20 -350,-100 -480,-80" />
            <path d="M-180,40 C-280,40 -320,60 -380,40" />
            <path d="M-160,80 C-260,120 -350,180 -450,160" />
            <path d="M150,0 C250,-20 350,-80 480,-60" />
            <path d="M180,60 C280,100 320,100 400,80" />
            <path d="M170,100 C270,140 380,220 500,180" />
            <path d="M160,140 C240,180 340,260 440,240" />
          </g>

          <g stroke="url(#glow-grad)" strokeWidth="1.5">
            <motion.path d="M-150,0 C-250,-20 -350,-100 -480,-80" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
            <motion.path d="M-180,40 C-280,40 -320,60 -380,40" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.7 }} />
            <motion.path d="M-160,80 C-260,120 -350,180 -450,160" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.9 }} />
            <motion.path d="M150,0 C250,-20 350,-80 480,-60" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.6 }} />
            <motion.path d="M180,60 C280,100 320,100 400,80" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.8 }} />
            <motion.path d="M170,100 C270,140 380,220 500,180" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 1.0 }} />
            <motion.path d="M160,140 C240,180 340,260 440,240" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.3, delay: 1.2 }} />
          </g>

          <g stroke="#FF7F47" strokeLinecap="round">
            <g strokeWidth="5" className="opacity-10">
              <motion.path d="M-150,0 C-250,-20 -350,-100 -480,-80" strokeDasharray="15, 120" animate={{ strokeDashoffset: [-240, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M-180,40 C-280,40 -320,60 -380,40" strokeDasharray="10, 80" animate={{ strokeDashoffset: [-180, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M-160,80 C-260,120 -350,180 -450,160" strokeDasharray="12, 110" animate={{ strokeDashoffset: [-220, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M150,0 C250,-20 350,-80 480,-60" strokeDasharray="15, 120" animate={{ strokeDashoffset: [240, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M180,60 C280,100 320,100 400,80" strokeDasharray="10, 90" animate={{ strokeDashoffset: [180, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M170,100 C270,140 380,220 500,180" strokeDasharray="12, 140" animate={{ strokeDashoffset: [280, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M160,140 C240,180 340,260 440,240" strokeDasharray="10, 100" animate={{ strokeDashoffset: [200, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }} />
            </g>
            
            <g strokeWidth="2" className="opacity-60">
              <motion.path d="M-150,0 C-250,-20 -350,-100 -480,-80" strokeDasharray="15, 120" animate={{ strokeDashoffset: [-240, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M-180,40 C-280,40 -320,60 -380,40" strokeDasharray="10, 80" animate={{ strokeDashoffset: [-180, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M-160,80 C-260,120 -350,180 -450,160" strokeDasharray="12, 110" animate={{ strokeDashoffset: [-220, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M150,0 C250,-20 350,-80 480,-60" strokeDasharray="15, 120" animate={{ strokeDashoffset: [240, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M180,60 C280,100 320,100 400,80" strokeDasharray="10, 90" animate={{ strokeDashoffset: [180, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M170,100 C270,140 380,220 500,180" strokeDasharray="12, 140" animate={{ strokeDashoffset: [280, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }} />
              <motion.path d="M160,140 C240,180 340,260 440,240" strokeDasharray="10, 100" animate={{ strokeDashoffset: [200, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }} />
            </g>
          </g>
        </g>
      </svg>

      {/* Floating Side Avatars */}
      {sideBubbles.left.map((bubble, i) => (
        <motion.div
          key={`left-bubble-${i}`}
          initial={{ opacity: 0, scale: 0.5, translateZ: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + bubble.delay, duration: 0.5, ease: "backOut" }}
          className="absolute z-40 will-change-transform"
          style={{ 
            left: `calc(50% + ${bubble.x}px)`, 
            top: `calc(50% + ${bubble.y}px)`, 
            width: bubble.size, 
            height: bubble.size 
          }}
        >
          <div className="relative w-full h-full rounded-full border border-white/20 bg-black/40 backdrop-blur-md p-1 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            {bubble.img ? (
              <img src={bubble.img} alt="user" className="w-full h-full object-cover rounded-full" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black/60 rounded-full">
                {bubble.icon}
              </div>
            )}
          </div>
          {bubble.hasDot && (
            <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-primary border-2 border-[#0A0A0A] shadow-[0_0_10px_rgba(255,127,71,0.5)]" />
          )}
        </motion.div>
      ))}

      {sideBubbles.right.map((bubble, i) => (
        <motion.div
          key={`right-bubble-${i}`}
          initial={{ opacity: 0, scale: 0.5, translateZ: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + bubble.delay, duration: 0.5, ease: "backOut" }}
          className="absolute z-40 will-change-transform"
          style={{ 
            left: `calc(50% + ${bubble.x}px)`, 
            top: `calc(50% + ${bubble.y}px)`, 
            width: bubble.size, 
            height: bubble.size 
          }}
        >
           <div className="relative w-full h-full rounded-full border border-white/20 bg-black/40 backdrop-blur-md p-1 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            {bubble.img ? (
              <img src={bubble.img} alt="user" className="w-full h-full object-cover rounded-full" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black/60 rounded-full">
                {bubble.icon}
              </div>
            )}
          </div>
          {bubble.hasDot && (
            <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-primary border-2 border-[#0A0A0A] shadow-[0_0_10px_rgba(255,127,71,0.5)]" />
          )}
        </motion.div>
      ))}

      {/* Modern Status Widgets - Floating Left & Right */}
      {/* Left: Active Nearby Widget */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="absolute left-[5%] top-[20%] z-50 hidden xl:block"
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card-hover p-4 min-w-[180px] bg-black/60 border-white/5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Users className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Live Now</p>
              <h4 className="text-sm font-bold text-white">Nearby Activity</h4>
            </div>
          </div>
          
          <div className="flex -space-x-2 mb-3">
            {[profile1, profile2, profile3].map((img, i) => (
              <img key={i} src={img} className="w-8 h-8 rounded-full border-2 border-zinc-900 object-cover" alt="active user" />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white">
              +8
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <span className="text-[11px] font-medium text-white/70">12 people active nearby</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right: Verified Match Widget */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        className="absolute right-[5%] bottom-[25%] z-50 hidden xl:block"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass-card-hover p-4 min-w-[200px] bg-black/60 border-white/5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#FF7F47]/20 flex items-center justify-center">
              <ShieldCheck className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#FF7F47] font-bold">Identity Verified</p>
              <h4 className="text-sm font-bold text-white">Real Person Policy</h4>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-2 flex items-center gap-2 mb-2 border border-white/5">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
              <Zap className="text-primary fill-primary" size={12} />
            </div>
            <span className="text-[10px] font-bold text-white/90">98% Match Probability</span>
          </div>
          
          <p className="text-[11px] text-white/50 leading-tight">
            Advanced biometric verification ensures all members are authentic.
          </p>
        </motion.div>
      </motion.div>

      {/* Fanned Profile Cards */}
      <div className="relative flex items-center justify-center w-full h-full">
        {profiles.map((profile, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              scale: 0.5, 
              x: 0, 
              y: 100,
              rotateZ: 0, 
              rotateY: 0,
              translateZ: -500 
            }}
            whileInView={{ 
              opacity: profile.opacity, 
              scale: profile.scale, 
              x: profile.x, 
              y: profile.y,
              rotateZ: profile.rotation,
              rotateY: profile.rotY,
              translateZ: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              delay: 0.2 + i * 0.1, 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="absolute shadow-2xl will-change-transform"
            style={{ 
              zIndex: profile.zIndex,
              filter: `${profile.blur} brightness(${profile.brightness})`
            }}
          >
            <div className={`relative rounded-[32px] overflow-hidden border-2 bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
              profile.featured 
                ? "w-64 h-[420px] md:w-[280px] md:h-[460px] border-white/20" 
                : "w-52 h-[340px] md:w-[240px] md:h-[380px] border-white/10"
            }`}>
              {/* Distance Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <MapPin size={12} className="text-white/70" />
                <span className="text-[11px] font-bold text-white tracking-tight">200m</span>
              </div>

              <img src={profile.img} alt={profile.name} className="w-full h-full object-cover select-none pointer-events-none" />
              
              {/* Profile Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5">
                <h3 className="text-white text-lg font-bold mb-0.5">{profile.name}</h3>
                <p className="text-white/60 text-[10px] font-medium mb-4">2972 Westheimer Rd. Santa Ana</p>
                
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors active:scale-90">
                    <X size={16} className="text-white/60" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-[#FF7F47]/20 border border-[#FF7F47]/30 flex items-center justify-center hover:bg-[#FF7F47]/30 transition-colors active:scale-90">
                    <Heart size={16} className="text-[#FF7F47] fill-[#FF7F47]" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroVisuals;
