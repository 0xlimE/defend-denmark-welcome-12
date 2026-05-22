import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Seo } from "@/components/seo";
import { ComplianceCta } from "@/components/compliance-cta";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  FileCheck,
  MapPin,
  CheckCircle,
  ScrollText,
  ExternalLink,
} from "lucide-react";

export interface FrameworkRequirement {
  article: string;
  articleUrl?: string;
  title: string;
  body: string;
}

export interface FrameworkCoverage {
  article: string;
  articleUrl?: string;
  how: string;
}

export interface ComplianceFrameworkPageProps {
  seoTitle: string;
  seoDescription: string;
  path: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: { src: string; alt: string; maxHeight?: string };
  whatTitle: string;
  whatBody: string;
  requiresIntro: string;
  requirements: FrameworkRequirement[];
  coverageIntro: string;
  coverage: FrameworkCoverage[];
  evidence: string[];
  localTitle: string;
  localBody: string;
}

export const ComplianceFrameworkPage = ({
  seoTitle,
  seoDescription,
  path,
  heroTitle,
  heroSubtitle,
  heroImage,
  whatTitle,
  whatBody,
  requiresIntro,
  requirements,
  coverageIntro,
  coverage,
  evidence,
  localTitle,
  localBody,
}: ComplianceFrameworkPageProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-muted">
      <Seo title={seoTitle} description={seoDescription} path={path} />
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        <main className="pt-16">
          <PageHero title={heroTitle} subtitle={heroSubtitle} image={heroImage} />

          {/* What it is */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-blue">
                {whatTitle}
              </h2>
              <p className="text-lg text-blue/70 leading-relaxed">{whatBody}</p>
            </div>
          </section>

          {/* What it requires */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <ScrollText className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue">
                  {t('compliance.section.requires')}
                </h2>
              </div>
              <p className="text-lg text-blue/70 leading-relaxed mb-10">
                {requiresIntro}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {requirements.map((req, idx) => (
                  <Card
                    key={idx}
                    className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                  >
                    <CardHeader>
                      {req.articleUrl ? (
                        <a
                          href={req.articleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase w-fit mb-2 hover:bg-primary/20 transition-colors"
                        >
                          {req.article}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase w-fit mb-2">
                          {req.article}
                        </div>
                      )}
                      <CardTitle className="text-lg text-blue leading-snug">
                        {req.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue/70 leading-relaxed">{req.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Where Defend Denmark fits — article-to-deliverable mapping */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue">
                  {t('compliance.section.fits')}
                </h2>
              </div>
              <p className="text-lg text-blue/70 leading-relaxed mb-10">
                {coverageIntro}
              </p>

              <div className="rounded-lg border border-border/60 overflow-hidden bg-background">
                {/* Header row — desktop only */}
                <div className="hidden md:grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 px-6 py-4 bg-muted/60 border-b border-border/60 text-xs font-bold tracking-wide uppercase text-blue/60">
                  <div>{t('compliance.coverage.col.article')}</div>
                  <div>{t('compliance.coverage.col.deliverable')}</div>
                </div>
                <ul className="divide-y divide-border/60">
                  {coverage.map((row, idx) => (
                    <li
                      key={idx}
                      className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-3 md:gap-6 px-6 py-5 md:py-6 hover:bg-primary/[0.03] transition-colors"
                    >
                      <div className="flex items-start">
                        <span className="inline-flex items-start gap-2 leading-snug">
                          <CheckCircle
                            className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          {row.articleUrl ? (
                            <a
                              href={row.articleUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue font-semibold hover:text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-colors inline-flex items-baseline gap-1"
                            >
                              <span>{row.article}</span>
                              <ExternalLink
                                className="h-3.5 w-3.5 self-center flex-shrink-0"
                                aria-hidden="true"
                              />
                            </a>
                          ) : (
                            <span className="text-blue font-semibold">
                              {row.article}
                            </span>
                          )}
                        </span>
                      </div>
                      <p className="text-blue/80 leading-relaxed pl-7 md:pl-0">
                        {row.how}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Evidence we deliver */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FileCheck className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue">
                  {t('compliance.section.evidence')}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {evidence.map((item, idx) => (
                  <Card
                    key={idx}
                    className="h-full hover:shadow-lg transition-all duration-300 border-border/50"
                  >
                    <CardContent className="p-6 flex items-start gap-3">
                      <CheckCircle
                        className="h-5 w-5 text-primary flex-shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span className="text-blue/80 leading-relaxed">{item}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Local context */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue">
                  {t('compliance.section.local')} — {localTitle}
                </h2>
              </div>
              <p className="text-lg text-blue/70 leading-relaxed">{localBody}</p>
            </div>
          </section>

          <ComplianceCta
            title={t('compliance.hub.cta.title')}
            subtitle={t('compliance.hub.cta.subtitle')}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};
