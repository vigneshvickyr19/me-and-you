import { Instagram, Facebook, Linkedin } from "lucide-react";
import appIcon from "@/assets/app-icon.png";
import { Link } from "react-router-dom";

const footerLinks = {
  Connect: [
    { name: "Safety Tips", path: "/safety" },
    { name: "Community Guidelines", path: "/guidelines" },
    { name: "Moderation Policy", path: "/moderation" },
    { name: "Age Verification", path: "/age-verification" },
  ],
  Legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Refund Policy", path: "/refund" },
    { name: "Health Privacy", path: "/health-privacy" },
  ],
  Resources: [
    { name: "FAQs", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "IP Policy", path: "/ip-policy" },
  ],
};

const XIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer = () => {
  const socials = [
    { icon: Instagram, name: "instagram" },
    { icon: Facebook, name: "facebook" },
    { icon: XIcon, name: "x" },
    { icon: Linkedin, name: "linkedin" },
  ];

  return (
    <footer id="footer" className="bg-[#0A0A0A] border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,127,71,0.15)] flex items-center justify-center bg-white/5">
                <img src={appIcon} alt="M&U" className="w-full h-full object-cover" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">M&U</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
              Premium dating for those who value authenticity. We connect verified individuals through real-time discovery and genuine interactions near you.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#FF7F47] hover:bg-[#FF7F47] hover:text-white transition-all duration-300 group"
                >
                  <social.icon size={18} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase text-[12px]">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 text-sm hover:text-[#FF7F47] transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © 2026 M&U. All rights reserved.
          </p>
          <div className="flex gap-6 text-zinc-600 text-xs uppercase tracking-widest font-medium">
            <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
