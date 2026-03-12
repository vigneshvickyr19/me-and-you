import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { legalData } from "@/constants/legalData";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LegalPage = ({ type }: { type: keyof typeof legalData }) => {
  const data = legalData[type];
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-400 font-sans selection:bg-primary/30">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        {/* Sub-Header Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-bold text-xs uppercase tracking-widest">Back to Discover</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            {data.title}
          </h1>
          
          {'description' in data && (
            <p className="text-lg mb-12 text-zinc-500 font-medium">
              {data.description as string}
            </p>
          )}

          <div className="space-y-12">
            {/* FAQ Special Case */}
            {type === "faq" && 'items' in data && (
              <Accordion type="single" collapsible className="w-full space-y-4">
                {(data.items as any[]).map((item, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`item-${i}`}
                    className="border border-white/5 bg-zinc-900/50 rounded-2xl px-6 transition-all duration-300 hover:border-primary/20 data-[state=open]:border-primary/30 data-[state=open]:bg-zinc-900"
                  >
                    <AccordionTrigger className="text-left text-white font-bold text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}

            {/* General Content Case */}
            {('sections' in data) && (data.sections as any[]).map((section, i) => (
              <section key={i} className="space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight pt-4">
                  {section.title}
                </h2>
                
                {section.text && (
                  <p className="leading-relaxed">
                    {section.text}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3 list-disc pl-5 marker:text-primary">
                    {section.list.map((li: string, j: number) => (
                      <li key={j} className="pl-2">{li}</li>
                    ))}
                  </ul>
                )}

                {section.subsections && section.subsections.map((sub: any, k: number) => (
                  <div key={k} className="mt-6 space-y-2">
                    <h3 className="text-lg font-bold text-white/90">{sub.title}</h3>
                    <ul className="space-y-2 list-disc pl-5 marker:text-primary/60">
                      {sub.list.map((li: string, l: number) => (
                        <li key={l} className="pl-2">{li}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {section.footer && (
                  <p className="text-sm text-zinc-500 italic mt-4">
                    {section.footer}
                  </p>
                )}
              </section>
            ))}

            {/* Top-level text for simple cases */}
            {(!('sections' in data) && !('items' in data) && 'text' in data) && (
              <p className="leading-relaxed text-zinc-400">{(data as any).text}</p>
            )}

            {/* Top-level list for simple cases */}
            {(!('sections' in data) && 'list' in data) && (
              <ul className="space-y-3 list-disc pl-5 marker:text-primary">
                {(data as any).list.map((li: string, i: number) => (
                  <li key={i} className="pl-2">{li}</li>
                ))}
              </ul>
            )}

            {/* Contact Section */}
            {type === 'contact' && 'info' in data && (
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                {Object.entries((data as any).info).map(([key, value]) => (
                  <div key={key} className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50">
                    <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{key}</h4>
                    <p className="text-white font-medium break-all">{value as string}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
