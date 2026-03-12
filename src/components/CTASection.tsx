import { motion } from "framer-motion";
import coupleCta from "@/assets/couple-cta.jpg";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-border/50"
          style={{
            background: "linear-gradient(135deg, hsl(24 90% 15%), hsl(0 0% 8%))",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-foreground">
                Stop Wondering <span className="gradient-text">Who's Real.</span>
                <br />
                Start Meeting <span className="gradient-text">Verified People.</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Join a secure community where every profile is verified and every connection 
                is genuine. Experience the next level of social discovery with M&U today.
              </p>

              <div className="flex items-center gap-4">
                <button className="gradient-btn flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2H6.477C5.1 2 4 3.1 4 4.477v15.046C4 20.9 5.1 22 6.477 22h11.046C18.9 22 20 20.9 20 19.523V4.477C20 3.1 18.9 2 17.523 2zM12 19.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM17 15H7V5h10v10z"/></svg>
                  Google Play
                </button>
                <button className="gradient-btn flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83"/></svg>
                  App Store
                </button>
              </div>
            </div>

            <div className="relative flex justify-center items-end">
              <div className="rounded-2xl overflow-hidden border border-border/50 w-full max-w-sm">
                <img src={coupleCta} alt="Verified people" className="w-full h-72 object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
