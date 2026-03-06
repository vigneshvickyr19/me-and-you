import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Verified Profiles", mu: true, others: "Limited" },
  { feature: "Bot-Free Environment", mu: true, others: false },
  { feature: "Real-Time Nearby Discovery", mu: true, others: false },
  { feature: "Strong Privacy Controls", mu: true, others: "Moderate" },
  { feature: "Encrypted Conversations", mu: true, others: "Mostly Chat" },
  { feature: "Profile Location-based Match", mu: true, others: false },
  { feature: "Profile Location-based Chat", mu: true, others: false },
];

const ComparisonSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">Compare our features</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4">
            Why choose <span className="gradient-text">M&U</span>?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
          <div className="grid grid-cols-3 text-sm font-bold border-b border-border/50 px-6 py-4">
            <span className="text-muted-foreground">Features</span>
            <span className="text-center text-foreground">U&M</span>
            <span className="text-center text-muted-foreground">Other Dating Apps</span>
          </div>
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 px-6 py-4 text-sm items-center ${
                i < rows.length - 1 ? "border-b border-border/30" : ""
              }`}
            >
              <span className="text-muted-foreground">{row.feature}</span>
              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="flex justify-center">
                {row.others === false ? (
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                ) : (
                  <span className="text-muted-foreground text-xs">{row.others}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
