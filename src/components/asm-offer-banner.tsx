import { Link } from "react-router-dom";
import { ExternalLink, Radar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { ASM_FORM_URL } from "@/lib/asm";

export const AsmOfferBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardContent className="p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase mb-4">
                <Radar className="h-3.5 w-3.5" aria-hidden="true" />
                {t("asm.banner.badge")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-blue mb-3">
                {t("asm.banner.title")}
              </h2>
              <p className="text-blue/70 leading-relaxed">{t("asm.banner.body")}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                <a href={ASM_FORM_URL} target="_blank" rel="noopener noreferrer">
                  {t("asm.banner.cta")}
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                <Link to="/attack-surface-mapping">{t("asm.banner.more")}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
