import { motion } from "framer-motion";
import coupleSafety from "@/assets/couple-safety.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DatingRealSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-6"
        >
          <span className="section-label">About us</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Dating Should Feel{" "}
              <br />
              <span className="gradient-text">Real Again.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Too many dating apps are filled with fake profiles, bots, 
              and scams. Everyone deserves a genuine connection.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              When you know that person on the other side is real — 
              your conversations just feel different.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              They matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <img src={coupleSafety} alt="Real dating" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-30 blur-[40px]"
              style={{ background: "hsl(24 90% 53%)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DatingRealSection;
