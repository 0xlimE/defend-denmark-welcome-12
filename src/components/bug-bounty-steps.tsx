import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

export const BugBountySteps = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      title: t('steps.1.title'),
      description: t('steps.1.desc')
    },
    {
      number: "2", 
      title: t('steps.2.title'),
      description: t('steps.2.desc')
    },
    {
      number: "3",
      title: t('steps.3.title'),
      description: t('steps.3.desc')
    },
    {
      number: "4",
      title: t('steps.4.title'),
      description: t('steps.4.desc')
    },
    {
      number: "5",
      title: t('steps.5.title'),
      description: t('steps.5.desc')
    },
    {
      number: "6",
      title: t('steps.6.title'),
      description: t('steps.6.desc')
    },
    {
      number: "7",
      title: t('steps.7.title'),
      description: t('steps.7.desc')
    },
    {
      number: "8",
      title: t('steps.8.title'),
      description: t('steps.8.desc')
    }
  ];
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            {t('steps.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-blue mb-6">
            {t('steps.title')}
          </h2>
          <p className="text-xl text-blue/70 max-w-3xl mx-auto">
            {t('steps.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-3">
                    {step.number}
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-primary to-transparent"></div>
                </div>
                
                <h3 className="text-lg font-semibold text-blue mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-blue/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};