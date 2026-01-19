import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        
        <main className="pt-16">
          <PageHero
            title="Privacy Policy"
            subtitle="Your privacy and data protection rights"
          />

          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Defend Denmark ApS – Privacy Policy</h1>
                <p className="text-muted-foreground">Version 1.0 • Effective Date: 23 Oct 2025</p>
              </div>

              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Who We Are</h2>
                <p className="mb-4">
                  Defend Denmark ApS ("Defend Denmark", "we", "us", "our") is a Danish‐registered cyber-security company that operates a localized bug-bounty platform connecting Danish hackers with Danish organisations.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Company Reg. No.: CVR 45824578</li>
                  <li>Address: Reventlowsgade 18, 3th, 1651 KBH V</li>
                  <li>Email: <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a></li>
                </ul>
                <p>
                  Unless otherwise stated, Defend Denmark acts as the data controller for the personal data described in this policy. We do not process customer end-user data by default. If "incidental processing" occurs (e.g. accidental upload of PII in a report), we act as a Processor solely for that instance and Section 12 applies.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Key Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data</strong> – information that can identify a living individual.</li>
                  <li><strong>Processing</strong> – any operation performed on personal data (collection, use, storage, etc.).</li>
                  <li><strong>Controller / Processor</strong> – as defined in the EU General Data Protection Regulation (GDPR).</li>
                  <li><strong>Platform</strong> – the web application, APIs and associated services offered at defenddenmark.dk and sub-domains.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. What Data We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3">Sources of Personal Data</h3>
                <p className="mb-4">We collect your personal data from the following sources:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Directly from you, when you create an account, submit vulnerability reports, use our services, fill out forms, or communicate with us</li>
                  <li>Automatically, through your use of our website or platform (e.g. cookies, usage logs, device data)</li>
                  <li>From third parties, such as public sources (e.g. LinkedIn, GitHub profiles), partners, and service providers</li>
                  <li>Via partners and affiliates, when you interact with our content on partner websites</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Categories of Personal Data Collected</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Typical Fields</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Identification and contact data</td>
                        <td className="border border-gray-300 px-4 py-2">Name, e-mail, username (may be pseudonymous), phone (optional), postal address, preferred language, VAT number (if applicable)</td>
                        <td className="border border-gray-300 px-4 py-2">Provided by you</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Professional data</td>
                        <td className="border border-gray-300 px-4 py-2">Job title, company name and sector, contact person information (for corporate clients)</td>
                        <td className="border border-gray-300 px-4 py-2">Provided by you</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Authentication data</td>
                        <td className="border border-gray-300 px-4 py-2">Password (hash), MFA tokens, access logs, IP addresses, login timestamps</td>
                        <td className="border border-gray-300 px-4 py-2">Automatically collected</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Verification and agreement data</td>
                        <td className="border border-gray-300 px-4 py-2">Verification status only (e.g., MitID verified: yes/no, criminal record check: clean/not clean). We do NOT store the actual criminal record or CPR number. We DO store the signed version of the defender agreement for security researchers.</td>
                        <td className="border border-gray-300 px-4 py-2">Verification result and signed agreement provided by you</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Technical and usage data</td>
                        <td className="border border-gray-300 px-4 py-2">Browser type, operating system, device identifiers, page views, time stamps, referrer URLs, interaction and navigation data</td>
                        <td className="border border-gray-300 px-4 py-2">Automatically collected</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Transactional and financial data</td>
                        <td className="border border-gray-300 px-4 py-2">Bank/IBAN details (security researchers), invoice data (customers), payment status.</td>
                        <td className="border border-gray-300 px-4 py-2">Provided by you</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Vulnerability submissions</td>
                        <td className="border border-gray-300 px-4 py-2">Proof-of-concept code, screenshots, network traces, technical descriptions (may incidentally contain personal data)</td>
                        <td className="border border-gray-300 px-4 py-2">Provided by security researchers</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Communication and preference data</td>
                        <td className="border border-gray-300 px-4 py-2">Support tickets, e-mails, chat messages, survey responses, marketing preferences, consent status, communication history</td>
                        <td className="border border-gray-300 px-4 py-2">Provided by you</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-4">
                  <strong>Mandatory vs. Optional Data:</strong> Whether the collection of data is mandatory or optional is specified at the time of collection. Data marked as mandatory is required to properly deliver our services. Without this information, your request may not be processed, or access to the service may be restricted.
                </p>
                <p>We do not intentionally collect special category data (GDPR Art. 9) or data on children under 13.</p>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Legal Bases for Processing</h2>
                <p className="mb-4">We process personal data only when a lawful ground applies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contract</strong> – creating and operating your platform account, paying rewards, providing customer support.</li>
                  <li><strong>Legitimate Interest</strong> – securing the platform, preventing fraud, improving features, marketing to existing customers (soft opt-in).</li>
                  <li><strong>Consent</strong> – optional newsletters, non-essential cookies, public profile disclosure.</li>
                  <li><strong>Legal Obligation</strong> – bookkeeping (Accounting Act), obligations under the Danish Money-Laundering Act, responding to lawful requests.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. How We Use Your Data</h2>
                
                <h3 className="text-xl font-semibold mb-3">Service Provision and Customer Relationship Management</h3>
                <p className="mb-3">We process your personal data to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Register and manage your user account</li>
                  <li>Provide, secure and maintain the bug-bounty platform</li>
                  <li>Deliver the services you have subscribed to</li>
                  <li>Manage client contracts, orders, invoicing and follow-up of the commercial relationship</li>
                  <li>Identify and authenticate you before providing access to your account</li>
                  <li>Verify identity and process bounty payments</li>
                  <li>Respond to your service inquiries and provide customer support</li>
                  <li>Notify you about program updates, critical vulnerabilities or policy changes</li>
                  <li>Manage unpaid invoices and legal disputes related to the use of our services</li>
                </ul>
                <p className="mb-4">
                  <strong>Legal basis:</strong> Article 6(1)(b) GDPR (contract), Article 6(1)(f) GDPR (legitimate interest), and Article 6(1)(c) GDPR (legal obligation)
                </p>

                <h3 className="text-xl font-semibold mb-3">Commercial Communication and Marketing</h3>
                <p className="mb-3">We may use your personal data for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Sending newsletters and promotional content</li>
                  <li>Contacting you to schedule meetings or follow up on requests</li>
                  <li>Direct marketing and customer acquisition activities</li>
                  <li>Segmenting our audience to personalize communications</li>
                  <li>Managing your subscription preferences and consent</li>
                </ul>
                <p className="mb-4">
                  These communications may be sent by email, SMS, or other electronic channels, personalized based on your profile and preferences, and adjusted according to your language settings and business profile.
                </p>
                <p className="mb-4">
                  <strong>Legal basis:</strong> Article 6(1)(f) GDPR (legitimate interest), or Article 6(1)(a) GDPR (consent for newsletters).
                </p>
                <p className="mb-4 text-sm italic">
                  You can unsubscribe from marketing communications at any time using the opt-out link included in each message. If we introduce new forms of direct marketing, we will inform you in advance and give you the opportunity to object.
                </p>

                <h3 className="text-xl font-semibold mb-3">Analytics and Service Improvement</h3>
                <p className="mb-3">We may process data to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Gather feedback on your experience with our services</li>
                  <li>Record phone calls or digital meetings for quality assurance and training</li>
                  <li>Compile commercial and visitor statistics related to the use of our services and websites</li>
                  <li>Analyse aggregated usage to improve performance and user experience</li>
                  <li>Develop and improve our platform features, performance, and content</li>
                  <li>Conduct satisfaction surveys or internal performance analysis</li>
                  <li>Generate anonymized or aggregated statistics for business intelligence</li>
                </ul>
                <p className="mb-4">
                  <strong>Legal basis:</strong> Article 6(1)(f) GDPR (legitimate interest)
                </p>

                <h3 className="text-xl font-semibold mb-3">Regulatory Compliance and Risk Management</h3>
                <p className="mb-3">We may process personal data to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Comply with anti-money laundering (AML) and Know Your Customer (KYC) obligations</li>
                  <li>Prevent fraud and misuse of the platform</li>
                  <li>Respond to lawful requests from supervisory or regulatory authorities</li>
                  <li>Retain accounting records and meet financial reporting requirements</li>
                  <li>Conduct internal audits and ensure compliance with applicable regulations</li>
                  <li>Fulfil contractual and statutory obligations</li>
                </ul>
                <p className="mb-4">
                  <strong>Legal basis:</strong> Article 6(1)(c) GDPR (compliance with a legal obligation), Article 6(1)(f) GDPR (legitimate interest)
                </p>

                <h3 className="text-xl font-semibold mb-3">Security of Our Services and Infrastructure</h3>
                <p className="mb-3">We implement measures to ensure the security and continuity of our services, which involves processing personal data to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Detect and block suspicious activity or cyber threats</li>
                  <li>Manage logs, authentication and access control systems</li>
                  <li>Perform backups and system integrity checks</li>
                  <li>Ensure secure hosting and encryption of communications</li>
                </ul>
                <p className="mb-4">
                  <strong>Legal basis:</strong> Article 6(1)(f) GDPR (legitimate interest)
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Cookies & Tracking</h2>
                <p className="mb-4">We only use necessary functional cookies that are essential for the operation of our platform:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Necessary cookies</strong> – login session, CSRF protection, language preference, authentication tokens</li>
                </ul>
                <p className="mt-4">
                  We do not use analytics cookies, marketing cookies, or any tracking technologies beyond what is strictly necessary for the platform to function. No consent is required for these essential cookies as they are necessary to provide the services you request.
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Data Retention</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account data</strong> – retained while your account is active and for 2 years after the last login.</li>
                  <li><strong>Financial/transaction records</strong> – 5 years in accordance with the Danish Bookkeeping Act.</li>
                  <li><strong>Vulnerability submissions</strong> – retained for the life-cycle of the customer program plus 12 months, then anonymised or deleted.</li>
                  <li><strong>Back-ups</strong> – encrypted, automatically purged within 35 days.</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Disclosure to Third Parties</h2>
                <p className="mb-4">
                  <strong>We never sell personal data and we never disclose personal data to recipients outside the European Economic Area (EEA).</strong>
                </p>
                <p className="mb-4">
                  Your data is stored and retained, for the duration of its retention period, exclusively on servers located within the European Union. We use Microsoft Azure and Amazon Web Services with data centers in EU regions only.
                </p>
                <p className="mb-4">
                  All service providers we work with are contractually required to process and store data within the EEA. We carefully select our partners to ensure that your personal data remains within the European Economic Area at all times.
                </p>
                <p>
                  For more information about data hosting and storage locations, you may contact us at <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a>.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">10. Your Rights</h2>
                <p className="mb-4">As a data subject under the General Data Protection Regulation (GDPR), you may, at any time, exercise the following rights (GDPR Art. 15-22):</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right of access:</strong> You can request access to the personal data we hold about you</li>
                  <li><strong>Right to rectification:</strong> You can request the correction of inaccurate data</li>
                  <li><strong>Right to erasure:</strong> You can request deletion of your data ("right to be forgotten") where applicable</li>
                  <li><strong>Right to restrict processing:</strong> You can request that the use of your data be restricted in certain circumstances</li>
                  <li><strong>Right to object:</strong> You can object to processing based on legitimate interest</li>
                  <li><strong>Right to object to direct marketing:</strong> You have the absolute right to object to the use of your personal data for direct marketing purposes</li>
                  <li><strong>Right to data portability:</strong> You may request to receive your personal data in a structured, commonly used and machine-readable format</li>
                  <li><strong>Right to withdraw consent:</strong> Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing</li>
                  <li><strong>Right to lodge a complaint:</strong> You can file a complaint with your national data protection authority (Datatilsynet in Denmark: <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.datatilsynet.dk</a>)</li>
                  <li><strong>Right to define post-mortem instructions:</strong> In Denmark and some other countries, you may have the right to give instructions regarding the handling of your personal data after your death (subject to applicable national laws)</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, contact <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a>. We respond within 30 days. 
                </p>
                <p className="mt-2 text-sm italic">
                  Please note that the exercise of these rights may be subject to legal conditions or limitations.
                </p>
              </section>

              {/* Section 11 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">11. Security Measures</h2>
                <p className="mb-4">We process your personal data securely and confidentially in accordance with applicable data protection laws, including the GDPR. We implement technical and organisational controls aligned with ISO 27001 and OWASP best practices:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>End-to-end TLS 1.3, HSTS, TLS scores ≥ A</li>
                  <li>Per-tenant data separation and role-based access control</li>
                  <li>Mandatory MFA for staff</li>
                  <li>We participate in our own bug bounty platform for finding vulnerabilities</li>
                  <li>Encryption: PostgreSQL TDE at rest, AES-256-GCM; keys managed in Azure Key Vault (HSM)</li>
                  <li>Secure payment systems that comply with current industry standards and legal requirements</li>
                </ul>
                <p>
                  These me9 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">9

              {/* Section 12 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Data Breaches</h2>
                <p>
                  We will notify affected users and Datatilsynet without undue delay and, where feasible, within 72 hours of becoming aware of a personal-data breach (GDPR Art. 33-34).
                </p>
              </section>

              {/* Section 13 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">13. Data-Processing Terms (Incidental Processing)</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">13.1. Subject Matter</h3>
                    <p className="mb-2"><strong>13.1.1</strong> These terms on the Processing of Personal Data ("Terms") apply to all processing of personal data by Defend Denmark ApS, company number CVR 45824578, Reventlowsgade 18, 3th, 1651 KBH V ("Processor" or "Defend Denmark") where Defend Denmark acts as a data processor when providing customer ("Controller") service.</p>
                    <p className="mb-2"><strong>13.1.2</strong> All reference to the "Data Protection Act" shall in these Terms mean the Danish Data Protection Act (Databeskyttelsesloven) and Regulation (EU) 2016/679 of the European Parliament and the Council of 27 April 2016 ("GDPR").</p>
                    <p className="mb-2"><strong>13.1.3</strong> The terms "controller", "personal data", "data subject", "processing", "processor" and "personal data breach" shall have the meaning ascribed to them in the Data Protection Act.</p>
                    <p className="mb-2"><strong>13.1.4</strong> Defend Denmark's services do not entail any processing (access, transfer, or storage) by Defend Denmark of personal data in customer's possession. In the context of such services, these Terms apply to the extent any incidental processing of such data takes place while performing the Services and/or if any processing has been specifically agreed between the parties.</p>
                    <p><strong>13.1.5</strong> Any references to these Terms in a service agreement entered into between the parties, or in an offer made by Defend Denmark which is accepted by the Controller, as applicable, shall include acceptance of the Terms.</p>
                  </div>0 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">10
                    <h3 className="text-xl font-semibold mb-2">13.2. Parties' Obligations</h3>
                    <p className="mb-2"><strong>13.2.1</strong> The Controller is fully responsible for fulfilling its legal obligation under the Data Protection Act, including providing adequate information to data subjects and making sure that all processing is lawful. The Controller shall also ensure that it is authorized to entrust the Processor with the processing of personal data and the Controller is solely responsible for the processing instructions provided to the Processor.</p>
                    <p className="mb-2"><strong>13.2.2</strong> The Processor shall only process personal data to the extent necessary to provide the Controller the specified Services and in accordance with the Controller's written instructions. The Processor shall not process the personal data for any other purpose or in a way that does not comply with these Terms or the Data Protection Act. The Processor must promptly notify the Controller if, in its opinion, the Controller's instructions do not comply with the Data Protection Act and in such events the Processor is not obliged to follow the Controller's instructions.</p>
                    <p className="mb-2"><strong>13.2.3</strong> The Processor shall maintain the confidentiality of all personal data and it shall not disclose personal data to third parties unless in accordance with these Terms, where such authorization is provided for in an agreement between the parties, the Controller provides special permission for dissemination of information, or the Processor is legally obliged to do so.</p>
                    <p className="mb-2"><strong>13.2.4</strong> The Processor will ensure that its employees:</p>
                    <ul className="list-disc pl-6 mb-2">
                      <li>are informed of the confidential nature of the personal data processed and that they are contractually bound by an obligation of confidentiality,</li>
                      <li>are aware of their confidentiality obligations imposed by legislation,</li>
                      <li>have undertaken training on the Data Protection Act relating to the processing of personal data;</li>
                      <li>are aware of the Processor's obligations under the Data Protection Act and these Terms.</li>
                    </ul>
                  </div>1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">11
                    <h3 className="text-xl font-semibold mb-2">13.3. Security of Personal Data</h3>
                    <p className="mb-2"><strong>13.3.1</strong> The Processor shall implement appropriate technical and organizational measures, appropriate to the risk, to ensure level of security and to minimize the risk of unlawful or unauthorized processing of personal data. The measures shall seek to, as appropriate:</p>
                    <ul className="list-disc pl-6 mb-2">
                       <li>ensure ongoing confidentiality, contiguity, and availability of personal data,</li>
                       <li>ensure a process for testing and evaluating the effectiveness of measures safeguarding the processing, and</li>
                       <li>2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Data-Processing Terms (Incidental Processing)</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">12.1. Subject Matter</h3>
                    <p className="mb-2"><strong>12.1.1</strong> These terms on the Processing of Personal Data ("Terms") apply to all processing of personal data by Defend Denmark ApS, company number CVR 45824578, Reventlowsgade 18, 3th, 1651 KBH V ("Processor" or "Defend Denmark") where Defend Denmark acts as a data processor when providing customer ("Controller") service.</p>
                    <p className="mb-2"><strong>12.1.2</strong> All reference to the "Data Protection Act" shall in these Terms mean the Danish Data Protection Act (Databeskyttelsesloven) and Regulation (EU) 2016/679 of the European Parliament and the Council of 27 April 2016 ("GDPR").</p>
                    <p className="mb-2"><strong>12.1.3</strong> The terms "controller", "personal data", "data subject", "processing", "processor" and "personal data breach" shall have the meaning ascribed to them in the Data Protection Act.</p>
                    <p className="mb-2"><strong>12.1.4</strong> Defend Denmark's services do not entail any processing (access, transfer, or storage) by Defend Denmark of personal data in customer's possession. In the context of such services, these Terms apply to the extent any incidental processing of such data takes place while performing the Services and/or if any processing has been specifically agreed between the parties.</p>
                    <p><strong>12.1.5</strong> Any references to these Terms in a service agreement entered into between the parties, or in an offer made by Defend Denmark which is accepted by the Controller, as applicable, shall include acceptance of the Terms.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">12.2. Parties' Obligations</h3>
                    <p className="mb-2"><strong>12.2.1</strong> The Controller is fully responsible for fulfilling its legal obligation under the Data Protection Act, including providing adequate information to data subjects and making sure that all processing is lawful. The Controller shall also ensure that it is authorized to entrust the Processor with the processing of personal data and the Controller is solely responsible for the processing instructions provided to the Processor.</p>
                    <p className="mb-2"><strong>12.2.2</strong> The Processor shall only process personal data to the extent necessary to provide the Controller the specified Services and in accordance with the Controller's written instructions. The Processor shall not process the personal data for any other purpose or in a way that does not comply with these Terms or the Data Protection Act. The Processor must promptly notify the Controller if, in its opinion, the Controller's instructions do not comply with the Data Protection Act and in such events the Processor is not obliged to follow the Controller's instructions.</p>
                    <p className="mb-2"><strong>12.2.3</strong> The Processor shall maintain the confidentiality of all personal data and it shall not disclose personal data to third parties unless in accordance with these Terms, where such authorization is provided for in an agreement between the parties, the Controller provides special permission for dissemination of information, or the Processor is legally obliged to do so.</p>
                    <p className="mb-2"><strong>12.2.4</strong> The Processor will ensure that its employees:</p>
                    <ul className="list-disc pl-6 mb-2">
                      <li>are informed of the confidential nature of the personal data processed and that they are contractually bound by an obligation of confidentiality,</li>
                      <li>are aware of their confidentiality obligations imposed by legislation,</li>
                      <li>have undertaken training on the Data Protection Act relating to the processing of personal data;</li>
                      <li>are aware of the Processor's obligations under the Data Protection Act and these Terms.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">12.3. Security of Personal Data</h3>
                    <p className="mb-2"><strong>12.3.1</strong> The Processor shall implement appropriate technical and organizational measures, appropriate to the risk, to ensure level of security and to minimize the risk of unlawful or unauthorized processing of personal data. The measures shall seek to, as appropriate:</p>
                    <ul className="list-disc pl-6 mb-2">
                       <li>ensure ongoing confidentiality, contiguity, and availability of personal data,</li>
                       <li>ensure a process for testing and evaluating the effectiveness of measures safeguarding the processing, and</li>
                       <li>ensure that adequate security measures are taken, having regards to the nature of the personal data processed, e.g. in terms of access control, the use of pseudo-identity and encryption.</li>
                    </ul>
                    <p><strong>12.3.2</strong> In the event a Controller deems it necessary to implement extra security measures, in addition to the measures the Processor has implemented in relation to specific services, the parties shall enter into specific agreement in relation to such additional service.</p>
                  </div>

                  <div>
                     <h3 className="text-xl font-semibold mb-2">12.4. Personal Data Breach</h3>
                     <p className="mb-2"><strong>12.4.1</strong> The Processor shall, without undue delay, notify the Controller after becoming aware of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored, or otherwise processed (“Personal Data Breach”).</p>
                     <p className="mb-2"><strong>12.4.2</strong> The Processor's notification shall include all information referred to in Article 33(3) of the GDPR.</p>
                     <p><strong>12.4.3</strong> The parties agree that the Controller is solely responsible for and has the sole right to determine: (a) whether to provide notice of the Personal Data Breach to any data subjects, supervisory authorities, or others; and (b) how such notices shall be sent.</p>
                  </div>

                  <div>
                     <h3 className="text-xl font-semibold mb-2">12.5. Subprocessors</h3>
                     <p className="mb-2"><strong>12.5.1</strong> If the Processor appoints a third-party subcontractor to provide the services, or parts of it, and that requires the subcontractor's processing of personal data, the subcontractor shall be considered as Sub Processor in the meaning of the Data Protection Act.</p>
                     <p className="mb-2"><strong>12.5.2</strong> The Processor may only authorize a Sub-Processor to process personal data if the Processor has entered into a written agreement with the Sub-Processor that contains terms substantially the same as those set out in these Terms in relation to the security of personal data.</p>
                     <p className="mb-2"><strong>12.5.3</strong> Where the Sub-Processor fails to fulfill its obligations under such a written agreement, the Processor remains fully liable to the Controller.</p>
                     <p><strong>12.5.4</strong> If the Processor appoints a new Sub-Processor, it shall inform the Controller thereof and provide the Controller 14 days to object to such an appointment.</p>
                  </div>

                  <div>
                      <h3 className="text-xl font-semibold mb-2">12.6. Transfer of Personal Data Outside the EEA</h3>
                      <p><strong>12.6.1</strong> The Processor must not transfer personal data outside the European Economic Area (“EEA”) without the Controller's consent.</p>
                  </div>

                  <div>
                      <h3 className="text-xl font-semibold mb-2">12.7. Data Subject Requests</h3>
                      <p className="mb-2"><strong>12.7.1</strong> The Processor shall assist the Controller, to the extent reasonable taking into consideration the nature of the processing, in responding to data subject requests. All work carried out by the Processor in relation to such assistance shall be subject to the parties' Software Agreement and/or the Processor's price list at any given time.</p>
                      <p><strong>12.7.2</strong> The responsibility for responding to requests from data subjects shall always remain with the Controller.</p>
                  </div>

                  <div>
                     <h3 className="text-xl font-semibold mb-2">12.8. Data Protection Impact Assessment and Prior Consultation</h3>
                     <p cla3 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">13

                  <div>
                     <h3 className="text-xl font-semibold mb-2">12.9. Compliance and Audit</h3>
                     <p className="mb-2"><strong>12.9.1</strong> The Processor shall make all information available to the Controller that are necessary to demonstrate compliance with these Terms, and to the extent possible taking into consideration the nature of the service, allow for and contribute to audits by the Controller, or an auditor mandated by the Controller, for the purpose of verifying the Processor's compliance with these Terms. The audits shall only relate to the services carried out by the Processor on behalf of the Controller and the scope of the audits shall take into account the Processor's obligations, such as in relation to security. Auditors and scope of audits are thus subject to the Processor's consent.</p>
                     <p className="mb-2"><strong>12.9.2</strong> The Processor shall furthermore, in accordance with legal obligations thereof, ensure regulators' access to the personal data processed by the Processor on behalf of Controllers which are classified as regulated entities.</p>
                     <p><st4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">14
                  <div>
                      <h3 className="text-xl font-semibold mb-2">12.10. Duration, Data Return and Deletion</h3>
                      <p className="mb-2"><strong>12.10.1</strong> These Terms shall remain in full force and effect as long as (a) The parties' Software Agreement remains in effect, or (b) The Processor provides the Controller with one or more services.</p>
                      <p className="mb-2"><strong>12.10.2</strong> Upon termination of service, the Processor shall, at the choice of the Controller, delete or return all personal and client data to the Controller and delete existing copies. If the return of data calls for substantive work on behalf of the Processor, such work shall be subject to service fee in accordance with the Processor's price list at any given time.</p>
                      <p><strong>12.10.3</strong> The Processor shall ensure data on security weaknesses and proofs thereof will not cause damage for the Customer, e.g. security and data breaches.</p>
                  </div>

                  <div>
                      <h3 className="text-xl font-semibold mb-2">12.11. Notifications to the Controller</h3>
                      <p className="mb-2"><strong>12.11.1</strong> Notifications to the Controller based on these Terms shall be sent to the Controller's registered contact person. The Controller is responsible for providing the Processor with contact details of such a person. If contact persons are listed in the parties' Software Agreement, a notification shall be sent to that contact person, unless parties have agreed otherwise.</p>
                      <p className="mb-2"><strong>12.11.2</strong> The Controller is responsible for providing the Processor with updated contact details.</p>
                      <p><s5 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">15
                  <div>
                       <h3 className="text-xl font-semibold mb-2">12.12. Miscellaneous</h3>
                       <p className="mb-2"><strong>12.12.1</strong> The parties' Software Agreement and Defend Denmark's General Terms shall, in addition to these Terms, apply to the Processor's processing of personal data on behalf of the Controller, including provisions regarding limitation of liability. In the event of any inconsistency between the provisions of these Terms and the provisions of Defend Denmark's General Terms or the parties' Software Agreement, the provisions of these Terms shall prevail.</p>
                       <p className="mb-2"><strong>12.12.2</strong> These Terms are governed by the laws of Denmark. Any disputes arising from or in connection with these Terms shall be brought exclusively before the City Court of Copenhagen.</p>
                       <p><strong>12
              </section>

              {/* Section 16 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">16. Data Protection Agency</h2>
                <p>
                  For any complaint regarding your personal data, you have the right to lodge a complaint with the competent data protection authority, Datatilsynet (Danish Data Protection Agency) at <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.datatilsynet.dk</a>.
                </p>
                <p className="mt-6 text-muted-foreground text-sm">Last reviewed: 23 Oct 2025</p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
