import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import appIcon from "@/assets/app-icon.png";
import { useEffect } from "react";

/**
 * Smart Unified Navigation Bar
 * Hides on scroll down, reveals on scroll up.
 * Resets visibility on page navigation.
 */
const Navbar = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Reset navbar state when changing pages or refresh
  useEffect(() => {
    setHidden(false);
    setIsScrolled(window.scrollY > 50);
  }, [location.key]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Safety check: never hide when near the very top of any page
    if (latest < 100) {
      setHidden(false);
      setIsScrolled(false);
      return;
    }

    // Toggle visibility based on scroll direction
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Toggle glass background
    setIsScrolled(latest > 50);
  });

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial="visible"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ 
        duration: 0.35, 
        ease: [0.23, 1, 0.32, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl">
            <img src={appIcon} alt="Me & You" className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden xs:inline">Me & You</span>
        </Link>

        {/* Premium Tagline Badge */}
        <div className="relative flex items-center">
          {/* Outer Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7F47]/20 to-transparent blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl transition-all duration-300 hover:border-[#FF7F47]/30 hover:bg-black/30 group">
            {/* Live Indicator */}
            <div className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7F47] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF7F47]"></span>
            </div>

            {/* Content Space */}
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase">
              <span className="text-white/90">Real people</span>
              <span className="w-[1px] h-3 bg-white/10 mx-0.5" />
              <span className="bg-gradient-to-r from-[#FF7F47] to-[#FF9B6A] bg-clip-text text-transparent">Real distance</span>
            </div>
          </div>
          
          {/* Mobile version optimization for very small screens */}
          <div className="absolute inset-0 flex items-center sm:hidden">
            {/* Keeping the same structure but ensuring it doesn't break layout */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
