import { motion } from "framer-motion";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";

const profiles = [
  { img: profile1, name: "Emma W., 24", rotation: -12, scale: 0.9, zIndex: 10 },
  { img: profile2, name: "Jenny Wilson, 26", rotation: 0, scale: 1, zIndex: 20, featured: true },
  { img: profile3, name: "Mia S., 23", rotation: 12, scale: 0.9, zIndex: 10 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[120px]" 
        style={{ background: "radial-gradient(circle, hsl(24 90% 53%), transparent)" }} 
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center z-10 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Meet someone{" "}
          <br />
          Who's <span className="gradient-text">actually here.</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
          Verified people. Real-time presence. Dynamic connections near you.
          Be seen. No fake profiles. No endless swipes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button className="px-6 py-3 rounded-xl font-semibold border border-border bg-secondary text-foreground transition-all duration-300 hover:border-primary/50">
            See how it works →
          </button>
          <button className="gradient-btn">
            Download M&U →
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="glow-dot" /> 100% Verified Profiles</span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5"><span className="glow-dot" /> Real-Time Discovery</span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5"><span className="glow-dot" /> Privacy First</span>
        </div>
      </motion.div>

      {/* Phone-style Profile Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative mt-16 flex items-center justify-center z-10"
        style={{ perspective: "1200px" }}
      >
        {profiles.map((profile, i) => (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, y: 40, rotateZ: profile.rotation }}
            animate={{ opacity: 1, y: 0, rotateZ: profile.rotation }}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
            className="relative"
            style={{
              zIndex: profile.zIndex,
              marginLeft: i > 0 ? "-32px" : "0",
              transform: `rotate(${profile.rotation}deg) scale(${profile.scale})`,
            }}
          >
            {/* Phone frame */}
            <div className={`relative rounded-[24px] overflow-hidden border-2 shadow-2xl ${
              profile.featured 
                ? "w-44 h-[280px] md:w-56 md:h-[360px] border-primary/40" 
                : "w-36 h-[230px] md:w-44 md:h-[290px] border-border/40 opacity-85"
            }`}
              style={{
                background: "linear-gradient(180deg, hsl(0 0% 12%), hsl(0 0% 8%))",
                boxShadow: profile.featured 
                  ? "0 20px 60px rgba(241, 111, 37, 0.2), 0 8px 24px rgba(0,0,0,0.5)" 
                  : "0 16px 40px rgba(0,0,0,0.5)",
              }}
            >
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-background rounded-b-xl z-30" />
              
              {/* Profile image */}
              <img src={profile.img} alt={profile.name} className="w-full h-full object-cover" />
              
              {/* Bottom gradient overlay with name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-12">
                <div className="flex items-center gap-2">
                  {profile.featured && (
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  )}
                  <p className="text-foreground text-sm font-bold">{profile.name}</p>
                </div>
                {profile.featured && (
                  <p className="text-muted-foreground text-[10px] mt-0.5">Active now</p>
                )}
              </div>

              {/* Online indicator for featured */}
              {profile.featured && (
                <div className="absolute top-8 right-3 bg-primary/90 text-primary-foreground text-[9px] font-bold px-2 py-0.5 rounded-full">
                  LIVE
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Decorative floating elements */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-8 w-12 h-12 rounded-full opacity-40 blur-md"
          style={{ background: "hsl(24 90% 53%)" }}
        />
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-6 w-8 h-8 rounded-full opacity-30 blur-md"
          style={{ background: "hsl(24 90% 53%)" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
