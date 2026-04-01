import { Toaster as ToasterShadcn } from "@/components/ui/toaster";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalPage from "./pages/LegalPage";
import ContactPage from "./pages/ContactPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<LegalPage type="faq" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/guidelines" element={<LegalPage type="community" />} />
          <Route path="/safety" element={<LegalPage type="safety" />} />
          <Route path="/cookies" element={<LegalPage type="cookies" />} />
          <Route path="/refund" element={<LegalPage type="refund" />} />
          <Route path="/health-privacy" element={<LegalPage type="health" />} />
          <Route path="/ip-policy" element={<LegalPage type="ip" />} />
          <Route path="/accessibility" element={<LegalPage type="accessibility" />} />
          <Route path="/age-verification" element={<LegalPage type="age" />} />
          <Route path="/moderation" element={<LegalPage type="moderation" />} />
          <Route path="/contact" element={<ContactPage />} />
          
        </Routes>
      </HashRouter>
      <ToasterShadcn />
      <Toaster position="bottom-center" richColors closeButton theme="dark" />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
