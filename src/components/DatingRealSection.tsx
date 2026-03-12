import { motion } from "framer-motion";
import aboutImage from "@/assets/about_image.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DatingRealSection = () => {
  return (
    <section className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 shadow-lg">
            <div className="w-4 h-4 rounded-sm bg-[#FF7F47] flex items-center justify-center transform rotate-12">
              <span className="text-[10px] text-black">★</span>
            </div>
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">About us</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.05] text-white">
              Dating Should Feel
              <br />
              <span className="text-[#FF7F47]">Real Again.</span>
            </h2>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
                Too many dating apps are filled with fake profiles, bots, 
                and endless matches that go nowhere.
              </p>
              
              <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
                When you know the person is real-and actually near 
                you-conversations feel different.
              </p>
              
              <p className="text-zinc-500 text-lg md:text-xl font-bold">
                They matter.
              </p>

              <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
                Profiles disappear. Bots reply. "Nearby" turns out to be 
                miles away.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <img 
              src={aboutImage} 
              alt="Dating Interface" 
              className="w-full max-w-[600px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
            />
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF7F47]/5 blur-[120px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DatingRealSection;
