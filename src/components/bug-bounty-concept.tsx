import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { Shield, Users, Award, Search } from "lucide-react";

export const BugBountyConcept = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: t('concept.feature1.title'),
      description: t('concept.feature1.desc')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('concept.feature2.title'),
      description: t('concept.feature2.desc')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('concept.feature3.title'),
      description: t('concept.feature3.desc')
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('concept.feature4.title'),
      description: t('concept.feature4.desc')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, hsl(var(--blue) / 0.1) 1px, transparent 1px),
                           linear-gradient(-45deg, hsl(var(--blue) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue border-blue/30 bg-blue/10">
            {t('concept.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-blue">
            {t('concept.title')}
          </h2>
          <p className="text-lg md:text-xl text-blue/80 max-w-3xl mx-auto leading-relaxed">
            {t('concept.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-blue/20 hover:border-blue/40 bg-blue backdrop-blur-sm">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-background/20 text-background">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-background">
                  {feature.title}
                </h3>
                <p className="text-background/70 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue rounded-2xl p-8 md:p-12 border border-blue/20 shadow-lg relative overflow-hidden">
          {/* Blue accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue/15 to-blue/8 rounded-2xl"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-background">
              {t('concept.why.title')}
            </h3>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-background/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{t('concept.why.benefit1')}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-background/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{t('concept.why.benefit2')}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-background/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{t('concept.why.benefit3')}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-background/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{t('concept.why.benefit4')}</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-background/20 rounded-full mb-4 border border-background/30">
              <Shield className="h-16 w-16 text-background" />
            </div>
            <p className="text-lg font-semibold text-background">
              {t('concept.why.tagline')}
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};