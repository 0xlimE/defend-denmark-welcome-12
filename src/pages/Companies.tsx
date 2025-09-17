import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Clock, CheckCircle, Zap, HeadphonesIcon } from "lucide-react";

const Companies = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      title: t('companies.step1.title'),
      description: t('companies.step1.desc')
    },
    {
      number: "2",
      title: t('companies.step2.title'),
      description: t('companies.step2.desc')
    },
    {
      number: "3",
      title: t('companies.step3.title'),
      description: t('companies.step3.desc')
    },
    {
      number: "4",
      title: t('companies.step4.title'),
      description: t('companies.step4.desc')
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('companies.benefit1.title'),
      description: t('companies.benefit1.desc')
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: t('companies.benefit2.title'),
      description: t('companies.benefit2.desc')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('companies.benefit3.title'),
      description: t('companies.benefit3.desc')
    },
    {
      icon: <Badge className="h-8 w-8" />,
      title: t('companies.benefit4.title'),
      description: t('companies.benefit4.desc')
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('companies.benefit5.title'),
      description: t('companies.benefit5.desc')
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: t('companies.benefit6.title'),
      description: t('companies.benefit6.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        <main className="pt-16">
          <PageHero
            title={t('companies.title')}
            subtitle={t('companies.subtitle')}
            image={{
              src: "/lovable-uploads/3ec51c56-a4c5-4f45-bc80-703b55d3c1ed.png",
              alt: "City skyline with security shield representing company protection",
              maxHeight: "max-h-58"
            }}
          />

          {/* How It Works Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-blue">
                  {t('companies.howItWorks')}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-blue/20 hover:border-blue/40 bg-blue backdrop-blur-sm">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center text-background font-bold text-xl">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-background">
                        {step.title}
                      </h3>
                      <p className="text-background/70 text-sm leading-relaxed flex-grow">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {benefit.icon}
                        </div>
                        <CardTitle className="text-lg text-blue">
                          {benefit.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Companies;