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
            subtitle="How Defend Denmark processes personal data"
          />

          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Defend Denmark ApS – Privacy Policy</h1>
                <p className="text-muted-foreground">Version 2.0 • Effective Date: 18 August 2026</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Related documents: <a href="/terms-of-service" className="text-primary hover:underline">Terms of Service</a> · <a href="/data-protection" className="text-primary hover:underline">Our Role Under GDPR</a>
                </p>
              </div>

              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Who We Are</h2>
                <p className="mb-4">
                  Defend Denmark ApS operates a bug bounty platform on which verified security researchers ("Defenders") identify and report security vulnerabilities in the externally facing systems of our customers.
                </p>
                <p className="mb-2">This Privacy Policy explains how we process personal data for which we are the data controller:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Defend Denmark ApS</strong>, CVR 45824578</li>
                  <li>Nørrebrogade 45D 4TH, 2200 København N, Denmark</li>
                  <li><a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a></li>
                </ul>
                <p>
                  "GDPR" means Regulation (EU) 2016/679. "Danish Data Protection Act" means Databeskyttelsesloven. We are not required to appoint a Data Protection Officer, and questions should be directed to the address above.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. What This Policy Does Not Cover</h2>
                <p className="mb-4">
                  Our services are designed so that we do not process personal data on behalf of our customers. The platform holds vulnerability records relating to technical assets — such as hosts, endpoints, parameters and reproduction steps — not records relating to identified or identifiable individuals, and our customers' personal data is not transferred to us as part of the services.
                </p>
                <p>
                  Where personal data is inadvertently exposed during testing despite these controls, our role and our handling of it are described in Section 7 below and in <a href="/data-protection" className="text-primary hover:underline">Our Role Under GDPR</a>.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Whose Personal Data We Process</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Customer contacts</strong> — individuals who act on behalf of our customers or prospective customers</li>
                  <li><strong>Defenders</strong> — security researchers who register for and participate on the platform</li>
                  <li><strong>Website visitors</strong> — people who visit defenddenmark.dk or contact us through it</li>
                  <li><strong>External vulnerability reporters</strong> — people who report a vulnerability to us outside a customer program</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. What We Collect, Why, and On What Legal Basis</h2>

                <h3 className="text-xl font-semibold mb-3">4.1 Customer Contacts</h3>
                <p className="mb-2"><strong>Data:</strong> name, job title, business email address, business telephone number, employer, and correspondence with us.</p>
                <p className="mb-2"><strong>Purposes:</strong> entering into and administering the customer agreement, providing and supporting the services, program administration, vulnerability triage communication, invoicing, and maintaining the business relationship.</p>
                <p className="mb-4"><strong>Legal basis:</strong> Article 6(1)(b) GDPR where the individual is our contracting counterparty; otherwise Article 6(1)(f) GDPR, our legitimate interest in administering a business relationship with a corporate customer. Article 6(1)(c) GDPR applies where retention is required by law.</p>

                <h3 className="text-xl font-semibold mb-3">4.2 Defenders</h3>
                <p className="mb-2"><strong>Data:</strong> name, email address, the outcome of identity verification via MitID, the outcome of background verification, payment and tax details necessary to pay bounty rewards, platform activity, submitted reports, and reward history.</p>
                <p className="mb-2"><strong>Purposes:</strong> verifying the identity and suitability of Defenders before granting platform access, administering the Defender Agreement, operating and securing the platform, triaging reports, preventing abuse and fraud, and paying rewards.</p>
                <p className="mb-4"><strong>Legal basis:</strong> Article 6(1)(b) GDPR for the performance of the Defender Agreement; Article 6(1)(c) GDPR for bookkeeping and tax obligations; and Article 6(1)(f) GDPR, our legitimate interest — and the corresponding interest of our customers — in ensuring that only verified and trustworthy individuals are able to test customer systems.</p>
                <p className="mb-4">
                  <strong>Background verification.</strong> Verification of an applicant's criminal record forms part of our onboarding. We process the outcome of that verification rather than retaining the underlying record. Such processing is carried out with the applicant's consent and in accordance with section 8 of the Danish Data Protection Act, which governs the processing of information relating to criminal offences. A Defender may withdraw consent at any time, in which case we can no longer grant or maintain platform access.
                </p>

                <h3 className="text-xl font-semibold mb-3">4.3 Website Visitors and Enquiries</h3>
                <p className="mb-2"><strong>Data:</strong> the contact details and message content you submit through a form or by email, and the technical data necessary to deliver the website to your browser.</p>
                <p className="mb-4"><strong>Legal basis:</strong> Article 6(1)(f) GDPR, our legitimate interest in responding to enquiries and in operating and securing our website.</p>

                <h3 className="text-xl font-semibold mb-3">4.4 External Vulnerability Reporters</h3>
                <p className="mb-2"><strong>Data:</strong> the contact details you choose to give us and the content of your report.</p>
                <p className="mb-4"><strong>Legal basis:</strong> Article 6(1)(f) GDPR, our legitimate interest — and the public interest — in receiving, assessing and coordinating the remediation of security vulnerabilities. You may report anonymously.</p>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Third-Party Authentication Providers</h2>
                <p className="mb-4">
                  We allow users to authenticate using third-party identity providers, including Google, Microsoft, and MitID (Danish national eID), through Single Sign-On (SSO).
                </p>

                <h3 className="text-xl font-semibold mb-3">5.1 Data Collected</h3>
                <p className="mb-2">When a user signs in using Google, Microsoft, or MitID, we collect the following personal data provided by the authentication provider:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name</li>
                  <li>Email address</li>
                </ul>
                <p className="mb-4">No additional account data, contacts, profile information, or content is accessed.</p>

                <h3 className="text-xl font-semibold mb-3">5.2 Purpose of Processing</h3>
                <p className="mb-2">The collected name and email address are processed for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To create and maintain a user account</li>
                  <li>To authenticate users and enable secure access to our services</li>
                  <li>To identify users within the application</li>
                  <li>To provide essential service-related communication, where applicable</li>
                </ul>
                <p>The data is not used for advertising, not sold, and not shared with third parties, except where required by applicable law.</p>
              </section>

              {/* Section 6 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Cookies</h2>
                <p className="mb-4">
                  Our website uses only cookies and equivalent storage that are strictly necessary for the site to function and to remember your language preference. We do not use advertising, profiling or third-party analytics cookies on this website.
                </p>
                <p>
                  If we introduce any non-essential cookies in the future, we will obtain your consent first, in accordance with the Danish Executive Order on Cookies (cookiebekendtgørelsen) and Article 6(1)(a) GDPR.
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Personal Data Encountered During Security Testing</h2>
                <p className="mb-4">
                  Defenders are required, under the Defender Agreement and the program rules applicable to each customer program, to confine testing to the assets within the approved scope, to stop testing and report immediately upon encountering personal data, and not to copy, download, retain, exfiltrate or upload personal data to the platform. Customers are correspondingly required not to submit personal data to the platform and to use synthetic or test data in any test accounts.
                </p>
                <p className="mb-4">
                  Where personal data nevertheless appears on the platform, we notify the affected customer without undue delay and securely remove the data without retaining or reproducing it beyond what is strictly necessary to document and validate the relevant vulnerability.
                </p>
                <p>
                  We carry out that detection, quarantine and removal for our own purposes — platform integrity, data minimisation, and compliance with our own legal obligations — and not on a customer's instructions. Consistent with Article 28(10) GDPR, we therefore act as an independent data controller in respect of that narrow processing, on the basis of our legitimate interests under Article 6(1)(f) GDPR.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Who We Share Personal Data With</h2>
                <p className="mb-2">We share personal data only where necessary, and only with:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Service providers</strong> that support our platform and business — such as hosting, email, identity verification and payment providers. Each acts as our data processor under a written data processing agreement. A current list of these sub-suppliers, including hosting locations, is available on request at <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a>.</li>
                  <li><strong>Our customers</strong>, where a Defender participates in that customer's program, to the extent necessary to triage and remediate a report. We do not disclose a Defender's identity to a customer without the Defender's explicit permission, except where required by law or where the Defender has acted outside the approved scope.</li>
                  <li><strong>Affected vendors and national CERT units</strong>, including DKCERT and SektorCERT, in respect of vulnerabilities that affect third-party products or national infrastructure. Data shared for this purpose is aggregated or anonymised and contains no personal identifiers.</li>
                  <li><strong>Professional advisers and authorities</strong>, where required by law or necessary to establish, exercise or defend legal claims.</li>
                </ul>
                <p>We do not sell personal data, and we do not use it for advertising.</p>
              </section>

              {/* Section 9 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Transfers Outside the EEA</h2>
                <p>
                  Our platform and the personal data described in this policy are hosted within the European Economic Area. Where a transfer outside the EEA is unavoidable, we carry it out only on the basis of a valid transfer mechanism under Chapter V GDPR, such as an adequacy decision or the European Commission's Standard Contractual Clauses, together with any supplementary measures required. Details are available on request.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">10. How Long We Keep Personal Data</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Customer contact data:</strong> for the duration of the customer relationship and thereafter for as long as necessary to handle any claim arising from the agreement.</li>
                  <li><strong>Defender account and verification data:</strong> for as long as the Defender is active on the platform, and thereafter only as required to handle claims, to meet legal obligations, or to prevent a previously excluded individual from re-registering.</li>
                  <li><strong>Financial and transaction records, including bounty reward payments:</strong> five years from the end of the financial year to which they relate, in accordance with the Danish Bookkeeping Act (Bogføringsloven).</li>
                  <li><strong>Enquiries and correspondence:</strong> for as long as necessary to handle the matter and to document what was agreed.</li>
                  <li><strong>Personal data inadvertently exposed during testing:</strong> deleted as soon as it is identified and validated, as described in Section 7.</li>
                </ul>
                <p>When a retention period ends, we delete or irreversibly anonymise the data.</p>
              </section>

              {/* Section 11 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">11. Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect personal data against unauthorised or unlawful processing and against accidental loss, destruction or damage. These include access control on a least-privilege basis, multi-factor authentication, encryption of data in transit and at rest, logging and monitoring, secure development and vulnerability management practices, background verification of personnel and Defenders, contractual confidentiality obligations, and a documented incident response process.
                </p>
                <p>
                  A summary of our technical and organizational measures is available to customers and prospective customers on request at <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a>.
                </p>
              </section>

              {/* Section 12 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Your Rights</h2>
                <p className="mb-2">Under the GDPR you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>request access to the personal data we hold about you;</li>
                  <li>have inaccurate personal data corrected;</li>
                  <li>have personal data erased, in certain circumstances;</li>
                  <li>have our processing restricted, in certain circumstances;</li>
                  <li>receive personal data you have provided in a structured, commonly used and machine-readable format, and have it transmitted to another controller, where processing is based on consent or on a contract and carried out by automated means;</li>
                  <li>object to processing based on our legitimate interests, on grounds relating to your particular situation; and</li>
                  <li>withdraw consent at any time, where processing is based on consent. Withdrawal does not affect the lawfulness of processing carried out before withdrawal.</li>
                </ul>
                <p className="mb-4">
                  These rights are subject to conditions and exceptions under applicable law. To exercise them, contact <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a>. We respond within one month, and will tell you if we need longer.
                </p>
                <p>
                  We do not use personal data for automated decision-making or profiling that produces legal effects or similarly significantly affects you.
                </p>
              </section>

              {/* Section 13 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">13. Complaints</h2>
                <p>
                  If you are unhappy with how we process your personal data, please contact us first so that we can try to resolve it. You also have the right to lodge a complaint with the Danish Data Protection Agency: Datatilsynet, Carl Jacobsens Vej 35, 2500 Valby — <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.datatilsynet.dk</a>.
                </p>
              </section>

              {/* Section 14 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">14. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy to reflect changes in our services or in applicable law. The version and effective date at the top of this page indicate when it was last changed. Where a change materially affects your rights, we will notify affected individuals and customer contacts directly.
                </p>
              </section>

              {/* Section 15 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">15. Contact</h2>
                <p className="mb-4">Questions, requests or complaints:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a></li>
                  <li>Postal: Defend Denmark ApS, Nørrebrogade 45D 4TH, 2200 KBH N, Denmark</li>
                  <li>CVR: 45824578</li>
                </ul>
                <p className="mt-4">
                  Supervisory Authority: Datatilsynet (Danish Data Protection Agency) – <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.datatilsynet.dk</a>
                </p>
                <p className="mt-6 text-muted-foreground text-sm">Last updated: 18 August 2026</p>
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
