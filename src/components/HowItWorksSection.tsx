import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Create & Verify",
    description: "Sign up and complete a quick verification process to ensure authenticity.",
  },
  {
    number: "2",
    title: "Discover People Nearby",
    description: "Browse real profiles of active users around you.",
  },
  {
    number: "3",
    title: "Match & Connect",
    description: "Swipe, match, and start meaningful conversations instantly.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">Easy</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4">
            How it <span className="gradient-text">works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card-hover p-8 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-xs font-bold bg-primary/20 text-primary px-3 py-1 rounded-full">
                    Step · {step.number.padStart(2, "0")}
                  </span>
                </div>
                <div className="text-7xl font-extrabold gradient-text mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
