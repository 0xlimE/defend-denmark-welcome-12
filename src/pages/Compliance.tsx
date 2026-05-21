import { Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Seo } from "@/components/seo";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Landmark,
  Network,
  Cpu,
  Bug,
  ChevronDown,
  FileText,
  Handshake,
  CalendarDays,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Compliance = () => {
  const { t, language } = useLanguage();

  const seoTitle =
    language === 'da'
      ? 'Bug Bounty for Compliance — DORA, NIS2, CRA | Defend Denmark'
      : 'Bug Bounty for Compliance — DORA, NIS2, CRA | Defend Denmark';
  const seoDescription =
    language === 'da'
      ? 'Defend Denmark leverer kontinuerlig sikkerhedstest og koordineret offentliggørelse af sårbarheder, der mapper til DORA, NIS2 og Cyber Resilience Act.'
      : 'Defend Denmark provides continuous security testing and coordinated vulnerability disclosure mapped to DORA, NIS2, and the Cyber Resilience Act.';

  const frameworks = [
    {
      to: '/compliance/dora',
      icon: <Landmark className="h-8 w-8" aria-hidden="true" />,
      title: t('compliance.hub.dora.title'),
      full: t('compliance.hub.dora.full'),
      summary: t('compliance.hub.dora.summary'),
      cta: t('compliance.hub.dora.cta'),
    },
    {
      to: '/compliance/nis2',
      icon: <Network className="h-8 w-8" aria-hidden="true" />,
      title: t('compliance.hub.nis2.title'),
      full: t('compliance.hub.nis2.full'),
      summary: t('compliance.hub.nis2.summary'),
      cta: t('compliance.hub.nis2.cta'),
    },
    {
      to: '/compliance/cra',
      icon: <Cpu className="h-8 w-8" aria-hidden="true" />,
      title: t('compliance.hub.cra.title'),
      full: t('compliance.hub.cra.full'),
      summary: t('compliance.hub.cra.summary'),
      cta: t('compliance.hub.cra.cta'),
    },
  ];

  return (
    <div className="min-h-screen bg-muted">
      <Seo title={seoTitle} description={seoDescription} path="/compliance" />
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        <main className="pt-16">
          <PageHero
            title={t('compliance.hub.title')}
            subtitle={t('compliance.hub.subtitle')}
            image={{
              src: "/site-uploads/COMPLIANCE.png",
              alt: "Bug Bounty for Compliance — DORA, NIS2, CRA",
              maxHeight: "max-h-60",
            }}
          />

          {/* Intro */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <p className="text-lg md:text-xl text-blue/70 leading-relaxed">
                {t('compliance.hub.intro')}
              </p>
            </div>
          </section>

          {/* Framework selector */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue">
                  {t('compliance.hub.frameworks.title')}
                </h2>
                <p className="text-lg text-blue/70 max-w-3xl mx-auto leading-relaxed">
                  {t('compliance.hub.frameworks.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {frameworks.map((fw) => (
                  <Link
                    key={fw.to}
                    to={fw.to}
                    className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-blue/20 hover:border-primary/40 group-hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {fw.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-blue">
                              {fw.title}
                            </CardTitle>
                            <p className="text-sm text-blue/60 mt-1">{fw.full}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full">
                        <p className="text-blue/70 leading-relaxed flex-grow">
                          {fw.summary}
                        </p>
                        <div className="mt-6 inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                          {fw.cta}
                          <ArrowRight
                            className="ml-2 h-4 w-4"
                            aria-hidden="true"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Hub CTA */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <Card className="bg-primary text-primary-foreground shadow-elegant border-0">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {t('compliance.hub.cta.title')}
                  </h2>
                  <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                    {t('compliance.hub.cta.subtitle')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          size="lg"
                          variant="secondary"
                          className="h-14 text-base px-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                        >
                          <Bug className="mr-2 h-5 w-5" aria-hidden="true" />
                          <span className="truncate">{t('compliance.cta.examples')}</span>
                          <ChevronDown className="ml-2 h-4 w-4 opacity-70" aria-hidden="true" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-72" align="center">
                        <DropdownMenuLabel>
                          {t('compliance.cta.examples.label')}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <a
                            href="/site-uploads/Defend%20Denmark%20-%20Demo%20Report%201%20-%20IDOR.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-primary" aria-hidden="true" />
                            <span className="flex-1">{t('compliance.cta.examples.idor')}</span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a
                            href="/site-uploads/Defend%20Denmark%20-%20Demo%20Report%202%20-%20BXSS.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-primary" aria-hidden="true" />
                            <span className="flex-1">{t('compliance.cta.examples.bxss')}</span>
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a
                            href="/site-uploads/Defend%20Denmark%20-%20Demo%20Report%203%20-%20RCE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-primary" aria-hidden="true" />
                            <span className="flex-1">{t('compliance.cta.examples.rce')}</span>
                          </a>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-14 text-base px-4 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
                    >
                      <a
                        href="/site-uploads/DK_Defenders_Agreement_May'26.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Handshake className="mr-2 h-5 w-5" aria-hidden="true" />
                        <span className="truncate">{t('compliance.cta.agreement')}</span>
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="h-14 text-base px-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                    >
                      <a
                        href="https://onboarding.defenddenmark.dk/"
                        rel="noopener noreferrer"
                      >
                        <CalendarDays className="mr-2 h-5 w-5" aria-hidden="true" />
                        <span className="truncate">{t('compliance.hub.cta.button')}</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Compliance;
