import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'da';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.companies': 'For Companies',
    'nav.bugBounty': 'Bug Bounty Platform',
    'nav.communityFund': 'Community Fund',
    'nav.about': 'About',
    
    // Hero Section
    'hero.title': 'A safer digital',
    'hero.titleAccent': 'Denmark',
    'hero.subtitle': 'Defend Denmark is a progressive cyber security company specialising in proactive security measures. We have the country\'s leading ethical hackers which simulate the methods of hackers and thus find security vulnerabilities in software systems of companies and organisations.',
    'hero.bookDemo': 'Book a Demo',
    'hero.learnMore': 'Learn More',
    
    // Preventive Measures
    'preventive.title': 'Preventive measures',
    'preventive.description': 'Our ethical hackers simulate real attacks and find new vulnerabilities in the custom-built software infrastructures that our customers use. By proactively identifying and addressing these issues, we help our customers strengthen their overall security posture and reduce the risk of cyber threats.',
    
    // Bug Bounty Page
    'bugBounty.hero.title': 'Proactive cybersecurity',
    'bugBounty.hero.subtitle': 'Strengthen your digital posture with the best Danish ethical hackers',
    'bugBounty.what.title': 'What is a bug bounty platform?',
    'bugBounty.what.desc1': 'A bug bounty platform is a service that connects organizations with ethical hackers to identify and fix security vulnerabilities in their systems. Organizations create programs offering rewards for discovering and reporting specific types of bugs, such as vulnerabilities in software, websites, or applications. Ethical hackers participate by testing the systems within the agreed-upon scope, providing detailed reports of their findings. The platform facilitates secure communication, manages submissions, and ensures payments are made to defenders who contribute valuable discoveries. This model helps organizations enhance their cyber security posture cost-effectively by leveraging a network of experts.',
    'bugBounty.what.desc2': 'Defend Denmark is a unique, nationwide bug bounty platform that aims to accelerate bug bounty uptake for SMEs and governmental institutions in Denmark by providing an innovative bug bounty platform that eliminates common barriers that have so far prevented rapid uptake of such solutions.',

    // Bug Bounty Concept
    'concept.badge': 'Bug Bounty Programs',
    'concept.title': 'What is a Bug Bounty?',
    'concept.subtitle': 'Bug bounty programs are crowdsourced cybersecurity initiatives where organizations invite ethical hackers to find and report security vulnerabilities in exchange for rewards. This collaborative approach helps identify weaknesses before they can be exploited by malicious actors.',
    'concept.feature1.title': 'Vulnerability Discovery',
    'concept.feature1.desc': 'Security researchers find and report vulnerabilities in your systems before malicious actors can exploit them.',
    'concept.feature2.title': 'Continuous Security',
    'concept.feature2.desc': 'Instead of yearly audits, utilize the power of a large Danish community of ethical hackers to continuously address your systems.',
    'concept.feature3.title': 'Collaborative Defense',
    'concept.feature3.desc': 'Defend Denmark together with the ethical hackers and yourself, helps pinpoint the details about your security posture.',
    'concept.feature4.title': 'Reward System',
    'concept.feature4.desc': 'Fair compensation for researchers who help improve your security posture through responsible disclosure.',
    'concept.why.title': 'Why Choose Bug Bounty Programs?',
    'concept.why.benefit1': 'Cost-effective security testing with pay-per-vulnerability model',
    'concept.why.benefit2': 'Access to diverse expertise from the Danish security community',
    'concept.why.benefit3': 'Continuous security monitoring beyond traditional penetration testing',
    'concept.why.benefit4': 'Enhanced reputation through transparent security practices',
    'concept.why.tagline': 'Strengthen your security posture with the power of the crowd',

    // Bug Bounty Steps
    'steps.badge': 'How It Works',
    'steps.title': 'Bug Bounty Process',
    'steps.subtitle': 'Our comprehensive 8-step approach ensures thorough security testing and responsible vulnerability management for Danish organizations.',
    'steps.1.title': 'Activate Elite Talent',
    'steps.1.desc': 'We engage Denmark\'s most skilled cybersecurity professionals to strengthen your digital defenses.',
    'steps.2.title': 'Launch Security Testing',
    'steps.2.desc': 'Our platform deployment is seamless, and vulnerability discovery begins immediately.',
    'steps.3.title': 'Simulate Real Attacks',
    'steps.3.desc': 'Security experts replicate actual threat actor methodologies against your systems.',
    'steps.4.title': 'Validate Vulnerabilities',
    'steps.4.desc': 'Our team verifies each finding, assesses severity, and prioritizes remediation efforts.',
    'steps.5.title': 'Deliver Actionable Intelligence',
    'steps.5.desc': 'Receive detailed technical documentation and practical remediation guidance.',
    'steps.6.title': 'Reward Discoveries',
    'steps.6.desc': 'Compensate security researchers for validated vulnerabilities through our transparent bounty system.',
    'steps.7.title': 'Contribute to Community',
    'steps.7.desc': 'A percentage of each bounty payment supports Denmark\'s broader cybersecurity ecosystem - The community fund.',
    'steps.8.title': 'Responsible Disclosure',
    'steps.8.desc': 'Defend Denmark provides a secure channel for reporting vulnerabilities, creating a safer digital environment.',
    
    // Community Fund
    'fund.hero.title': 'Community Fund',
    'fund.hero.subtitle': 'Strengthening Denmark\'s cybersecurity through community-driven innovation and support',
    'fund.badge': 'Community Impact',
    'fund.title': 'Denmark Community Fund',
    'fund.subtitle': 'Cyber security for everyone',
    'fund.intro.desc1': 'Our bug bounty platform is unique in that it is community driven. With a fund that is financed by companies that invest in their own security, but who, by increasing their own security, also want to contribute to protecting Denmark. At the same time, the fund is designed to benefit, for example, charities, start-ups and public institutions with limited resources.',
    'fund.intro.desc2': 'The fund is based on the social responsibility of those organizations and companies that have the budget to finance their own bug bounty platform and show a willingness to help finance a system designed for the community as a whole.',
    'fund.intro.desc3': 'The community fund is designed for those who don\'t have the financial means, and at the same time is a way to encourage the defenders to report all incidents of security vulnerabilities in our community, no matter who is affected.',
    'fund.activate.title': 'Let\'s activate expertise',
    'fund.activate.desc1': 'With the community fund, we create an incentive system where the expertise and skills of ethical hackers are activated to benefit the community. Rewards are paid from the fund for security vulnerabilities that are reported to Defend Denmark, at companies or institutions that do not have the funds to pay rewards.',
    'fund.activate.desc2': 'With this, we approach Denmark\'s cyber security in a holistic way, but Defend Denmark\'s future vision is that all companies and institutions in Denmark can use the bug bounty platform to increase their cyber security.',
    'fund.structure.title': 'Structure of the fund',
    'fund.structure.desc1': 'The community fund is financed on the one hand by Defend Denmark\'s customers and on the other hand by the community of ethical hackers.',
    'fund.structure.desc2': 'The customer\'s contribution is based on the paid reward money for security vulnerabilities, but on top of those payments a 10% flat fee is added, which is the customer\'s contribution to the fund every time they pay for a vulnerability. The community fund therefore grows with each security vulnerability found.',
    'fund.structure.desc3': 'Ethical hackers can also make voluntary contributions to the fund from their own reward money.',
    'fund.structure.desc4': 'The reward money paid out of the fund takes into account its status at any given time and the potential impact of the vulnerabilities on Denmark\'s digital community.',
    'fund.collab.title': 'Collaborative Security',
    'fund.collab.desc': 'Companies and security experts contribute together to strengthen Denmark\'s overall cybersecurity posture.',
    'fund.nonprofit.title': 'Non-Profit Support',
    'fund.nonprofit.desc': 'Fund security assessments for organizations protecting sensitive citizen data and critical services.',
    'fund.impact.title': 'Growing Impact',
    'fund.impact.desc': 'As more organizations join, the fund grows to support an expanding network of digital security initiatives.',
    'fund.fundTitle': 'Community Fund',
    'fund.fundDesc': 'Building resources to protect Denmark\'s digital infrastructure',
    'fund.companyContrib': 'Company Contributions',
    'fund.expertContrib': 'Expert Contributions',
    'fund.prelaunch': 'Pre-launch phase',
    'fund.launchText': 'Fund values will be displayed once Defend Denmark officially launches and begins operations.',
    
    // Footer
    'footer.tagline': 'Securing Denmark\'s digital future through collaborative cybersecurity excellence.',
    'footer.platform': 'Platform',
    'footer.community': 'Community',
    'footer.communityFund': 'Community Fund',
    'footer.company': 'Company',
    'footer.companyName': 'Defend Denmark ApS',
    'footer.address1': 'Rodosvej 15',
    'footer.address2': '2300 København S, DK',
    'footer.about': 'About',
    'footer.forResearchers': 'For Security Researchers',
    'footer.forCompanies': 'For Companies',
    'footer.copyright': '© 2025 Defend Denmark. All rights reserved.',
    'footer.prelaunch.title': 'Sign up for Defend Denmark',
    'footer.prelaunch.description': 'Whether you are a security researcher or a company who wishes to work with ethical hackers, we are eager to welcome you on the platform. Please fill out the form and we will get back to you as soon as possible.',
    'footer.prelaunch.button': 'Sign up',

    // Companies Page
    'companies.title': 'For Companies',
    'companies.subtitle': 'Strengthen your IT security with Danish freelance ethical hackers',
    'companies.howItWorks': 'How it works for you',
    'companies.step1.title': 'Set up program',
    'companies.step1.desc': 'Define what you want tested, your rules and rewards for your bug bounty program',
    'companies.step2.title': 'Danish hackers test',
    'companies.step2.desc': 'Verified ethical hackers begin testing your systems for vulnerabilities',
    'companies.step3.title': 'Receive reports',
    'companies.step3.desc': 'We verify and investigate all vulnerability reports from the hackers',
    'companies.step4.title': 'Approve & pay',
    'companies.step4.desc': 'You only pay for real and impactful vulnerabilities that are found',
    'companies.benefit1.title': 'Continuous security testing',
    'companies.benefit1.desc': 'Get your systems tested continuously by ethical hackers',
    'companies.benefit2.title': 'Cost-effective',
    'companies.benefit2.desc': 'Pay only for real vulnerabilities found - lower than consultant costs',
    'companies.benefit3.title': 'Verified ethical hackers',
    'companies.benefit3.desc': 'All ethical hackers are MitID verified and agree to our ethical guidelines',
    'companies.benefit4.title': 'Professional verification',
    'companies.benefit4.desc': 'Our own security experts verify, triage and prioritize all reported vulnerabilities',
    'companies.benefit5.title': 'Fast response',
    'companies.benefit5.desc': 'Critical vulnerabilities are reported within 24 hours',
    'companies.benefit6.title': 'Dedicated support',
    'companies.benefit6.desc': 'Danish customer service, guidance and technical support throughout the process',

    // About Page
    'about.hero.title': 'About Defend Denmark',
    'about.hero.subtitle': 'A secure digital future for Denmark through innovative cybersecurity and ethical hacking',
    'about.prelaunch.title': 'Pre-Launch Phase',
    'about.prelaunch.description': 'We are currently in the exciting pre-launch phase, fine-tuning our platform and building partnerships with Danish companies. We are actively onboarding both defenders and companies, please contact us if you are interested.',
    'about.hackers.title': 'Ready Security Researchers',
    'about.hackers.description': 'We have assembled a talented community of ethical hackers who are passionate about cybersecurity and ready to help Danish companies identify and fix security vulnerabilities. Our researchers undergo thorough vetting to ensure the highest standards of professionalism and integrity.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To become Denmark\'s leading cybersecurity platform, fostering a culture of proactive security testing and helping businesses stay ahead of cyber threats through responsible disclosure and collaborative security research.',
    'about.researcher.experience': 'Years of Experience',
    'about.founder.quote': 'After identifying hundreds of vulnerabilities myself and working with the best Danish ethical hackers, I realized that there weren\'t many Danish companies on bug bounty platforms. This led me to launch Defend Denmark to help Danish companies work with the Danish security community to find real and impactful vulnerabilities in Danish companies',
    'about.discord.title': 'Join Our Community',
    'about.discord.description': 'Connect with fellow security researchers, stay updated on the latest programs, and participate in discussions about Danish cybersecurity.',
    'about.discord.button': 'Join us on Discord',

    // Researchers Page
    'nav.researchers': 'For Researchers',
    'researchers.title': 'For Security Researchers',
    'researchers.subtitle': 'Get rewarded for your hacking skills',
    'researchers.howToEarn': 'How to get rewarded',
    'researchers.step1.title': 'Sign up',
    'researchers.step1.desc': 'Create profile and get verified as a defender',
    'researchers.step2.title': 'Find bugs',
    'researchers.step2.desc': 'Test selected Danish companies\' systems and find vulnerabilities',
    'researchers.step3.title': 'Report',
    'researchers.step3.desc': 'Write a detailed report about the vulnerability',
    'researchers.step4.title': 'Verification',
    'researchers.step4.desc': 'We confirm the vulnerability and assess the severity',
    'researchers.step5.title': 'Get paid',
    'researchers.step5.desc': 'Receive reward based on the vulnerability\'s criticality',
    'researchers.benefit1.title': 'High rewards',
    'researchers.benefit1.desc': 'Competitive payouts based on vulnerability criticality',
    'researchers.benefit2.title': 'Danish companies',
    'researchers.benefit2.desc': 'Work with well-known Danish brands and companies',
    'researchers.benefit3.title': 'Fast verification',
    'researchers.benefit3.desc': 'Receive feedback on found vulnerability within 5 business days',
    'researchers.benefit4.title': 'Professional support',
    'researchers.benefit4.desc': 'Get help with reporting and communication with companies',
    'researchers.benefit5.title': 'Gamification',
    'researchers.benefit5.desc': 'Receive points and recognition for all vulnerabilities, even if they don\'t give payout',
    'researchers.benefit6.title': 'Legal protection',
    'researchers.benefit6.desc': 'Safe framework for ethical hacking under Danish laws',
    'researchers.requirements.title': 'Requirements',
    'researchers.requirements.citizen': 'Danish Citizen or Resident. MitID access is required',
    'researchers.requirements.agreement': 'Willing to accept the defenders agreement',
    'researchers.requirements.record': 'Clean criminal record',
    'researchers.requirements.disclosure': 'Committed to responsible disclosure',

    // Spotlight / Security Researchers Carousel
    'spotlight.title': 'Meet Our Security Researchers',
    'spotlight.subtitle': 'Talented ethical hackers ready to protect Danish companies',
    'spotlight.disclaimer': 'Note: The vulnerabilities described below are not necessarily findings in Defend Denmark\'s customers, but also, independent research or contract work, and are presented here to demonstrate the skills and expertise of ethical hackers.',
    'spotlight.mitidVerified': 'MitID Verified',
    'spotlight.agreementSigned': 'Agreement Signed',
    'spotlight.ndaSigned': 'NDA Signed',
    'spotlight.profession': 'Profession',
    'spotlight.specialization': 'Specialization',
    'spotlight.experience': 'years',
    'spotlight.discoveries': 'Recent Discoveries',
    'spotlight.reward': 'Reward:',
    'spotlight.industry': 'Industry:',
    'spotlight.cvss': 'CVSS:',
    'spotlight.acceptedAs': 'Accepted as:',

    // Fund additional keys
    'fund.howItWorks': 'How the Community Fund Works',
    'fund.flowchartDesc': 'The Community Fund creates a sustainable ecosystem where businesses contribute to cybersecurity for organizations that cannot afford it, supported by ethical hackers who help secure Denmark\'s digital infrastructure.',

    // Not Found Page
    'notFound.message': 'Oops! Page not found',
    'notFound.returnHome': 'Return to Home',

    // Common
  },
  da: {
    // Navigation
    'nav.companies': 'For Virksomheder',
    'nav.bugBounty': 'Bug Bounty Platform',
    'nav.communityFund': 'Fællesskabsfonden',
    'nav.about': 'Om Os',
    
    // Hero Section
    'hero.title': 'Et sikrere digitalt',
    'hero.titleAccent': 'Danmark',
    'hero.subtitle': 'Styrk jeres digitale sikkerhed via Defend Denmarks bug bounty platform. Vi samarbejder med landets dygtigste etiske hackere, som simulerer ondsindede aktørers metoder. De finder sårbarheder i jeres systemer og i betaler kun for reelle og alvorlige sårbarheder.',
    'hero.bookDemo': 'Book en Demo',
    'hero.learnMore': 'Lær Mere',
    
    // Preventive Measures
    'preventive.title': 'Crowdsourced sikkerhed',
    'preventive.description': 'Vores etiske hackere simulerer ondsindede aktørers angreb og finder nye sårbarheder i de IT-systemer, som vores kunder bruger, drifter eller selv bygger. Ved proaktivt at identificere disse sårbarheder hjælper vi vores kunder med at styrke deres samlede sikkerhedsposition.',
    
    // Bug Bounty Page
    'bugBounty.hero.title': 'Proaktiv sikkerhed',
    'bugBounty.hero.subtitle': 'Styrk jeres digitale modstandsdygtighed med Danmarks førende etiske hackere',
    'bugBounty.what.title': 'Hvad er en bug bounty platform?',
    'bugBounty.what.desc1': 'En bug bounty platform er en tjeneste, der forbinder etiske hackere med organisationer for at identificere sårbarheder i deres IT-systemer. Organisationer kan vælge hvad de ønsker at eksponere for de etiske hackere, og tilbyder dusører (bounties) for identificering og rapportering af specifikke typer bugs, såsom sårbarheder i software, hjemmesider eller applikationer. De danske etiske hackere bruger deres færdigheder til at teste systemerne inden for det aftalte rammer og leverer detaljerede rapporter om de fejl som bryder sikkerheden hos organisationerne. Defend Denmark faciliterer sikker kommunikation, verificerer fund og sikrer, at betalinger foretages til de etiske hackere. Denne model hjælper organisationer med at forbedre deres cybersikkerhedspostur omkostningseffektivt ved at udnytte dette unikke netværk af eksperter.',
    'bugBounty.what.desc2': 'Defend Denmark er en unik, landsdækkende bug bounty platform, der ønsker at levere "crowdsourced" pentesting til større virksomheder, SMV\'er og statslige institutioner i Danmark. Dette gøres ved at levere en fælles platform, som forbinder de etiske hackere med disse organisationer.',

    // Bug Bounty Concept
    'concept.badge': 'Bug Bounty Programmer',
    'concept.title': 'Hvad er Bug Bounty?',
    'concept.subtitle': 'Bug bounty programmer er crowdsourcede intitiativer inden for cybersikkerhed, hvor organisationer inviterer etiske hackere til at finde og rapportere sårbarheder i IT-sikkerhed i bytte for dusører. Denne samarbejdstilgang hjælper organisationer med at identificere svagheder, før de kan udnyttes af ondsindede aktører, samtidig med at der udelukkende betales for reelle sårbarheder.',
    'concept.feature1.title': 'Opdagelse af Sårbarheder',
    'concept.feature1.desc': 'De etiske hackere finder og rapporterer sårbarheder i dine systemer, før ondsindede aktører kan udnytte dem.',
    'concept.feature2.title': 'Kontinuerlig Sikkerhed',
    'concept.feature2.desc': 'I stedet for, eller som supplement til årlige pentests, kan det store fællesskab som der er inden for etisk hacking i Danmark udnyttes. Dette skaber mulighed for løbende test af jeres systemer.',
    'concept.feature3.title': 'Samarbejde om Sårbarheder',
    'concept.feature3.desc': 'Defend Denmark og de etiske hackere, hjælper jer med at forstå jeres digitale landskab og dets sikkerhed.',
    'concept.feature4.title': 'Belønningssystem',
    'concept.feature4.desc': 'Fair kompensation ydes til de etiske hackere, der hjælper med at forbedre jeres sikkerhed, jo værre en sårbarhed, jo større en dusør.',
    'concept.why.title': 'Hvorfor Vælge Bug Bounty Programmer?',
    'concept.why.benefit1': 'Ofte mere omkostningseffektiv end traditionelle pentests. Bug Bounty er en betal-per-sårbarhed model',
    'concept.why.benefit2': 'Adgang til divers ekspertise fra de danske etiske hackere',
    'concept.why.benefit3': 'Jeres systemer bliver kontinuerligt testet med nye øjne og nye færdigheder',
    'concept.why.benefit4': 'Et omdømme som en virksomhed der tager cybersikkerhed seriøst',
    'concept.why.tagline': 'En forpligtigelse til at kontinuerligt at blive testet, viser jeres dedikation til at holde jeres systemer sikre.',

    // Bug Bounty Steps
    'steps.badge': 'Sådan Fungerer Det',
    'steps.title': 'Bug Bounty Proces',
    'steps.subtitle': 'Vores 8-trins tilgang sikrer grundig sikkerhedstest og ansvarlig sårbarhedshåndtering for danske organisationer.',
    'steps.1.title': 'Brug Talentet',
    'steps.1.desc': 'Vi engagerer Danmarks dygtigste etiske hackere til at styrke jeres digitale forsvar.',
    'steps.2.title': 'Kom i gang på platformen',
    'steps.2.desc': 'Vores onboarding er simpel, og hackerne begynder deres arbejde med det samme.',
    'steps.3.title': 'Simulér Rigtige Angreb',
    'steps.3.desc': 'Vores hackere simulérer de reelle trusselaktørers metoder mod dine systemer.',
    'steps.4.title': 'Validér Sårbarheder',
    'steps.4.desc': 'Vores team verificerer hver en sårbarhed, vurderer alvorlighed og sørger for at alt er dokumenteret.',
    'steps.5.title': 'Modtag handlingsrettet viden',
    'steps.5.desc': 'Modtag detaljeret teknisk dokumentation og praktisk råd om fix.',
    'steps.6.title': 'Dusører for sårbarheder',
    'steps.6.desc': 'Kompensér de etiske hackere for godkendte og vigtige sårbarheder. Dusøren stiger med sårbarhedens alvorlighed.',
    'steps.7.title': 'Bidrag til Fællesskabet',
    'steps.7.desc': 'En procentdel af hver dusør støtter det digitale Danmark via Fællesskabsfonden.',
    'steps.8.title': 'Ansvarlig Offentliggørelse',
    'steps.8.desc': 'Defend Denmark faciliterer en sikker kanal til offentliggørelse af vigtige sårbarheder, sådan skaber vi et sikrere digitalt Danmark.',
    
    // Community Fund
    'fund.hero.title': 'Fællesskabsfonden',
    'fund.hero.subtitle': 'Styrker Danmarks cybersikkerhed gennem fællesskabsdrevet innovation og støtte',
    'fund.badge': 'Fællesskabseffekt',
    'fund.title': 'Fællesskabsfonden',
    'fund.subtitle': 'Cybersikkerhed for alle',
    'fund.intro.desc1': 'Vores bug bounty platform er unik ved at være drevet af fællesskabet. Med en fælles pulje, der finansieres af virksomheder, der investerer i deres egen sikkerhed, men som ved at forbedre deres egen sikkerhed også ønsker at bidrage til at beskytte Danmark. Samtidig er fonden designet til at gavne f.eks. velgørenhedsorganisationer, start-ups og offentlige institutioner med begrænsede ressourcer.',
    'fund.intro.desc2': 'Fonden er baseret på det sociale ansvar hos de organisationer og virksomheder, der har budgettet til at finansiere deres eget bug bounty program og viser vilje til at hjælpe med at finansiere et system designet til sikring af fællesskabet som helhed.',
    'fund.intro.desc3': 'Fællesskabsfonden er designet til de organisationer, der ikke har  økonomiske midler, og er samtidig en måde at opfordre etiske hackere til at rapportere alle de sårbarheder som de kunne støde på, uanset hvem der er påvirket.',
    'fund.activate.title': 'Lad os udnytte ekspertisen',
    'fund.activate.desc1': 'Med fællesskabsfonden skaber vi et incitamentssystem, hvor   ekspertisen fra etiske hackere bruges til fordel for fællesskabet. Dusører udbetales fra fonden for fund af sårbarheder, som der rapporteres til Defend Denmark, hos virksomheder eller institutioner, der ikke har midlerne til selv at være på platformen.',
    'fund.activate.desc2': 'Defend Denmarks fremtidige vision er, at alle virksomheder og institutioner i Danmark kan bruge bug bounty platformen til at øge deres cybersikkerhed.',
    'fund.structure.title': 'Fondens struktur',
    'fund.structure.desc1': 'Fællesskabsfonden finansieres på den ene side af Defend Denmarks kunder og på den anden side af fællesskabet af etiske hackere.',
    'fund.structure.desc2': 'Kundens bidrag er baseret på de betalte dusører, oven på disse dusører tilføjes et fladt gebyr på 10%, som er kundens bidrag til fonden, hver gang de betaler for en sårbarhed. Fællesskabsfonden vokser derfor med hver sårbarhed som der bliver fundet.',
    'fund.structure.desc3': 'Etiske hackere kan også yde frivillige bidrag til fonden fra deres egne dusører som de får udbetalt.',
    'fund.structure.desc4': 'Dusører udbetalt fra fonden korrelerer med hvad der er indestående i fonden på et givent tidspunkt, samt alvorligheden af den rapporterede sårbarhed.',
    'fund.collab.title': 'Samarbejde om  Sikkerhed',
    'fund.collab.desc': 'Virksomheder og etiske hackere bidrager sammen til at styrke Danmarks samlede cybersikkerhedspostur.',
    'fund.nonprofit.title': 'Non-Profit Support',
    'fund.nonprofit.desc': 'Fonden hjælper med at fremme ansvarlig offentliggørelse af sårbarheder hos organisationer som ikke har midlerne til selv at betale for det.',
    'fund.impact.title': 'Voksende Effekt',
    'fund.impact.desc': 'Efterhånden som flere organisationer deltager, vokser fonden så den kan støtte offentliggøreslse af sårbarheder',
    'fund.fundTitle': 'Fællesskabsfond',
    'fund.fundDesc': 'Sparer midler sammen til at beskytte Danmarks digitale infrastruktur',
    'fund.companyContrib': 'Virksomhedsbidrag',
    'fund.expertContrib': 'Hackerbidrag',
    'fund.prelaunch': 'Pre-launch fase',
    'fund.launchText': 'Fondens status vil blive vist, når Defend Denmark officielt lancerer.',
    
    // Footer
    'footer.tagline': 'Sikrer det digitale Danmark med etisk hacking',
    'footer.platform': 'Platform',
    'footer.community': 'Fællesskab',
    'footer.communityFund': 'Fællesskabsfonden',
    'footer.company': 'Virksomhed',
    'footer.companyName': 'Defend Denmark ApS',
    'footer.address1': 'Rodosvej 15',
    'footer.address2': '2300 København S, DK',
    'footer.about': 'Om os',
    'footer.forResearchers': 'For Etiske Hackere',
    'footer.forCompanies': 'For Virksomheder',
    'footer.copyright': '© 2025 Defend Denmark. Alle rettigheder forbeholdes.',
    'footer.prelaunch.title': 'Bliv en del af Defend Denmark',
    'footer.prelaunch.description': 'Uanset om du er etisk hacker eller en virksomhed som ønsker at arbejde med etiske hackere, er vi ivrige efter at byde dig velkommen på platformen. Udfyld venligst formularen, så vender vi tilbage til dig hurtigst muligt.',
    'footer.prelaunch.button': 'Skriv dig op',
    
    // Companies Page
    'companies.title': 'For Virksomheder',
    'companies.subtitle': 'Styrk jeres IT-sikkerhed med danske etiske hackere',
    'companies.howItWorks': 'Sådan fungerer det for jer',
    'companies.step1.title': 'Opsæt et program',
    'companies.step1.desc': 'Definér hvad I gerne vil have testet, jeres regler og rammen for dusører for jeres bug bounty program',
    'companies.step2.title': 'Danske hackere tester',
    'companies.step2.desc': 'Verificerede danske etiske hackere begynder at teste jeres systemer for sårbarheder',
    'companies.step3.title': 'Modtag rapporter',
    'companies.step3.desc': 'Vi verificerer og godkender alle rapporter om sårbarheder fra hackerne',
    'companies.step4.title': 'Godkend & betal',
    'companies.step4.desc': 'I betaler kun for reelle og vigtige sårbarheder som bliver fundet',
    'companies.benefit1.title': 'Kontinuerlig sikkerhedstest',
    'companies.benefit1.desc': 'Få jeres systemer testet løbende af etiske hackere med forskellige specialer',
    'companies.benefit2.title': 'Omkostningseffektiv',
    'companies.benefit2.desc': 'Betal kun for reelle sårbarheder der bliver fundet og ikke for den tid der er brugt',
    'companies.benefit3.title': 'Verificerede etiske hackere',
    'companies.benefit3.desc': 'Alle etiske hackere bliver MitID verificerede og godkender reglerne for etisk hacking',
    'companies.benefit4.title': 'Professionel verificering',
    'companies.benefit4.desc': 'Vores egne sikkerhedseksperter verificerer, triagerer og prioriterer alle rapporterede sårbarheder',
    'companies.benefit5.title': 'Hurtig respons',
    'companies.benefit5.desc': 'Kritiske sårbarheder rapporteres inden for 24 timer',
    'companies.benefit6.title': 'Dedikeret support',
    'companies.benefit6.desc': 'Dansk kundeservice, vejledning og teknisk support gennem hele processen',
    
    // About Page
    'about.hero.title': 'Om Defend Denmark',
    'about.hero.subtitle': 'En sikker digital fremtid for Danmark gennem etisk hacking',
    'about.prelaunch.title': 'Pre-Launch Fase',
    'about.prelaunch.description': 'Vi er i øjeblikket i den spændende pre-launch fase, hvor vi finjusterer vores platform og bygger partnerskaber med danske virksomheder. Vi onboarder aktivt virksomheder og etiske hackere, tag endelig kontakt hvis du/i er intereseret.',
    'about.hackers.title': 'Etiske hackere står klar',
    'about.hackers.description': 'Vi har samlet et talentfuldt fællesskab af etiske hackere, der brænder for cybersikkerhed og er klar til at hjælpe danske virksomheder med at identificere og rette sårbarheder. Vores etiske hackere gennemgår grundig kontrol for at sikre de højeste standarder for professionalisme og integritet.',
    'about.vision.title': 'Vores Vision',
    'about.vision.description': 'At blive Danmarks førende cybersikkerhedsplatform, der fremmer en kultur med proaktiv sikkerhedstest og hjælper virksomheder med at være foran cybertrusler gennem ansvarlig offentliggørelse og samarbejde omkring etisk hacking.',
    'about.researcher.experience': 'Års Erfaring',
    'about.founder.quote': 'Efter selv at have identificeret hundredevis af sårbarheder og arbejdet med de dygtigste danske etiske hackere, gik det op for mig at der ikke var særligt mange danske virksomheder på bug bounty platforme. Dette fik mig til at sætte Defend Denmark i verden, for at hjælpe danske virksomheder med at arbejde med det danske sikkerheds-community om at finde reelle og vigtige sårbarheder i danske virksomheder.',
    'about.discord.title': 'Bliv en del af fællesskabet',
    'about.discord.description': 'Kom i kontakt med andre etiske hackere, bliv opdateret om de nyeste programmer og deltag i bug bounty fællesskabet.',
    'about.discord.button': 'Join os på Discord',
    
    // Researchers Page
    'nav.researchers': 'For Etiske Hackere',
    'researchers.title': 'For Etiske Hackere',
    'researchers.subtitle': 'Tjen penge på dine hacking skills',
    'researchers.howToEarn': 'Sådan bliver du belønnet',
    'researchers.step1.title': 'Tilmeld dig',
    'researchers.step1.desc': 'Opret profil og bliv verificeret som etisk hacker',
    'researchers.step2.title': 'Find sårbarheder',
    'researchers.step2.desc': 'Test de udvalgte danske virksomheders systemer og find sårbarheder',
    'researchers.step3.title': 'Rapportér',
    'researchers.step3.desc': 'Skriv en detaljeret rapport om sårbarheden',
    'researchers.step4.title': 'Verificering',
    'researchers.step4.desc': 'Vi bekræfter sårbarheden og vurderer alvoren',
    'researchers.step5.title': 'Bliv betalt',
    'researchers.step5.desc': 'Modtag en dusør baseret på sårbarhedens kritikalitet',
    'researchers.benefit1.title': 'Høje dusører',
    'researchers.benefit1.desc': 'Konkurrencedygtige dusører baseret på hvor slem sårbarheden er',
    'researchers.benefit2.title': 'Danske virksomheder',
    'researchers.benefit2.desc': 'Arbejd med kendte danske brands og virksomheder',
    'researchers.benefit3.title': 'Hurtig verificering',
    'researchers.benefit3.desc': 'Modtag feedback på den fundne sårbarhed inden for 5 hverdage',
    'researchers.benefit4.title': 'Professionel support',
    'researchers.benefit4.desc': 'Få hjælp til professionel kommunikation med virksomheder',
    'researchers.benefit5.title': 'Gamification',
    'researchers.benefit5.desc': 'Modtag point for alle sårbarheder, også selvom de ikke giver udbetaling',
    'researchers.benefit6.title': 'Juridisk Beskyttelse',
    'researchers.benefit6.desc': 'Sikre rammer for etisk hacking under danske love',
    'researchers.requirements.title': 'Krav',
    'researchers.requirements.citizen': 'Dansk statsborger eller beboer. Adgang til MitID verificering er et krav',
    'researchers.requirements.agreement': 'Indforstået med at skulle acceptere defenders-aftalen',
    'researchers.requirements.record': 'Ren straffeattest',
    'researchers.requirements.disclosure': 'Forpligtet til ansvarlig offentliggørelse af sårbarheder',
    
    // Spotlight / Security Researchers Carousel
    'spotlight.title': 'Mød Vores Etisk Hackere',
    'spotlight.subtitle': 'Dygtige etiske hackere som er klar til at finde sårbarheder i danske virksomheder',
    'spotlight.disclaimer': 'Bemærk: Sårbarhederne beskrevet nedenfor er ikke nødvendigvis fund i Defend Denmarks kunder, men også, uafhængig research eller kontraktarbejde, og præsenteres her for at demonstrere de etiske hackeres færdigheder og ekspertise.',
    'spotlight.mitidVerified': 'MitID Verificeret',
    'spotlight.agreementSigned': 'Aftale Underskrevet',
    'spotlight.ndaSigned': 'NDA Underskrevet',
    'spotlight.profession': 'Profession',
    'spotlight.specialization': 'Specialisering',
    'spotlight.experience': 'år',
    'spotlight.discoveries': 'Seneste Opdagelser',
    'spotlight.reward': 'Belønning:',
    'spotlight.industry': 'Branche:',
    'spotlight.cvss': 'CVSS:',
    'spotlight.acceptedAs': 'Accepteret som:',
    
    // Fund additional keys
    'fund.howItWorks': 'Sådan Fungerer Fællesskabsfonden',
    'fund.flowchartDesc': 'Fællesskabsfonden skaber et økosystem, hvor virksomheder bidrager til at organisationer som der ikke selv har råd til det, kan blive støttet af etiske hackere. Dette hjælper med at sikre Danmarks digitale infrastruktur.',
    
    // Not Found Page
    'notFound.message': 'Hallo hacker, hvad laver du her ;-) Siden blev ikke fundet',
    'notFound.returnHome': 'Tilbage til Forsiden',
    
    // Common
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('da');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};