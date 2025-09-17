import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommunityFund } from "@/components/community-fund";
import { PageHero } from "@/components/page-hero";
import { useLanguage } from "@/contexts/language-context";

const CommunityFundPage = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        <main className="pt-16">
          <PageHero
            title={t('fund.hero.title')}
            subtitle={t('fund.hero.subtitle')}
            image={{
              src: "/lovable-uploads/piggybank.png",
              alt: "Community Fund supporting Denmark's cybersecurity",
              maxHeight: "max-h-64"
            }}
          />
          <CommunityFund />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CommunityFundPage;