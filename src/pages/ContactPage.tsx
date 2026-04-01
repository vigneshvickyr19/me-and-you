import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, Shield, Clock, Send, CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  // Helper to check for existing submission throttle
  const checkThrottle = () => {
    const cookies = document.cookie.split(';');
    return cookies.some(cookie => cookie.trim().startsWith('contact_throttle='));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Senior-level throttling: Prevent spam at the browser level
    if (checkThrottle()) {
      toast({
        variant: "destructive",
        title: "Access Restricted",
        description: "You've already sent a message. Please wait 24 hours.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "https://push-notification-ve9s.onrender.com";
      const response = await fetch(`${baseUrl}/api/support/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Set cookie for 24-hour throttle
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 1);
        document.cookie = `contact_throttle=true; expires=${expiry.toUTCString()}; path=/; SameSite=Strict`;

        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: result.message || "We will get back to you shortly.",
        });
        
        // Reset form for future use
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: ""
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact API Error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportCards = [
    {
      icon: Mail,
      title: "Support Email",
      value: "reachmandyou@gmail.com",
      description: "Our dedicated team is here to help.",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: Shield,
      title: "Safety Team",
      value: "reachmandyou@gmail.com",
      description: "Report issues or safety concerns.",
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 Hours",
      description: "We aim for quick responses.",
      color: "bg-green-500/10 text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-400 font-sans selection:bg-primary/30">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-bold text-xs uppercase tracking-widest">Back to Discover</span>
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-12 max-w-lg leading-relaxed">
              Have questions or need help? Our support team is always ready to assist you in making the most of your M&U experience.
            </p>

            <div className="grid sm:grid-cols-1 gap-6">
              {supportCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm flex items-start gap-4 group hover:border-primary/20 transition-colors"
                >
                  <div className={`p-3 rounded-xl ${card.color} transition-transform group-hover:scale-110`}>
                    <card.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{card.title}</h3>
                    <p className="text-primary font-medium text-sm mb-1">{card.value}</p>
                    <p className="text-xs text-zinc-600 font-medium tracking-tight uppercase">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-md relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-700 font-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-700 font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Subject</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer font-medium"
                      >
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Safety & Security</option>
                        <option>Billing Question</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                      <textarea 
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all resize-none placeholder:text-zinc-700 font-medium"
                      ></textarea>
                    </div>

                    <button
                      disabled={isSubmitting}
                      className="w-full gradient-btn flex items-center justify-center gap-3 h-14 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="font-bold">Send Message</span>
                          <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
                    <p className="text-zinc-500 max-w-sm mx-auto">
                      Thank you for reaching out. Our support team will review your message and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
