import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Create & Verify",
    description: "Sign up and complete a quick verification process to ensure authenticity.",
    color: "from-primary to-orange-400",
  },
  {
    number: "2",
    title: "Discover People Nearby",
    description: "Browse real profiles of active users around you.",
    color: "from-primary to-orange-500",
  },
  {
    number: "3",
    title: "Match & Connect",
    description: "Swipe, match, and start meaningful conversations instantly.",
    color: "from-orange-500 to-primary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-6">
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

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative group"
            >
              {/* Card with gradient border */}
              <div className="relative rounded-2xl p-[1px] overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, hsl(24 90% 53% / 0.5), hsl(24 90% 53% / 0.1), transparent)",
                }}
              >
                <div className="bg-card rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-300 group-hover:bg-card/80">
                  {/* Step label */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-primary/20 text-primary px-3 py-1.5 rounded-full border border-primary/20">
                      Step · {step.number.padStart(2, "0")}
                    </span>
                  </div>

                  {/* Large number */}
                  <div className="text-8xl md:text-9xl font-extrabold leading-none mb-4 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(180deg, hsl(24 90% 53%), hsl(24 90% 53% / 0.2))",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                  {/* Subtle corner glow */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10 blur-[40px] group-hover:opacity-20 transition-opacity"
                    style={{ background: "hsl(24 90% 53%)" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
