
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

export const PreventiveMeasuresCarousel = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  // Steps data (excluding the preventive measures intro)
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

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground)) 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            {t('steps.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue">
            {t('steps.title')}
          </h2>
          <p className="text-lg text-blue/70 max-w-2xl mx-auto">
            {t('steps.subtitle')}
          </p>
        </div>

        <div className="relative flex items-center justify-center min-h-[300px]">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mx-auto items-center">
            {/* Left Content - Always show preventive measures */}
            <div className="lg:col-span-1 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue">
                {t('preventive.title')}
              </h3>
              <p className="text-blue/70 leading-relaxed">
                {t('preventive.description')}
              </p>
            </div>

            {/* Right Content - Current step card with navigation */}
            <div className="lg:col-span-2 relative">
              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevStep}
                className="absolute left-0 top-1/2 -translate-y-1/2  z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/80 hover:bg-muted text-blue border border-border shadow-lg"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextStep}
                className="absolute right-0 top-1/2 -translate-y-1/2  z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/80 hover:bg-muted text-blue border border-border shadow-lg"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </Button>

              {/* Current Step Card */}
              <div className="flex justify-center">
                <Card className="w-full max-w-md transition-all duration-300 shadow-lg border-primary border-4 bg-background">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto mb-4">
                      {steps[currentStep].number}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-blue mb-3">
                      {steps[currentStep].title}
                    </h3>
                    
                    <p className="text-blue/70 leading-relaxed">
                      {steps[currentStep].description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={cn(
                "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200",
                index === currentStep 
                  ? "bg-primary" 
                  : "bg-muted hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
