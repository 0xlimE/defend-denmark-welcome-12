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
              src: "/lovable-uploads/aboutreal.png",
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
                  <img src="/lovable-uploads/b5eca1c5-8c12-4758-a46e-df6fe282d5b3.png" alt="Emil Hørning" className="w-full h-full object-cover" />
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
        </main>

        <Footer />
      </div>
    </div>;
};
export default About;