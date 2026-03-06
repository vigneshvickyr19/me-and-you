import { motion } from "framer-motion";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";

const profiles = [
  { img: profile1, name: "Emma W., 24", rotation: -8, x: -40 },
  { img: profile2, name: "Jenny Wilson, 26", rotation: 0, x: 0, featured: true },
  { img: profile3, name: "Mia S., 23", rotation: 8, x: 40 },
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

      {/* Profile cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative mt-16 flex items-end justify-center z-10"
      >
        {profiles.map((profile, i) => (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className={`relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl ${
              profile.featured ? "w-48 h-64 md:w-56 md:h-72 z-20" : "w-36 h-52 md:w-44 md:h-60 z-10 opacity-80"
            }`}
            style={{
              transform: `rotate(${profile.rotation}deg) translateX(${profile.x}px)`,
              marginLeft: i > 0 ? "-24px" : "0",
            }}
          >
            <img src={profile.img} alt={profile.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
              <p className="text-foreground text-sm font-semibold">{profile.name}</p>
            </div>
            {profile.featured && (
              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
