import { useLanguage } from "@/contexts/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SecurityResearchersCarousel } from "@/components/security-researchers-carousel";
const About = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-muted">
      <div className="max-w-7xl mx-auto bg-background shadow-lg">
        <Navbar />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="pt-12 md:pt-16 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(30deg, hsl(var(--primary) / 0.1) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary) / 0.1) 87.5%, hsl(var(--primary) / 0.1)),
                                 linear-gradient(150deg, hsl(var(--primary) / 0.1) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary) / 0.1) 87.5%, hsl(var(--primary) / 0.1))`,
                backgroundSize: '24px 24px'
              }}></div>
            </div>
            <div className="container mx-auto px-4 max-w-6xl relative h-full">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full">
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue">
                    {t('about.hero.title')}
                  </h1>
                  <p className="text-xl md:text-2xl text-blue/80 mb-8 leading-relaxed">
                    {t('about.hero.subtitle')}
                  </p>
                </div>
                <div className="hidden xl:flex items-end justify-center">
                  <img 
                    src="/src/assets/about-hero.jpg" 
                    alt="About our team and mission"
                    className="max-w-full h-auto block rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* First row - Mission card with Emil's picture */}
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-2 items-center">
              <div className="flex flex-col justify-center md:ml-8">
                <div className="relative pl-4 border-l-2 border-primary/30">
                  <div className="text-4xl text-primary/40 font-serif absolute -top-2 -left-1">"</div>
                  <blockquote className="text-lg leading-relaxed text-foreground italic pl-6 px-[23px] mx-0">
                    {t('about.founder.quote')}
                  </blockquote>
                  <div className="text-4xl text-primary/40 font-serif absolute -bottom-4 right-0">"</div>
                </div>
              </div>
              
              {/* Emil Hørning Picture */}
              <div className="flex flex-col items-center mx-[90px]">
                <div className="w-80 h-96 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20">
                  <img src="/lovable-uploads/b5eca1c5-8c12-4758-a46e-df6fe282d5b3.png" alt="Emil Hørning" className="w-full h-full object-cover" />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-primary">Emil Hørning</h3>
                  <p className="text-muted-foreground">Head of hackers @ Defend Denmark</p>
                </div>
              </div>
            </div>
            
            {/* Second row - Two cards */}
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

          {/* Security Researchers Carousel */}
          <SecurityResearchersCarousel />
        </main>

        <Footer />
      </div>
    </div>;
};
export default About;