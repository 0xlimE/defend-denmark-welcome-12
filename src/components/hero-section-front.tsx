import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Link } from "react-router-dom";
export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const {
    t
  } = useLanguage();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup form submission
    console.log("Email signup:", email);
    setEmail("");
  };
  return <section className="relative h-[500px] md:h-[600px] flex items-center px-4 bg-background overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-7xl h-full">
        <div className="grid min-[850px]:grid-cols-2 gap-8 xl:gap-12 items-center h-full">
          {/* Left Content */}
          <div className="text-left space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue">
              {t('hero.title')}
              <br />
              <span className="text-blue/90">
                {t('hero.titleAccent')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-blue/70 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 text-base sm:text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                <a href="https://forms.cloud.microsoft/e/PafMKprbP9" target="_blank" rel="noopener noreferrer">
                  {t('hero.bookDemo')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 text-base sm:text-lg px-8 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold">
                <Link to="/about">
                  {t('hero.learnMore')}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Glitch Logo - Responsive to container */}
          <div className="hidden min-[850px]:flex justify-center items-center">
            <div className="glitch-container w-full max-w-xs aspect-square" style={{
            '--logo-url': `url('/site-uploads/4343b510-aec9-41a6-a97c-1f57d2dab0e1.png')`
          } as React.CSSProperties}>
              <div className="glitch-image w-full h-full" style={{
              backgroundImage: `url('/site-uploads/4343b510-aec9-41a6-a97c-1f57d2dab0e1.png')`
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};