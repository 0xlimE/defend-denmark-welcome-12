import { useLanguage } from "@/contexts/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SecurityResearchersCarousel } from "@/components/security-researchers-carousel";
import { PageHero } from "@/components/page-hero";
const About = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-muted">
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        
        <main className="pt-16">
          <PageHero
            title={t('about.hero.title')}
            subtitle={t('about.hero.subtitle')}
            image={{
              src: "/site-uploads/aboutreal.png",
              alt: "About Defend Denmark - Enhancing National Cybersecurity",
              maxHeight: "max-h-64"
            }}
          />

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16 mt-16">
            {/* First row - Mission card with Emil's picture */}
            <div className="lg:col-span-3 grid md:grid-cols-[auto_1fr] gap-8 items-center">
              {/* Emil Hørning Picture */}
              <div className="flex flex-col items-center ml-20">
                <div className="w-64 h-80 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20">
                  <img src="/site-uploads/b5eca1c5-8c12-4758-a46e-df6fe282d5b3.png" alt="Emil Hørning" className="w-full h-full object-cover" />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-primary">Emil Hørning</h3>
                  <p className="text-muted-foreground">Head of hackers @ Defend Denmark</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center mr-20">
                <div className="relative pl-4 border-l-2 border-primary/30">
                  <div className="text-4xl text-primary/40 font-serif absolute -top-2 -left-1">"</div>
                  <blockquote className="text-lg leading-relaxed text-foreground italic pl-6 px-[23px] mx-0">
                    {t('about.founder.quote')}
                  </blockquote>
                  <div className="text-4xl text-primary/40 font-serif absolute -bottom-4 right-0">"</div>
                </div>
              </div>
            </div>
            
            {/* Second row - Three cards with background */}
            <div className="lg:col-span-3 bg-muted/30 rounded-lg p-6 mx-4">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t('about.prelaunch.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('about.prelaunch.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t('about.hackers.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('about.hackers.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t('about.vision.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t('about.vision.description')}
                </CardDescription>
              </CardContent>
            </Card>
              </div>
            </div>
          </div>

          {/* Security Researchers Carousel */}
          <SecurityResearchersCarousel />

          {/* Join Discord Section */}
          <div className="container mx-auto px-4 py-12 mb-16">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">{t('about.discord.title')}</h3>
                <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                  {t('about.discord.description')}
                </p>
                <a 
                  href="https://discord.gg/cCEpqEYDdG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  {t('about.discord.button')}
                </a>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </div>;
};
export default About;