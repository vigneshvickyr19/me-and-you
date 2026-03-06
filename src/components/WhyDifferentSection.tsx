import { motion } from "framer-motion";
import { ShieldCheck, Bot, MapPin, MessageCircle, Lock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Verified Profiles",
    description: "Every user goes through photo verification to create a safe, authentic community. No impersonation.",
  },
  {
    icon: Bot,
    title: "Zero Bots. Zero Spam.",
    description: "Advanced anti-fraud systems actively remove bots, platform misuse, and harm to keep connections real.",
  },
  {
    icon: MapPin,
    title: "Real-Time Nearby Discovery",
    description: "See who's genuinely active and near you right now. No guessing. Every connection gets the chance to be live.",
  },
  {
    icon: MessageCircle,
    title: "Instant Conversations",
    description: "Instant and real conversations start instantly — without unnecessary delays.",
  },
  {
    icon: Lock,
    title: "Privacy In Your Control",
    description: "Your profile visibility is always under your control. Choose who sees you and when.",
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
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">Why</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4">
            Why U&M is <span className="gradient-text">different</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-card-hover p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
