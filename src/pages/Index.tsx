
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section-front";
import { AsmOfferBanner } from "@/components/asm-offer-banner";
import { BugBountyConcept } from "@/components/bug-bounty-concept";
import { PreventiveMeasuresCarousel } from "@/components/preventive-measures-carousel";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        <main>
          <HeroSection />
          <AsmOfferBanner />
          <BugBountyConcept />
          <PreventiveMeasuresCarousel />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
