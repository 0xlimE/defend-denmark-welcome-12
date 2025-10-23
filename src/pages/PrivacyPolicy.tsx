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
                  Unless otherwise stated, Defend Denmark acts as the data controller for the personal data described in this policy. When we handle vulnerability reports or other data on behalf of a customer, we act as a data processor and our Data-Processing Terms (see Section 13) apply.
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
                        <td className="border border-gray-300 px-4 py-2">Bank/IBAN details (security researchers), invoice data (customers), payment status, payment token identifiers from external providers (we do not store card details)</td>
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
                <p className="mb-4 text-sm italic">
                  Note: We use external payment service providers to process transactions. This means we do not store your credit card or bank information; all payment data is encrypted and handled securely by our providers.
                </p>
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
                <p className="mb-4">We share personal data only when necessary and only with recipients located within the EEA:</p>
                
                <h3 className="text-xl font-semibold mb-3">Service Providers (Data Processors)</h3>
                <p className="mb-3">We engage authorized service providers, acting as data processors on our behalf, to support the delivery, operation, security, and improvement of our services. All service providers are located within the EEA. These providers may access personal data only to the extent strictly necessary for the performance of their tasks. These include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Hosting and infrastructure:</strong> Microsoft Azure (EU regions) – hosting and cloud services</li>
                  <li><strong>Payment processing:</strong> Stripe Payments EU – payouts & invoicing</li>
                  <li><strong>Communications:</strong> Mailgun EU – transactional e-mail; push notification services</li>
                  <li><strong>Customer relationship management:</strong> CRM platforms and ticketing systems</li>
                  <li><strong>Development and maintenance:</strong> Software development providers for platform programming and support</li>
                  <li><strong>Security services:</strong> IT security service providers; remote identity verification services (MitID, criminal record verification)</li>
                  <li><strong>Electronic signature solutions</strong> (for contracts and agreements)</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Other Recipients</h3>
                <p className="mb-3">Strictly within the scope of their respective duties, we may also grant access to your personal data to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Customers</strong> – limited to the data required to validate and remediate the vulnerability you report</li>
                  <li><strong>Internal teams</strong> – responsible for the administration and management of the platform</li>
                  <li><strong>Audit and control authorities</strong> – including statutory auditors</li>
                  <li><strong>Public authorities</strong> – (e.g., tax or social security bodies, Datatilsynet) upon request, to comply with legal obligations</li>
                  <li><strong>Judicial authorities</strong> – legal professionals, or debt recovery agencies in the context of legal proceedings or enforcement measures</li>
                  <li><strong>Cybersecurity organizations</strong> – We may share anonymized vulnerability reports (without any personal data) with DKCERT (Danish Computer Emergency Response Team) and SektorCERT in Denmark to contribute to national cybersecurity efforts and threat intelligence</li>
                </ul>
                
                <p className="mb-4">All processors are bound by written data-processing agreements and appropriate security measures, subject to strict confidentiality obligations.</p>
              </section>

              {/* Section 9 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">9. International Transfers</h2>
                <p className="mb-4">
                  <strong>We do not transfer personal data outside the European Economic Area (EEA).</strong>
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
                  These measures are designed to protect your data against accidental or unlawful destruction, loss, alteration, publication, unauthorised disclosure or access, misuse, or any other form of unlawful processing, ensuring the ongoing security, integrity, and confidentiality of your personal data.
                </p>
              </section>

              {/* Section 12 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Data Breaches</h2>
                <p>
                  We will notify affected users and Datatilsynet without undue delay and, where feasible, within 72 hours of becoming aware of a personal-data breach (GDPR Art. 33-34).
                </p>
              </section>

              {/* Section 13 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">13. Data-Processing Terms (Controller → Processor)</h2>
                <p className="mb-4">When Defend Denmark processes personal data on behalf of a customer (e.g., reproducing a vulnerability that includes customer data), the following applies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We process data solely on documented instructions from the customer.</li>
                  <li>Sub-processors must be pre-approved and bound by equivalent obligations; customers have 14-days' right to object to a new sub-processor.</li>
                  <li>No transfers outside the EEA without the customer's prior written consent.</li>
                  <li>On contract termination we, at the customer's choice, delete or return all personal data and certify deletion.</li>
                  <li>We assist the customer with data-subject requests, DPIAs, and audits (reasonable notice, no more than once per year).</li>
                  <li>Liability limits follow the parties' main service agreement unless mandatory law states otherwise.</li>
                </ul>
                <p className="mt-4">
                  A full Data-Processing Agreement (DPA) is available at defenddenmark.dk/dpa.
                </p>
              </section>

              {/* Section 14 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">14. Automated Decision-Making</h2>
                <p>
                  We do not employ automated decision-making that produces legal or similarly significant effects on users (GDPR Art. 22).
                </p>
              </section>

              {/* Section 15 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">15. Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons.
                </p>
                <p className="mb-4">
                  When we make changes, we will revise the "Effective Date" at the top of this page. If the changes are significant, we will notify you through appropriate means, such as by email or via a notice on our website, before they take effect. Material changes will be announced at least 14 days in advance via e-mail and in-app notice.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your personal data.
                </p>
              </section>

              {/* Section 16 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">16. Contact</h2>
                <p className="mb-4">Questions, requests or complaints:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a></li>
                  <li>Postal: Defend Denmark ApS, Reventlowsgade 18, 3th, 1651 KBH V</li>
                </ul>
              </section>

              {/* Section 17 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">17. Data Protection Agency</h2>
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
