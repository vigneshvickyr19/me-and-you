import appIcon from "@/assets/app-icon.png";

const footerLinks = {
  Explore: ["Stories", "Cultures", "Blog"],
  Company: ["Our Story", "Why it works", "Contact Us"],
  Support: ["FAQs", "Privacy Policy", "Terms & Conditions"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={appIcon} alt="Me & You" className="w-8 h-8 rounded-lg" />
              <span className="text-foreground font-bold text-lg">Me & You</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Vitae turpis feugiat fringilla amet nullis.
            </p>
            <div className="flex items-center gap-3">
              {["facebook", "instagram", "twitter", "linkedin"].map((s) => (
                <div key={s} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <span className="text-xs text-muted-foreground">
                    {s[0].toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-foreground font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © 2025 Me & You. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
