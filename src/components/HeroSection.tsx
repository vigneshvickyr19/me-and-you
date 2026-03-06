import { motion } from "framer-motion";
import { X, Heart, MapPin, Navigation } from "lucide-react";
import heroProfile from "@/assets/hero-profile.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

const cardData = [
  { offset: -2, scale: 0.75, x: -220, opacity: 0.4, blur: 2, z: 1 },
  { offset: -1, scale: 0.85, x: -120, opacity: 0.6, blur: 1, z: 2 },
  { offset: 0, scale: 1, x: 0, opacity: 1, blur: 0, z: 5 },
  { offset: 1, scale: 0.85, x: 120, opacity: 0.6, blur: 1, z: 2 },
  { offset: 2, scale: 0.75, x: 220, opacity: 0.4, blur: 2, z: 1 },
];

const floatingAvatars = [
  { img: avatar1, top: "18%", left: "6%", size: 48, delay: 0, icon: "phone" },
  { img: avatar2, top: "40%", left: "3%", size: 40, delay: 0.3, icon: null },
  { img: avatar3, top: "62%", left: "8%", size: 36, delay: 0.6, icon: null },
  { img: avatar4, top: "15%", right: "5%", size: 44, delay: 0.2, icon: null },
  { img: avatar5, top: "38%", right: "3%", size: 50, delay: 0.5, icon: "heart" },
  { img: avatar6, top: "60%", right: "7%", size: 38, delay: 0.8, icon: null },
];

// SVG connection lines from center to floating avatars
const ConnectionLines = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none z-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(24 90% 53%)" stopOpacity="0.6" />
        <stop offset="50%" stopColor="hsl(24 90% 53%)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="hsl(24 90% 53%)" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="lineGradR" x1="100%" y1="0%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="hsl(24 90% 53%)" stopOpacity="0.6" />
        <stop offset="50%" stopColor="hsl(24 90% 53%)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="hsl(24 90% 53%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Left lines */}
    {[
      { x2: "8%", y2: "22%" },
      { x2: "5%", y2: "44%" },
      { x2: "10%", y2: "66%" },
    ].map((line, i) => (
      <g key={`left-${i}`}>
        <line
          x1="50%"
          y1="50%"
          x2={line.x2}
          y2={line.y2}
          stroke="url(#lineGradR)"
          strokeWidth="1"
          opacity="0.4"
        />
        <circle r="3" fill="hsl(24 90% 53%)" opacity="0.8">
          <animateMotion
            dur={`${3 + i * 0.5}s`}
            repeatCount="indefinite"
            path={`M ${50},${50} L ${parseFloat(line.x2)},${parseFloat(line.y2)}`}
          />
        </circle>
      </g>
    ))}
    {/* Right lines */}
    {[
      { x2: "93%", y2: "19%" },
      { x2: "95%", y2: "42%" },
      { x2: "91%", y2: "64%" },
    ].map((line, i) => (
      <g key={`right-${i}`}>
        <line
          x1="50%"
          y1="50%"
          x2={line.x2}
          y2={line.y2}
          stroke="url(#lineGrad)"
          strokeWidth="1"
          opacity="0.4"
        />
        <circle r="3" fill="hsl(24 90% 53%)" opacity="0.8">
          <animateMotion
            dur={`${3 + i * 0.5}s`}
            repeatCount="indefinite"
            path={`M ${50},${50} L ${parseFloat(line.x2)},${parseFloat(line.y2)}`}
          />
        </circle>
      </g>
    ))}
  </svg>
);

const PulsingDot = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-primary"
    style={{ boxShadow: "0 0 8px hsl(24 90% 53%)" }}
    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
    transition={{ duration: 2, repeat: Infinity, delay }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-25 blur-[150px]"
        style={{ background: "radial-gradient(circle, hsl(24 90% 53%), transparent)" }}
      />

      {/* Animated connection lines (CSS-based for performance) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        {/* Left connection lines */}
        {[
          { top: "30%", endLeft: "8%", endTop: "22%" },
          { top: "45%", endLeft: "5%", endTop: "44%" },
          { top: "55%", endLeft: "10%", endTop: "66%" },
        ].map((line, i) => (
          <div key={`lline-${i}`} className="absolute left-1/2 top-1/2 origin-left" style={{ width: "45%", height: "1px" }}>
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to left, transparent, hsl(24 90% 53% / 0.3))`,
                transform: `rotate(${(i - 1) * 20}deg)`,
                transformOrigin: "left center",
              }}
            />
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-primary top-1/2 -translate-y-1/2"
              style={{
                boxShadow: "0 0 12px hsl(24 90% 53%)",
                transform: `rotate(${(i - 1) * 20}deg)`,
              }}
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ))}
        {/* Right connection lines */}
        {[
          { top: "30%", endRight: "7%" },
          { top: "45%", endRight: "5%" },
          { top: "55%", endRight: "9%" },
        ].map((line, i) => (
          <div key={`rline-${i}`} className="absolute right-1/2 top-1/2 origin-right" style={{ width: "45%", height: "1px" }}>
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, transparent, hsl(24 90% 53% / 0.3))`,
                transform: `rotate(${(i - 1) * -20}deg)`,
                transformOrigin: "right center",
              }}
            />
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-primary top-1/2 -translate-y-1/2"
              style={{
                boxShadow: "0 0 12px hsl(24 90% 53%)",
                transform: `rotate(${(i - 1) * -20}deg)`,
              }}
              animate={{ right: ["0%", "100%", "0%"] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>

      {/* Floating avatars */}
      {floatingAvatars.map((avatar, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + avatar.delay, duration: 0.5, type: "spring" }}
          className="absolute z-10 hidden md:block"
          style={{
            top: avatar.top,
            left: avatar.left,
            right: avatar.right,
            width: avatar.size,
            height: avatar.size,
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              className="rounded-full overflow-hidden border-2 border-border/50"
              style={{
                width: avatar.size,
                height: avatar.size,
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={avatar.img}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            {avatar.icon === "phone" && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center border-2 border-background">
                <span className="text-[8px]">📞</span>
              </div>
            )}
            {avatar.icon === "heart" && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                <Heart className="w-3 h-3 text-primary-foreground" fill="currentColor" />
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Card stack */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-20 flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: card.opacity, y: 0, scale: card.scale }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.6, type: "spring" }}
            className="absolute rounded-3xl overflow-hidden border border-border/30"
            style={{
              width: card.offset === 0 ? 280 : 240,
              height: card.offset === 0 ? 400 : 360,
              transform: `translateX(${card.x}px)`,
              zIndex: card.z,
              filter: card.blur ? `blur(${card.blur}px)` : "none",
              boxShadow:
                card.offset === 0
                  ? "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(241,111,37,0.1)"
                  : "0 10px 30px rgba(0,0,0,0.4)",
              background: "hsl(var(--card))",
            }}
          >
            {/* Card image */}
            <div className="relative w-full h-[70%]">
              <img
                src={heroProfile}
                alt="Jenny Wilson"
                className="w-full h-full object-cover"
              />
              {/* Distance badge */}
              <div className="absolute top-3 right-3 glass-card px-2.5 py-1 rounded-full flex items-center gap-1 text-xs text-foreground">
                <Navigation className="w-3 h-3 text-primary" fill="currentColor" />
                200m
              </div>
            </div>

            {/* Card info */}
            <div className="p-4 flex flex-col gap-1">
              <h3 className="text-foreground font-bold text-lg">Jenny Wilson, 26</h3>
              <p className="text-muted-foreground text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                2972 Westheimer Rd, Santa Ana
              </p>
            </div>

            {/* Action buttons */}
            {card.offset === 0 && (
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-8 px-4">
                <button className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shadow-lg">
                  <X className="w-5 h-5" />
                </button>
                <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-primary/40 transition-shadow"
                  style={{ boxShadow: "0 4px 20px rgba(241,111,37,0.4)" }}>
                  <Heart className="w-6 h-6" fill="currentColor" />
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Spacer for card height */}
      <div className="h-[440px]" />

      {/* Bottom indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex items-center justify-center gap-4 mt-8 z-20 flex-wrap"
      >
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="glow-dot" /> 100% Verified Profiles
        </span>
        <span className="text-border">•</span>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="glow-dot" /> Real-Time Discovery
        </span>
        <span className="text-border">•</span>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="glow-dot" /> Privacy First
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
