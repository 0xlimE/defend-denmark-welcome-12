import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
export const CommunityFund = () => {
  const {
    t
  } = useLanguage();
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            {t('fund.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-blue mb-6">
            {t('fund.title')}
          </h2>
          <p className="text-xl text-blue/70 max-w-3xl mx-auto">
            {t('fund.subtitle')}
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-blue/70 leading-relaxed">
              <p>{t('fund.intro.desc1')}</p>
              <p>{t('fund.intro.desc2')}</p>
              <p>{t('fund.intro.desc3')}</p>
            </div>
            <div className="lg:order-first">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img src="/site-uploads/f031df16-47bf-4398-ba2c-61bce177c222.png" alt="Danish flag waving against blue sky representing Denmark's commitment to cybersecurity" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Community Fund Flowchart Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-blue mb-6 text-center">
            {t('fund.howItWorks')}
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-primary/20 flex items-center justify-center">
              <img
          src="/site-uploads/flowchart_bordered.png"
          alt="Community Fund Flowchart showing the process from defenders reporting vulnerabilities to beneficiaries receiving payments"
          className="max-w-full w-full h-auto rounded-md shadow-lg"
          style={{ objectFit: "contain" }}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-blue/70 text-sm max-w-xl mx-auto">
          {t('fund.flowchartDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Activate Expertise Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-blue mb-6 text-center">
            {t('fund.activate.title')}
          </h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-blue/70 leading-relaxed">
              <p>{t('fund.activate.desc1')}</p>
              <p>{t('fund.activate.desc2')}</p>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/site-uploads/kirke.png" alt="Historic Danish church with green copper dome showcasing Danish architectural heritage" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Responsible Disclosure Section */}
        

        {/* Structure of the Fund Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-blue mb-6 text-center">
            {t('fund.structure.title')}
          </h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-blue/70 leading-relaxed">
              <p>{t('fund.structure.desc1')}</p>
              <p>{t('fund.structure.desc2')}</p>
              <p>{t('fund.structure.desc3')}</p>
              <p>{t('fund.structure.desc4')}</p>
            </div>
            <div className="lg:order-first aspect-[4:5] rounded-lg overflow-hidden">
              <img src="/site-uploads/slot.jpeg" alt="Historic Danish castle with red brick architecture and green copper domes representing institutional strength" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue mb-2">
                    {t('fund.collab.title')}
                  </h3>
                  <p className="text-blue/70">
                    {t('fund.collab.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue mb-2">
                    {t('fund.nonprofit.title')}
                  </h3>
                  <p className="text-blue/70">
                    {t('fund.nonprofit.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue mb-2">
                    {t('fund.impact.title')}
                  </h3>
                  <p className="text-blue/70">
                    {t('fund.impact.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue mb-2">{t('fund.fundTitle')}</h3>
                  <p className="text-blue/70 text-sm">
                    {t('fund.fundDesc')}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-primary mb-1">—</div>
                    <div className="text-sm text-blue/70">{t('fund.companyContrib')}</div>
                    <div className="text-xs text-blue/70 mt-1">{t('fund.prelaunch')}</div>
                  </div>

                  <div className="p-4 bg-background rounded-lg border border-border/50">
                    <div className="text-2xl font-bold text-primary mb-1">—</div>
                    <div className="text-sm text-blue/70">{t('fund.expertContrib')}</div>
                    <div className="text-xs text-blue/70 mt-1">{t('fund.prelaunch')}</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-background/50 rounded-lg">
                  <p className="text-xs text-blue/70">
                    {t('fund.launchText')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};