import { motion } from "framer-motion";
import { ShieldCheck, Bot, MapPin, MessageSquare, Lock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Verified Profiles",
    description: "Every user goes through a verification process. No fake faces. No impersonation.",
  },
  {
    icon: Bot,
    title: "Zero Bots. Zero Spam.",
    description: "Advanced moderation keeps the platform clean, respectful, and human.",
  },
  {
    icon: MapPin,
    title: "Real-Time Nearby Discovery",
    description: "See active people near you — not profiles from miles away pretending to be close.",
  },
  {
    icon: MessageSquare,
    title: "Instant Conversations",
    description: "Match and start chatting instantly without unnecessary delays.",
  },
  {
    icon: Lock,
    title: "Privacy in Your Control",
    description: "Your profile visibility is always under your control. You decide who can connect.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyDifferentSection = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 mb-8">
            <div className="w-3.5 h-3.5 rounded-sm bg-[#FF7F47] flex items-center justify-center transform rotate-12">
              <span className="text-[9px] text-black">★</span>
            </div>
            <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">Why</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Why M&U is <span className="text-[#FF7F47]">different</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={item}
              className={`w-full ${idx < 3 ? 'md:w-[calc(33.33%-1rem)]' : 'md:w-[calc(33.33%-1rem)]'} group`}
            >
              <div className="relative h-full rounded-[32px] p-8 border border-white/5 transition-all duration-300 group-hover:border-white/10 overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 100%)",
                }}
              >
                {/* Visual Accent/Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.02] blur-[40px] rounded-full -mr-10 -mt-10" />
                
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-10 border border-white/5 shadow-inner"
                  style={{
                    background: "linear-gradient(135deg, #2A2A2A, #151515)",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF7F47]/10 flex items-center justify-center transform rotate-12 shadow-[0_0_20px_rgba(255,127,71,0.1)] border border-[#FF7F47]/20">
                    <feature.icon size={20} className="text-[#FF7F47] transform -rotate-12" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
