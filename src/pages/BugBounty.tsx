import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BugBountySteps } from "@/components/bug-bounty-steps";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const BugBounty = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-muted">
      <div className="max-w-7xl mx-auto bg-background shadow-lg">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="pt-12 md:pt-16 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}></div>
            </div>
            <div className="container mx-auto px-4 max-w-6xl relative h-full">
              <div className="grid lg:grid-cols-2 gap-12 h-full">
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue">
                    {t('bugBounty.hero.title')}
                  </h1>
                  <p className="text-xl md:text-2xl text-blue/80 mb-8 leading-relaxed">
                    {t('bugBounty.hero.subtitle')}
                  </p>
                </div>
                <div className="flex items-end justify-center">
                  <img 
                    src="/lovable-uploads/3d5fb454-c201-4f91-abe8-d7e267afc356.png" 
                    alt="Bug Bounty Platform Logo"
                    className="max-w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What is a Bug Bounty Platform Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-blue">
                {t('bugBounty.what.title')}
              </h2>
              
              <div className="space-y-6 text-lg text-blue/70 leading-relaxed">
                <p>
                  {t('bugBounty.what.desc1')}
                </p>
                
                <p className="font-semibold text-blue">
                  {t('bugBounty.what.desc2')}
                </p>
              </div>
            </div>
          </section>

          {/* Bug Bounty Steps Section */}
          <BugBountySteps />
        </main>
        <Footer />
      </div>
    </div>;
};
export default BugBounty;