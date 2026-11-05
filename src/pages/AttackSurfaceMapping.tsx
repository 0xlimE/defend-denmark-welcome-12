import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Seo } from "@/components/seo";
import { useLanguage } from "@/contexts/language-context";
import { ASM_FORM_URL } from "@/lib/asm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  ExternalLink,
  FileText,
  HelpCircle,
  Radar,
  Send,
  Tag,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const PATH = "/attack-surface-mapping";

const SectionHeading = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 rounded-lg bg-primary/10 text-primary">
      <Icon className="h-7 w-7" aria-hidden="true" />
    </div>
    <h2 className="min-w-0 break-words hyphens-auto text-3xl md:text-4xl font-bold text-blue">{title}</h2>
  </div>
);

const FormButton = ({ label }: { label: string }) => (
  <Button
    asChild
    size="lg"
    className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
  >
    <a href={ASM_FORM_URL} target="_blank" rel="noopener noreferrer">
      {label}
      <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
    </a>
  </Button>
);

const AttackSurfaceMapping = () => {
  const { t, language } = useLanguage();

  const steps = [1, 2, 3, 4, 5, 6].map((n) => ({
    n,
    title: t(`asm.how.${n}.title`),
    body: t(`asm.how.${n}.body`),
  }));

  const tiers = [
    { key: "critical", badge: "bg-primary text-primary-foreground" },
    { key: "recommended", badge: "bg-primary/10 text-primary" },
    { key: "extended", badge: "bg-muted text-blue/70" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Attack Surface Mapping / AI Defender",
    serviceType: "Attack surface mapping",
    url: `https://defenddenmark.dk${PATH}`,
    description: t("asm.seo.description"),
    areaServed: "DK",
    provider: {
      "@type": "Organization",
      name: "Defend Denmark ApS",
      url: "https://defenddenmark.dk",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Free external attack surface mapping",
        price: "0",
        priceCurrency: "DKK",
      },
      {
        "@type": "Offer",
        name: "AI Defender test",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1000",
          priceCurrency: "DKK",
          unitText: "asset",
          valueAddedTaxIncluded: false,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-muted">
      <Seo title={t("asm.seo.title")} description={t("asm.seo.description")} path={PATH} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        {/* lang lets the browser hyphenate long Danish compounds; index.html declares lang="en". */}
        <main className="pt-16" lang={language}>
          <PageHero
            title={t("asm.hero.title")}
            subtitle={t("asm.hero.subtitle")}
            image={{
              src: "/site-uploads/4343b510-aec9-41a6-a97c-1f57d2dab0e1.png",
              alt: "Defend Denmark",
              maxHeight: "md:max-h-48 lg:max-h-56",
            }}
            imageAlign="center"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase">
                {t("asm.hero.badge")}
              </span>
              <div>
                <FormButton label={t("asm.hero.cta")} />
              </div>
            </div>
          </PageHero>

          {/* What it is: free mapping, optional paid test */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <SectionHeading icon={Radar} title={t("asm.what.title")} />
              <p className="text-lg text-blue/70 leading-relaxed mb-4">{t("asm.what.body1")}</p>
              <p className="text-lg text-blue/70 leading-relaxed mb-4">{t("asm.what.body2")}</p>
              <p className="text-lg text-blue/70 leading-relaxed">{t("asm.what.body3")}</p>
            </div>
          </section>

          {/* How the mapping works */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <SectionHeading icon={Workflow} title={t("asm.how.title")} />
              <p className="text-lg text-blue/70 leading-relaxed mb-10">{t("asm.how.intro")}</p>
              <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step) => (
                  <li key={step.n}>
                    <Card className="h-full border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                            {step.n}
                          </span>
                          <CardTitle className="text-lg text-blue leading-snug">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue/70 leading-relaxed">{step.body}</p>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* What you get: step 1 free, step 2 optional paid */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <SectionHeading icon={FileText} title={t("asm.get.title")} />
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {(["free", "paid"] as const).map((kind) => {
                  const paid = kind === "paid";
                  const count = paid ? 4 : 5;
                  return (
                    <Card
                      key={kind}
                      className={`h-full ${paid ? "border-border/50" : "border-2 border-primary shadow-lg"}`}
                    >
                      <CardHeader>
                        <span
                          className={`inline-flex w-fit items-center px-2.5 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-2 ${
                            paid ? "bg-muted text-blue/70" : "bg-primary text-primary-foreground"
                          }`}
                        >
                          {t(`asm.get.${kind}.tag`)}
                        </span>
                        <CardTitle className="text-xl text-blue">{t(`asm.get.${kind}.title`)}</CardTitle>
                        <p className="text-2xl font-bold text-primary pt-1">{t(`asm.get.${kind}.price`)}</p>
                      </CardHeader>
                      <CardContent>
                        {paid && (
                          <p className="text-blue/80 leading-relaxed mb-4">{t("asm.get.paid.intro")}</p>
                        )}
                        <ul className="space-y-3">
                          {Array.from({ length: count }, (_, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="text-blue/80 leading-relaxed">{t(`asm.get.${kind}.${i + 1}`)}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Pricing for the paid test */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <SectionHeading icon={Tag} title={t("asm.pricing.title")} />
              <p className="text-lg text-blue/70 leading-relaxed">{t("asm.pricing.intro")}</p>
              <Card className="border-border/50 mt-8 mb-10">
                <CardContent className="p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                  <div>
                    <p className="text-4xl md:text-5xl font-bold text-primary">{t("asm.pricing.price")}</p>
                    <p className="text-sm text-blue/60 mt-2 whitespace-nowrap">{t("asm.pricing.unit")}</p>
                  </div>
                  <p className="text-blue/80 leading-relaxed">{t("asm.pricing.assetDef")}</p>
                </CardContent>
              </Card>

              <p className="text-lg text-blue/70 leading-relaxed mb-6">{t("asm.pricing.tiersIntro")}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {tiers.map((tier) => (
                  <Card key={tier.key} className="h-full border-border/50">
                    <CardHeader className="pb-3">
                      <span
                        className={`inline-flex w-fit items-center px-2.5 py-1 rounded-md text-xs font-bold tracking-wide uppercase ${tier.badge}`}
                      >
                        {t(`asm.pricing.${tier.key}.title`)}
                      </span>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue/70 leading-relaxed">{t(`asm.pricing.${tier.key}.body`)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-blue/70 leading-relaxed mt-8">{t("asm.pricing.scale")}</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <SectionHeading icon={HelpCircle} title={t("asm.faq.title")} />
              <Accordion type="single" collapsible className="mt-8">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <AccordionItem key={n} value={`faq-${n}`}>
                    <AccordionTrigger className="text-left text-blue font-semibold text-base">
                      {t(`asm.faq.${n}.q`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-blue/70 leading-relaxed text-base">
                      {t(`asm.faq.${n}.a`)}
                      {n === 6 && (
                        <>
                          {" "}
                          <Link to="/privacy-policy" className="text-primary hover:underline">
                            {t("asm.faq.6.link")}
                          </Link>
                          .
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Call to action: external Microsoft Form */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <SectionHeading icon={Send} title={t("asm.cta.title")} />
              <p className="text-lg text-blue/70 leading-relaxed mb-8 max-w-3xl">{t("asm.cta.intro")}</p>
              <FormButton label={t("asm.cta.button")} />
              <p className="text-sm text-blue/60 mt-4">{t("asm.cta.note")}</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AttackSurfaceMapping;
