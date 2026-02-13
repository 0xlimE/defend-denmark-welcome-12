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
            title="Privacy Policy & Data Processing Terms"
            subtitle="Combined privacy policy and data processing terms"
          />

          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Defend Denmark ApS – Privacy Policy & Data Processing Terms</h1>
                <p className="text-muted-foreground">Effective Date: 20 January 2026</p>
              </div>

              {/* Section 1 - Subject Matter */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. SUBJECT MATTER</h2>
                
                <p className="mb-4">
                  <strong>1.1</strong> These terms on the Processing of Personal Data ("Terms") apply to all processing of personal data by Defend Denmark ApS, CVR 45824578, Rodosvej 15, 2300 KBH S ("Processor" or "Defend Denmark") where Defend Denmark acts as a data processor when providing customer ("Controller") service.
                </p>

                <p className="mb-4">
                  <strong>1.2</strong> All reference to the "Data Protection Act" shall in these Terms mean the Danish Data Protection Act (Databeskyttelsesloven) and Regulation (EU) 2016/679 of the European Parliament and the Council of 27 April 2016, on the protection of natural persons regarding the processing of personal data on the free movement of such data, which entered into force on 25 May 2018 ("GDPR").
                </p>

                <p className="mb-4">
                  <strong>1.3</strong> The terms "controller", "personal data", "data subject", "processing", "processor" and "personal data breach" shall have the meaning ascribed to them in the Data Protection Act.
                </p>

                <p className="mb-4">
                  <strong>1.4</strong> Defend Denmark's services do not entail any processing (access, transfer, or storage) by Defend Denmark of personal data in customer's possession. In the context of such services, these Terms apply to the extent any incidental processing of such data takes place while performing the Services and/or if any processing has been specifically agreed between the parties.
                </p>

                <p>
                  <strong>1.5</strong> Any references to these Terms in a service agreement entered into between the parties, or in an offer made by Defend Denmark which is accepted by the Controller, as applicable, shall include acceptance of the Terms.
                </p>
              </section>

              {/* Section 2 - Parties' Obligations */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. PARTIES' OBLIGATIONS</h2>
                
                <p className="mb-4">
                  <strong>2.1</strong> The Controller is fully responsible for fulfilling its legal obligation under the Data Protection Act, including providing adequate information to data subjects and making sure that all processing is lawful. The Controller shall also ensure that it is authorized to entrust the Processor with the processing of personal data and the Controller is solely responsible for the processing instructions provided to the Processor.
                </p>

                <p className="mb-4">
                  <strong>2.2</strong> The Processor shall only process personal data to the extent necessary to provide the Controller the specified Services and in accordance with the Controller's written instructions. The Processor shall not process the personal data for any other purpose or in a way that does not comply with these Terms or the Data Protection Act. The Processor must promptly notify the Controller if, in its opinion, the Controller's instructions do not comply with the Data Protection Act and in such events the Processor is not obliged to follow the Controller's instructions.
                </p>

                <p className="mb-4">
                  <strong>2.3</strong> The Processor shall maintain the confidentiality of all personal data and it shall not disclose personal data to third parties unless in accordance with these Terms, where such authorization is provided for in an agreement between the parties, the Controller provides special permission for dissemination of information, or the Processor is legally obliged to do so.
                </p>

                <p className="mb-2"><strong>2.4</strong> The Processor will ensure that its employees:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>are informed of the confidential nature of the personal data processed and that they are contractually bound by an obligation of confidentiality,</li>
                  <li>are aware of their confidentiality obligations imposed by legislation,</li>
                  <li>have undertaken training on the Data Protection Act relating to the processing of personal data,</li>
                  <li>are aware of the Processor's obligations under the Data Protection Act and these Terms.</li>
                </ul>
              </section>

              {/* Section 3 - Security of Personal Data */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. SECURITY OF PERSONAL DATA</h2>
                
                <p className="mb-2"><strong>3.1</strong> The Processor shall implement appropriate technical and organizational measures, appropriate to the risk, to ensure level of security and to minimize the risk of unlawful or unauthorized processing of personal data. The measures shall seek to, as appropriate:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>ensure ongoing confidentiality, contiguity, and availability of personal data,</li>
                  <li>ensure a process for testing and evaluating the effectiveness of measures safeguarding the processing, and</li>
                  <li>ensure that adequate security measures are taken, having regards to the nature of the personal data processed, e.g. in terms of access control, the use of pseudo-identity and encryption.</li>
                </ul>

                <p>
                  <strong>3.2</strong> In the event a Controller deems it necessary to implement extra security measures, in addition to the measures the Processor has implemented in relation to specific services, the parties shall enter into specific agreement in relation to such additional service.
                </p>
              </section>

              {/* Section 4 - Personal Data Breach */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. PERSONAL DATA BREACH</h2>
                
                <p className="mb-4">
                  <strong>4.1</strong> The Processor shall, without undue delay, notify the Controller after becoming aware of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored, or otherwise processed ("Personal Data Breach").
                </p>

                <p className="mb-4">
                  <strong>4.2</strong> The Processor's notification shall include all information referred to in Article 33(3) of the GDPR.
                </p>

                <p className="mb-2"><strong>4.3</strong> The parties agree that the Controller is solely responsible for and has the sole right to determine:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>whether to provide notice of the Personal Data Breach to any data subjects, supervisory authorities, or others; and</li>
                  <li>how such notices shall be sent.</li>
                </ul>
              </section>

              {/* Section 5 - Subprocessors */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. SUBPROCESSORS</h2>
                
                <p className="mb-4">
                  <strong>5.1</strong> If the Processor appoints a third-party subcontractor to provide the services, or parts of it, and that requires the subcontractor's processing of personal data, the subcontractor shall be considered as Sub Processor in the meaning of the Data Protection Act.
                </p>

                <p className="mb-4">
                  <strong>5.2</strong> The Processor may only authorize a Sub-Processor to process personal data if the Processor has entered into a written agreement with the Sub-Processor that contains terms substantially the same as those set out in these Terms in relation to the security of personal data.
                </p>

                <p className="mb-4">
                  <strong>5.3</strong> Where the Sub-Processor fails to fulfill its obligations under such a written agreement, the Processor remains fully liable to the Controller.
                </p>

                <p>
                  <strong>5.4</strong> If the Processor appoints a new Sub-Processor, it shall inform the Controller thereof and provide the Controller 14 days to object to such an appointment.
                </p>
              </section>

              {/* Section 6 - Transfer of Personal Data Outside the EEA */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">6. TRANSFER OF PERSONAL DATA OUTSIDE THE EEA</h2>
                
                <p>
                  <strong>6.1</strong> The Processor must not transfer personal data outside the European Economic Area ("EEA") without the Controller's consent.
                </p>
              </section>

              {/* Section 7 - Data Subject Requests */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">7. DATA SUBJECT REQUESTS</h2>
                
                <p className="mb-4">
                  <strong>7.1</strong> The Processor shall assist the Controller, to the extent reasonable taking into consideration the nature of the processing, in responding to data subject requests. All work carried out by the Processor in relation to such assistance shall be subject to the parties' Software Agreement and/or the Processor's price list at any given time.
                </p>

                <p>
                  <strong>7.2</strong> The responsibility for responding to requests from data subjects shall always remain with the Controller.
                </p>
              </section>

              {/* Section 8 - Data Protection Impact Assessment and Prior Consultation */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">8. DATA PROTECTION IMPACT ASSESSMENT AND PRIOR CONSULTATION</h2>
                
                <p className="mb-4">
                  <strong>8.1</strong> Upon prior written request of the Controller, the Processor shall assist the Controller to carry out data protection impact assessment (DPIA) and in conducting prior consultation with Datatilsynet (Danish Data Protection Agency). Such assistance shall however always take into account the nature of processing and the information available to the Processor.
                </p>

                <p>
                  <strong>8.2</strong> All assistance with DPIA or prior consultation shall be subject to service fees in accordance with the Processor's price list at any given time.
                </p>
              </section>

              {/* Section 9 - Compliance and Audit */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">9. COMPLIANCE AND AUDIT</h2>
                
                <p className="mb-4">
                  <strong>9.1</strong> The Processor shall make all information available to the Controller that are necessary to demonstrate compliance with these Terms, and to the extent possible taking into consideration the nature of the service, allow for and contribute to audits by the Controller, or an auditor mandated by the Controller, for the purpose of verifying the Processor's compliance with these Terms. The audits shall only relate to the services carried out by the Processor on behalf of the Controller and the scope of the audits shall take into account the Processor's obligations, such as in relation to security. Auditors and scope of audits are thus subject to the Processor's consent.
                </p>

                <p className="mb-4">
                  <strong>9.2</strong> The Processor shall furthermore, in accordance with legal obligations thereof, ensure regulators' access to the personal data processed by the Processor on behalf of Controllers which are classified as regulated entities.
                </p>

                <p>
                  <strong>9.3</strong> All assistance in relation to audits shall be subject to service fees in accordance with the Processor's price list at any given time.
                </p>
              </section>

              {/* Section 10 - Duration, Data Return and Deletion */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">10. DURATION, DATA RETURN AND DELETION</h2>
                
                <p className="mb-2"><strong>10.1</strong> These Terms shall remain in full force and effect as long as:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>The parties' Software Agreement remains in effect, or</li>
                  <li>The Processor provides the Controller with one or more services.</li>
                </ul>

                <p className="mb-4">
                  <strong>10.2</strong> Upon termination of service, the Processor shall, at the choice of the Controller, delete or return all personal and client data to the Controller and delete existing copies. If the return of data calls for substantive work on behalf of the Processor, such work shall be subject to service fee in accordance with the Processor's price list at any given time.
                </p>

                <p className="mb-4">
                  <strong>10.3</strong> The Processor shall ensure data on security weaknesses and proofs thereof will not cause damage for the Customer, e.g. security and data breaches.
                </p>

                <h3 className="text-xl font-semibold mb-3">10.4 Third-Party Authentication Providers</h3>
                <p className="mb-4">We allow users to authenticate using third-party identity providers, including Google, Microsoft, and MitID (Danish national eID), through Single Sign-On (SSO).</p>

                <p className="mb-2"><strong>10.4.1 Data Collected</strong></p>
                <p className="mb-2">When a user signs in using Google, Microsoft, or MitID, we collect the following personal data provided by the authentication provider:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name</li>
                  <li>Email address</li>
                </ul>
                <p className="mb-4">No additional account data, contacts, profile information, or content is accessed.</p>

                <p className="mb-2"><strong>10.4.2 Purpose of Processing</strong></p>
                <p className="mb-2">The collected name and email address are processed for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>To create and maintain a user account</li>
                  <li>To authenticate users and enable secure access to our services</li>
                  <li>To identify users within the application</li>
                  <li>To provide essential service-related communication, where applicable</li>
                </ul>
                <p className="mb-4">The data is not used for advertising, not sold, and not shared with third parties, except where required by applicable law.</p>

                <p className="mb-2"><strong>10.4.3 Data Storage and Retention</strong></p>
                <p className="mb-4">All personal data obtained through Google, Microsoft, or MitID SSO is stored securely and protected using appropriate technical and organizational measures. Data is retained only for as long as necessary to fulfill the purposes described above or to comply with legal obligations.</p>
                <p className="mb-4">Financial and transaction records are retained for 5 years in accordance with the Danish Bookkeeping Act (Bogføringsloven).</p>
                <p>Users may request access, correction, or deletion of their personal data in accordance with applicable data protection laws.</p>
              </section>

              {/* Section 11 - Data Sharing */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">11. DATA SHARING</h2>
                
                <p className="mb-4">
                  <strong>11.1</strong> Defend Denmark may share anonymized and aggregated vulnerability data with DKCERT and SektorCERT to support national cybersecurity efforts. Such data will not contain any personal identifiers.
                </p>

                <p>
                  <strong>11.2</strong> Personal data will not be shared with third parties except as described in these Terms or where required by law.
                </p>
              </section>

              {/* Section 12 - Notifications to the Controller */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">12. NOTIFICATIONS TO THE CONTROLLER</h2>
                
                <p className="mb-4">
                  <strong>12.1</strong> Notifications to the Controller based on these Terms shall be sent to the Controller's registered contact person. The Controller is responsible for providing the Processor with contact details of such a person. If contact persons are listed in the parties' Software Agreement, a notification shall be sent to that contact person, unless parties have agreed otherwise.
                </p>

                <p className="mb-4">
                  <strong>12.2</strong> The Controller is responsible for providing the Processor with updated contact details.
                </p>

                <p>
                  <strong>12.3</strong> The Processor can also publish all notifications, subject to these Terms, on its websites, on the condition that the Controller's contact persons shall be informed of such notifications and have the opportunity to register for such notifications.
                </p>
              </section>

              {/* Section 13 - Miscellaneous */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">13. MISCELLANEOUS</h2>
                
                <p className="mb-4">
                  <strong>13.1</strong> The parties' Software Agreement and Defend Denmark's General Terms shall, in addition to these Terms, apply to the Processor's processing of personal data on behalf of the Controller, including provisions regarding limitation of liability. In the event of any inconsistency between the provisions of these Terms and the provisions of Defend Denmark's General Terms or the parties' Software Agreement, the provisions of these Terms shall prevail.
                </p>

                <p className="mb-4">
                  <strong>13.2</strong> These Terms are governed by the laws of Denmark. Any disputes arising from or in connection with these Terms shall be brought exclusively before the City Court of Copenhagen (Københavns Byret).
                </p>

                <p>
                  <strong>13.3</strong> The Processor reserves the right to amend these Terms in accordance with changes in relevant law or regulations or due to changes in how personal data is processed. The Processor shall inform the Controller of any changes made to these Terms. If changes, made to these Terms, materially affect the rights and obligations of the Controller, such changes shall not take effect until after a predetermined time, and if the Controller does not accept such changes after a notification is sent to the Controller, the Controller shall have the right to terminate the appropriate service.
                </p>
              </section>

              {/* Contact */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">14. CONTACT</h2>
                <p className="mb-4">Questions, requests or complaints:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a></li>
                  <li>Postal: Defend Denmark ApS, Rodosvej 15, 2300 KBH S</li>
                </ul>
                <p className="mt-4">
                  Supervisory Authority: Datatilsynet (Danish Data Protection Agency) – <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.datatilsynet.dk</a>
                </p>
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
