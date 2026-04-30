import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/language-context";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Companies from "./pages/Companies";
import Researchers from "./pages/Researchers";
import BugBounty from "./pages/BugBounty";
import Compliance from "./pages/Compliance";
import Dora from "./pages/compliance/Dora";
import Nis2 from "./pages/compliance/Nis2";
import Cra from "./pages/compliance/Cra";
import CommunityFundPage from "./pages/CommunityFundPage";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/researchers" element={<Researchers />} />
            <Route path="/bug-bounty" element={<BugBounty />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/compliance/dora" element={<Dora />} />
            <Route path="/compliance/nis2" element={<Nis2 />} />
            <Route path="/compliance/cra" element={<Cra />} />
            <Route path="/community-fund" element={<CommunityFundPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
