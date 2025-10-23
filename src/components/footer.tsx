import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const { t } = useLanguage();

  useEffect(() => {
    // Build email dynamically to avoid scrapers
    const domain = 'defenddenmark.dk';
    const user = 'info';
    const fullEmail = user + '@' + domain;
    setContactEmail(fullEmail);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };
  return <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Newsletter Signup */}
        <Card className="mb-12 bg-primary text-primary-foreground shadow-elegant">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('footer.prelaunch.title')}</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              {t('footer.prelaunch.description')}
            </p>
            <Button 
              asChild 
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-8 py-3"
            >
              <a 
                href="https://forms.cloud.microsoft/e/PafMKprbP9" 
                rel="noopener noreferrer"
              >
                {t('footer.prelaunch.button')}
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/site-uploads/4343b510-aec9-41a6-a97c-1f57d2dab0e1.png" alt="defend Denmark Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-red-500">defend Denmark</span>
            </div>
            <p className="text-blue/70 text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4 text-blue">{t('footer.platform')}</h4>
            <ul className="space-y-2 text-sm text-blue/70">
              <li><Link to="/researchers" className="hover:text-primary transition-colors">{t('footer.forResearchers')}</Link></li>
              <li><Link to="/companies" className="hover:text-primary transition-colors">{t('footer.forCompanies')}</Link></li>
              <li><Link to="/bug-bounty" className="hover:text-primary transition-colors">Bug Bounty</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-blue">{t('footer.community')}</h4>
            <ul className="space-y-2 text-sm text-blue/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('footer.about')}</Link></li>
              <li><Link to="/community-fund" className="hover:text-primary transition-colors">{t('footer.communityFund')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-blue">{t('footer.company')}</h4>
            <div className="space-y-2 text-sm text-blue/70">
              <div className="font-medium">{t('footer.companyName')}</div>
              <div>{t('footer.address1')}</div>
              <div>{t('footer.address2')}</div>
              <div>CVR: 45824578</div>
              <div className="pt-3">
                <a 
                  href={contactEmail ? `mailto:${contactEmail}` : '#'} 
                  className="hover:text-primary transition-colors"
                  onClick={(e) => {
                    if (!contactEmail) {
                      e.preventDefault();
                    }
                  }}
                >
                  {contactEmail || 'Loading...'}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-blue/70 text-sm">
              {t('footer.copyright')}
            </p>

          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="text-blue/70 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-blue/70 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <a href="https://www.linkedin.com/company/defend-denmark" target="_blank" rel="noopener noreferrer" className="text-blue/70 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};