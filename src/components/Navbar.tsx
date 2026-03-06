import { motion } from "framer-motion";
import appIcon from "@/assets/app-icon.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={appIcon} alt="Me & You" className="w-8 h-8 rounded-lg" />
          <span className="text-foreground font-bold text-lg">Me & You</span>
        </div>
        <button className="gradient-btn text-sm px-5 py-2.5">
          Download M&U →
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
