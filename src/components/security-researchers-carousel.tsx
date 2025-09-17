import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Shield, CheckCircle, FileText, User, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface Vulnerability {
  title: string;
  reward: string;
  industry: string;
  cvss: string;
  severity: string;
  acceptedAs: string;
}

interface Researcher {
  id: string;
  name: string;
  avatar: string;
  profession: string;
  specialization: string;
  yearsExperience: number;
  verified: boolean;
  signedAgreement: boolean;
  signedNDA: boolean;
  vulnerabilities: Vulnerability[];
}

const mockResearchers: Researcher[] = [
  {
    id: "1",
    name: "HestenettetDK",
    avatar: "/lovable-uploads/924a1977-80c8-4f10-8f0c-e328ed4bc715.png",
    profession: "Penetration tester in Critical Infrastructure",
    specialization: "Mobile Apps & Kubernetes Security",
    yearsExperience: 5,
    verified: true,
    signedAgreement: true,
    signedNDA: true,
    vulnerabilities: [
      {
        title: "IDOR leads to cross tenant data leakage",
        reward: "8,000 DKK",
        industry: "AI Platform",
        cvss: "8.2",
        severity: "High",
        acceptedAs: "High"
      },
      {
        title: "Android intent redirection leading to RCE in redacted",
        reward: "N/A",
        industry: "N/A",
        cvss: "9.6",
        severity: "Critical",
        acceptedAs: "Critical"
      },
      {
        title: "Overly permissive docker container leads to kubernetes cluster takeover",
        reward: "N/A",
        industry: "Telecom",
        cvss: "10.0",
        severity: "Critical",
        acceptedAs: "Critical"
      }
    ]
  },
  {
    id: "2",
    name: "Cave",
    avatar: "/lovable-uploads/81b4b07f-c99c-4cd7-aaff-59e45853092c.png",
    profession: "Student Cybersecurity Researcher",
    specialization: "Hardware Devices & Smartphones",
    yearsExperience: 4,
    verified: true,
    signedAgreement: true,
    signedNDA: true,
    vulnerabilities: [
      {
        title: "Caller-ID Spoofing from User Equipment side",
        reward: "N/A",
        industry: "Telecom",
        cvss: "7.5",
        severity: "High",
        acceptedAs: "Critical"
      },
      {
        title: "JSON-RPC to RCE in Media Server",
        reward: "N/A",
        industry: "Open Source Project",
        cvss: "10.0",
        severity: "Critical",
        acceptedAs: "Critical"
      },
      {
        title: "Local privilege escalation in redacted smartphone",
        reward: "N/A",
        industry: "Smart Phone",
        cvss: "8.1",
        severity: "High",
        acceptedAs: "Critical"
      }
    ]
  },
  {
    id: "3",
    name: "0xlimE",
    avatar: "/lovable-uploads/7e7ce66b-abbd-40c3-9be2-aaa7bff36755.png",
    profession: "Bug Bounty Hunter Manager",
    specialization: "Access Control Issues",
    yearsExperience: 7,
    verified: true,
    signedAgreement: true,
    signedNDA: true,
    vulnerabilities: [
      {
        title: "Delete any marketplace listing",
        reward: "~10,000 DKK",
        industry: "Marketplaces",
        cvss: "7.5",
        severity: "High",
        acceptedAs: "High"
      },
      {
        title: "IDOR leads to mass leak of customer claims documents",
        reward: "25,000 DKK",
        industry: "Insurance industry",
        cvss: "7.5",
        severity: "High",
        acceptedAs: "Critical"
      },
      {
        title: "Weak authentication leads to mass account take over",
        reward: "~21,000 DKK",
        industry: "Financial Industry",
        cvss: "9.4",
        severity: "Critical",
        acceptedAs: "Critical"
      }
    ]
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity.toLowerCase()) {
    case 'critical':
      return 'bg-red-500/20 text-red-700 border-red-300';
    case 'high':
      return 'bg-orange-500/20 text-orange-700 border-orange-300';
    case 'medium':
      return 'bg-yellow-500/20 text-yellow-700 border-yellow-300';
    default:
      return 'bg-gray-500/20 text-gray-700 border-gray-300';
  }
};

export const SecurityResearchersCarousel = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          {t('spotlight.title')}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t('spotlight.subtitle')}
        </p>
        <p className="text-sm text-muted-foreground/80 mt-2 italic">
          {t('spotlight.disclaimer')}
        </p>
      </div>

      <Carousel className="w-full max-w-8xl mx-auto">
        <CarouselContent className="-ml-4">
          {mockResearchers.map((researcher) => (
            <CarouselItem key={researcher.id} className="pl-4 md:basis-1/1 lg:basis-1/1">
              <Card className="h-full bg-gradient-to-br from-background to-muted/30 border-2">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left side - Researcher info */}
                  <div className="w-full md:w-1/2 p-6 md:border-r">
                    <div className="flex flex-col h-full">
                       <div className="relative mb-6 flex justify-center">
                        <div className="relative">
                          <img 
                            src={researcher.avatar} 
                            alt={researcher.name}
                            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20"
                          />
                          {researcher.verified && (
                            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg border-2 border-background">
                              <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <CardTitle className="text-2xl mb-3">{researcher.name}</CardTitle>
                         <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {researcher.verified && (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {t('spotlight.mitidVerified')}
                            </Badge>
                          )}
                          {researcher.signedAgreement && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              <FileText className="w-3 h-3 mr-1" />
                              {t('spotlight.agreementSigned')}
                            </Badge>
                          )}
                          {researcher.signedNDA && (
                            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                              <Shield className="w-3 h-3 mr-1" />
                              {t('spotlight.ndaSigned')}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                        <div className="space-y-4 text-sm flex-1">
                          <div className="flex items-start gap-3">
                            <User className="w-4 h-4 text-primary mt-1" />
                            <div>
                              <p className="font-medium mb-1">{t('spotlight.profession')}</p>
                              <p className="text-muted-foreground">{researcher.profession}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Award className="w-4 h-4 text-primary mt-1" />
                            <div>
                              <p className="font-medium mb-1">{t('spotlight.specialization')}</p>
                              <p className="text-muted-foreground">{researcher.specialization}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-4 h-4 text-primary mt-1" />
                            <div>
                              <p className="font-medium mb-1">{t('about.researcher.experience')}</p>
                              <p className="text-muted-foreground">{researcher.yearsExperience} {t('spotlight.experience')}</p>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  
                  {/* Right side - Vulnerability cards */}
                  <div className="w-full md:w-1/2 p-6">
                    <div className="h-full flex flex-col">
                      <h4 className="text-lg font-semibold mb-4 text-primary">
                        {t('spotlight.discoveries')}
                      </h4>
                      
                      <div className="flex-1 flex flex-col gap-4">
                        {researcher.vulnerabilities.map((vuln, index) => (
                          <Card key={index} className="bg-background/50 border hover:shadow-md transition-shadow flex-1">
                            <CardContent className="p-4 h-full flex flex-col">
                              <div className="flex justify-between items-start mb-3">
                                <h5 className="font-medium text-sm leading-tight flex-1 pr-2">
                                  "{vuln.title.includes('redacted') ? (
                                    <>
                                      {vuln.title.split('redacted')[0]}
                                      <em className="italic">redacted</em>
                                      {vuln.title.split('redacted')[1]}
                                    </>
                                  ) : vuln.title}"
                                </h5>
                                <Badge className={getSeverityColor(vuln.severity)}>
                                  {vuln.severity}
                                </Badge>
                              </div>
                              
                              <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground flex-1">
                                <div>
                                  <span className="font-medium">{t('spotlight.reward')}</span> {vuln.reward}
                                </div>
                                <div>
                                  <span className="font-medium">{t('spotlight.industry')}</span> {vuln.industry}
                                </div>
                                <div>
                                  <span className="font-medium">{t('spotlight.cvss')}</span> {vuln.cvss}
                                </div>
                                <div>
                                  <span className="font-medium">{t('spotlight.acceptedAs')}</span> {vuln.acceptedAs}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};