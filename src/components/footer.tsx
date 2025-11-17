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
            <a href="https://discord.gg/cCEpqEYDdG" target="_blank" rel="noopener noreferrer" className="text-blue/70 hover:text-primary transition-colors" aria-label="Discord">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>;
};