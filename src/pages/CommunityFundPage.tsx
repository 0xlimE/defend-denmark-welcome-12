import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommunityFund } from "@/components/community-fund";
import { useLanguage } from "@/contexts/language-context";

const CommunityFundPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-7xl mx-auto bg-background shadow-lg">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="h-[500px] md:h-[600px] bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden flex items-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}></div>
            </div>
            <div className="container mx-auto px-4 max-w-6xl relative h-full">
              <div className="grid xl:grid-cols-2 gap-12 items-center h-full">
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue">
                    {t('fund.hero.title')}
                  </h1>
                  <p className="text-xl md:text-2xl text-blue/80 mb-8 leading-relaxed">
                    {t('fund.hero.subtitle')}
                  </p>
                </div>
                <div className="hidden xl:flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/f031df16-47bf-4398-ba2c-61bce177c222.png" 
                    alt="Community Fund supporting Denmark's cybersecurity"
                    className="w-80 h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
          <CommunityFund />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CommunityFundPage;