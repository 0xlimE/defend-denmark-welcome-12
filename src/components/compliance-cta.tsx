import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bug,
  ChevronDown,
  FileText,
  Handshake,
  CalendarDays,
  Download,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/language-context";

interface ComplianceCtaProps {
  title?: string;
  subtitle?: string;
}

export const ComplianceCta = ({ title, subtitle }: ComplianceCtaProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <Card className="bg-primary text-primary-foreground shadow-elegant border-0">
          <CardContent className="p-8 md:p-12 text-center">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
            )}
            {subtitle && (
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-14 text-base px-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                <a
                  href="/site-uploads/DemoCorp_120526_1254_MonthlySecurityReport.pdf"
                  download
                >
                  <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                  <span className="truncate">{t('compliance.cta.download')}</span>
                </a>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-14 text-base px-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                  >
                    <Bug className="mr-2 h-5 w-5" aria-hidden="true" />
                    <span className="truncate">
                      {t('compliance.cta.examples')}
                    </span>
                    <ChevronDown
                      className="ml-2 h-4 w-4 opacity-70"
                      aria-hidden="true"
                    />
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
                      <FileText
                        className="mr-2 h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span className="flex-1">
                        {t('compliance.cta.examples.idor')}
                      </span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/site-uploads/Defend%20Denmark%20-%20Demo%20Report%202%20-%20BXSS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <FileText
                        className="mr-2 h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span className="flex-1">
                        {t('compliance.cta.examples.bxss')}
                      </span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/site-uploads/Defend%20Denmark%20-%20Demo%20Report%203%20-%20RCE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      <FileText
                        className="mr-2 h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span className="flex-1">
                        {t('compliance.cta.examples.rce')}
                      </span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 text-base px-6 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              >
                <a
                  href="/site-uploads/DK_Defenders_Agreement_May'26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Handshake className="mr-2 h-5 w-5" aria-hidden="true" />
                  <span className="truncate">
                    {t('compliance.cta.agreement')}
                  </span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 text-base px-6 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              >
                <a
                  href="https://onboarding.defenddenmark.dk/"
                  rel="noopener noreferrer"
                >
                  <CalendarDays className="mr-2 h-5 w-5" aria-hidden="true" />
                  <span className="truncate">
                    {t('compliance.cta.book')}
                  </span>
                </a>
              </Button>
            </div>
            <p className="text-primary-foreground/70 text-sm mt-6">
              {t('compliance.cta.note')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
