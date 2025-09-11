import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Search, FileText, CheckCircle, DollarSign, Trophy, Building, Clock, HeadphonesIcon, Gamepad2, Shield } from "lucide-react";
const Researchers = () => {
  const {
    t
  } = useLanguage();
  const steps = [{
    number: "1",
    icon: <UserPlus className="h-8 w-8" />,
    title: t('researchers.step1.title'),
    description: t('researchers.step1.desc')
  }, {
    number: "2",
    icon: <Search className="h-8 w-8" />,
    title: t('researchers.step2.title'),
    description: t('researchers.step2.desc')
  }, {
    number: "3",
    icon: <FileText className="h-8 w-8" />,
    title: t('researchers.step3.title'),
    description: t('researchers.step3.desc')
  }, {
    number: "4",
    icon: <CheckCircle className="h-8 w-8" />,
    title: t('researchers.step4.title'),
    description: t('researchers.step4.desc')
  }, {
    number: "5",
    icon: <DollarSign className="h-8 w-8" />,
    title: t('researchers.step5.title'),
    description: t('researchers.step5.desc')
  }];
  const benefits = [{
    icon: <Trophy className="h-8 w-8" />,
    title: t('researchers.benefit1.title'),
    description: t('researchers.benefit1.desc')
  }, {
    icon: <Building className="h-8 w-8" />,
    title: t('researchers.benefit2.title'),
    description: t('researchers.benefit2.desc')
  }, {
    icon: <Clock className="h-8 w-8" />,
    title: t('researchers.benefit3.title'),
    description: t('researchers.benefit3.desc')
  }, {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: t('researchers.benefit4.title'),
    description: t('researchers.benefit4.desc')
  }, {
    icon: <Gamepad2 className="h-8 w-8" />,
    title: t('researchers.benefit5.title'),
    description: t('researchers.benefit5.desc')
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: t('researchers.benefit6.title'),
    description: t('researchers.benefit6.desc')
  }];
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
                    {t('researchers.title')}
                  </h1>
                  <p className="text-xl md:text-2xl text-blue/80 mb-8 leading-relaxed">
                    {t('researchers.subtitle')}
                  </p>
                </div>
                <div className="hidden xl:flex items-end justify-center">
                  <img src="/lovable-uploads/dd6e047f-495e-4ecf-aca6-94f403d2730b.png" alt="Ethical hacker researcher working on laptop" className="max-w-full h-auto block" />
                </div>
              </div>
            </div>
          </section>

          {/* How to Earn Money Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-blue">
                  {t('researchers.howToEarn')}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {steps.map((step, index) => <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-blue/20 hover:border-blue/40 bg-blue backdrop-blur-sm">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <div className="flex justify-center mb-4">
                        
                      </div>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-background/20 text-background">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-background">
                        {step.title}
                      </h3>
                      <p className="text-background/70 text-sm leading-relaxed flex-grow">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {benefits.map((benefit, index) => <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
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
                  </Card>)}
              </div>

              {/* Requirements Section */}
              <div className="max-w-2xl mx-auto">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-2xl text-blue">
                        {t('researchers.requirements.title')}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue/70">{t('researchers.requirements.citizen')}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue/70">{t('researchers.requirements.agreement')}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue/70">{t('researchers.requirements.record')}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue/70">{t('researchers.requirements.disclosure')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>;
};
export default Researchers;