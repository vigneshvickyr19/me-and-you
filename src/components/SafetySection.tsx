import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, Database } from "lucide-react";
import coupleSafety from "@/assets/couple-safety.jpg";

const safetyFeatures = [
  { icon: ShieldCheck, text: "Strong reporting and blocking features" },
  { icon: Eye, text: "Profile moderation system" },
  { icon: Lock, text: "Strict verification policy" },
  { icon: Database, text: "Minimal data shared" },
];

const SafetySection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border/50 relative"
          >
            <img src={coupleSafety} alt="Safety first" className="w-full h-80 object-cover" />
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
              🔒 Encrypted
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4">Safety & Trust</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-2 leading-tight">
              Built for a Safe &{" "}
              <span className="gradient-text">Respectful Community</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Your safety is our priority. Because trust is the foundation of real connections.
            </p>

            <div className="space-y-4">
              {safetyFeatures.map((feat) => (
                <div key={feat.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feat.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
