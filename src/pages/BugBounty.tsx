import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BugBountySteps } from "@/components/bug-bounty-steps";
import { PageHero } from "@/components/page-hero";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const BugBounty = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-muted">
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        <main className="pt-16">
          <PageHero
            title={t('bugBounty.hero.title')}
            subtitle={t('bugBounty.hero.subtitle')}
            image={{
              src: "/site-uploads/handshake.png",
              alt: "Bug Bounty Platform Logo",
              maxHeight: "max-h-56"
            }}
          />

          {/* What is a Bug Bounty Platform Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
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