import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";

const GdprRole = () => {
  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />

        <main className="pt-16">
          <PageHero
            title="Our Role Under GDPR"
            subtitle="How Defend Denmark's role is determined, and the processing terms that apply in the exceptional case"
          />

          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Defend Denmark ApS – Our Role Under GDPR</h1>
                <p className="text-muted-foreground">Version 2.0 • Effective Date: 18 August 2026</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Related documents: <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> · <a href="/terms-of-service" className="text-primary hover:underline">Terms of Service</a>
                </p>
              </div>

              {/* Summary callout */}
              <div className="mb-10 border-l-4 border-primary bg-muted/50 p-6 rounded-r">
                <h2 className="text-xl font-semibold text-primary mb-3">In short</h2>
                <p className="mb-3">
                  Defend Denmark's services are designed so that we do <strong>not</strong> process personal data on behalf of our customers. The platform holds vulnerability records about technical assets, not records about identified individuals, and customer personal data is not transferred to us as part of the services.
                </p>
                <p>
                  <strong>Part A</strong> below sets out our role under the GDPR and applies at all times. <strong>Part B</strong> contains data processing terms which are conditional: they apply only if, and only to the extent that, processing on a customer's behalf has been expressly agreed in writing between the parties.
                </p>
              </div>

              {/* ============ PART A ============ */}
              <div className="mb-6 pb-3 border-b-2 border-primary">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-1">Part A — Applies at all times</p>
                <h2 className="text-3xl font-bold text-primary">Our Role Under the GDPR</h2>
              </div>

              {/* A.1 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">A.1 Our role at a glance</h3>
                <p className="mb-4">
                  Under the GDPR, roles are determined by what a party actually does — by who determines the purposes and means of processing — and not by how a contract labels the parties. The following reflects our role in respect of each category of personal data connected to our services.
                </p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-base border-collapse">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-3 pr-4 font-semibold text-primary align-bottom">Personal data</th>
                        <th className="text-left py-3 pr-4 font-semibold text-primary align-bottom">Our role</th>
                        <th className="text-left py-3 font-semibold text-primary align-bottom">Legal basis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 align-top">Contacts acting on behalf of customers</td>
                        <td className="py-3 pr-4 align-top"><strong>Independent controller</strong></td>
                        <td className="py-3 align-top">Art. 6(1)(b) and 6(1)(f) GDPR</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 align-top">Defenders registered on the platform</td>
                        <td className="py-3 pr-4 align-top"><strong>Independent controller</strong></td>
                        <td className="py-3 align-top">Art. 6(1)(b), 6(1)(c) and 6(1)(f) GDPR</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 align-top">Visitors to our website</td>
                        <td className="py-3 pr-4 align-top"><strong>Independent controller</strong></td>
                        <td className="py-3 align-top">Art. 6(1)(f) GDPR</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 align-top">Personal data inadvertently exposed during testing, for the purpose of detecting, quarantining and deleting it</td>
                        <td className="py-3 pr-4 align-top"><strong>Independent controller</strong> (see A.4)</td>
                        <td className="py-3 align-top">Art. 6(1)(f) GDPR, read with Art. 28(10) GDPR</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 align-top">Personal data in the customer's possession, as part of the standard services</td>
                        <td className="py-3 pr-4 align-top"><strong>No role — not processed</strong> (see A.3)</td>
                        <td className="py-3 align-top">Not applicable</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 align-top">Personal data processed on a customer's behalf where expressly agreed in writing</td>
                        <td className="py-3 pr-4 align-top"><strong>Processor</strong> — Part B applies</td>
                        <td className="py-3 align-top">Determined by the customer as controller</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Full details of the processing for which we are an independent controller are set out in our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </section>

              {/* A.2 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">A.2 Definitions and scope</h3>
                <p className="mb-4">
                  <strong>A.2.1</strong> This document applies to Defend Denmark ApS, CVR 45824578, Nørrebrogade 45D 4TH, 2200 KBH N ("Defend Denmark").
                </p>
                <p className="mb-4">
                  <strong>A.2.2</strong> All reference to the "Data Protection Act" shall mean the Danish Data Protection Act (Databeskyttelsesloven) and Regulation (EU) 2016/679 of the European Parliament and the Council of 27 April 2016, on the protection of natural persons regarding the processing of personal data and on the free movement of such data, which entered into force on 25 May 2018 ("GDPR").
                </p>
                <p>
                  <strong>A.2.3</strong> The terms "controller", "personal data", "data subject", "processing", "processor" and "personal data breach" shall have the meaning ascribed to them in the Data Protection Act.
                </p>
              </section>

              {/* A.3 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">A.3 We do not process personal data on our customers' behalf</h3>
                <p className="mb-4">
                  <strong>A.3.1</strong> Defend Denmark's services do not entail any processing (access, transfer, or storage) by Defend Denmark of personal data in the customer's possession. The platform holds vulnerability records relating to technical assets — such as hosts, endpoints, parameters and reproduction steps — and not records relating to identified or identifiable individuals.
                </p>
                <p className="mb-4">
                  <strong>A.3.2</strong> This is achieved by design and by contract. Defenders are required, under the Defender Agreement and the program rules applicable to each customer program, to confine their testing to the assets within the approved scope, to stop testing and report immediately upon encountering personal data, and not to copy, download, retain, exfiltrate or upload personal data to the platform.
                </p>
                <p>
                  <strong>A.3.3</strong> Customers are correspondingly required not to submit personal data to the platform, not to instruct Defend Denmark or any Defender to process personal data on their behalf, and to populate any test accounts used for authenticated testing with synthetic or test data only. See Section 3.3 of our <a href="/terms-of-service" className="text-primary hover:underline">General Terms and Conditions</a>.
                </p>
              </section>

              {/* A.4 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">A.4 Personal data inadvertently exposed during testing</h3>
                <p className="mb-4">
                  <strong>A.4.1</strong> Where personal data is nevertheless inadvertently included in a vulnerability submission or otherwise appears on the platform, Defend Denmark shall notify the affected customer without undue delay and shall securely remove the data, without retaining or reproducing it beyond what is strictly necessary to document and validate the relevant vulnerability. On request, Defend Denmark shall confirm the removal in writing.
                </p>
                <p className="mb-4">
                  <strong>A.4.2</strong> Detection, quarantine and removal under clause A.4.1 is carried out for Defend Denmark's own purposes — platform integrity, data minimisation, and compliance with its own legal obligations — and not on the customer's instructions. Consistent with Article 28(10) GDPR, Defend Denmark therefore acts as an independent data controller in respect of that narrow processing, on the basis of its legitimate interests under Article 6(1)(f) GDPR.
                </p>
                <p>
                  <strong>A.4.3</strong> Such processing does not make Defend Denmark a data processor for the customer, and Part B does not apply to it.
                </p>
              </section>

              {/* A.5 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">A.5 When Part B applies</h3>
                <p className="mb-4">
                  <strong>A.5.1</strong> Defend Denmark does not accept instructions to process personal data on a customer's behalf as part of the standard services.
                </p>
                <p className="mb-4">
                  <strong>A.5.2</strong> Where processing on a customer's behalf is exceptionally and expressly agreed in writing between the parties, Part B applies to that processing, and the written agreement shall specify the subject matter, duration, nature and purpose of the processing, the categories of personal data and data subjects, and the customer's documented instructions.
                </p>
                <p>
                  <strong>A.5.3</strong> Any reference to Part B in a service agreement entered into between the parties, or in an offer made by Defend Denmark which is accepted by the customer, as applicable, shall include acceptance of Part B.
                </p>
              </section>

              {/* A.6 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">A.6 Security, sub-suppliers and data sharing</h3>
                <p className="mb-4">
                  <strong>A.6.1</strong> Defend Denmark implements appropriate technical and organizational measures to protect personal data against unauthorised or unlawful processing and against accidental loss, destruction or damage. A summary of these measures, and a current list of the sub-suppliers used in the operation of the platform including hosting locations, are available to customers and prospective customers on request at <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a>.
                </p>
                <p className="mb-4">
                  <strong>A.6.2</strong> Defend Denmark may share anonymized and aggregated vulnerability data with DKCERT and SektorCERT to support national cybersecurity efforts. Such data will not contain any personal identifiers, and will not identify the customer or its systems without the customer's prior written consent.
                </p>
                <p>
                  <strong>A.6.3</strong> Personal data will not be shared with third parties except as described in this document, in our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, or where required by law.
                </p>
              </section>

              {/* A.7 */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-primary mb-4">A.7 Liability</h3>
                <p>
                  The limitations and exclusions of liability set out in the parties' service agreement and, in the absence of an agreed provision, in Section 6 of Defend Denmark's <a href="/terms-of-service" className="text-primary hover:underline">General Terms and Conditions</a>, apply to all claims arising under this document, including claims arising under Part B, and prevail over any inconsistent provision of this document.
                </p>
              </section>

              {/* ============ PART B ============ */}
              <div className="mb-6 pb-3 border-b-2 border-primary">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-1">Part B — Conditional</p>
                <h2 className="text-3xl font-bold text-primary">Data Processing Terms</h2>
              </div>

              <div className="mb-10 border-l-4 border-muted-foreground/40 bg-muted/50 p-6 rounded-r">
                <p>
                  Part B applies <strong>only if, and only to the extent that</strong>, Defend Denmark processes personal data on a customer's behalf pursuant to an express written agreement under clause A.5. Where Part B applies, Defend Denmark is referred to as the "Processor" and the customer as the "Controller". Part B does not itself establish a controller-processor relationship, and does not apply to processing for which Defend Denmark is an independent controller under Part A.
                </p>
              </div>

              {/* B.1 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.1 Parties' obligations</h3>

                <p className="mb-4">
                  <strong>B.1.1</strong> The Controller is fully responsible for fulfilling its legal obligation under the Data Protection Act, including providing adequate information to data subjects and making sure that all processing is lawful. The Controller shall also ensure that it is authorized to entrust the Processor with the processing of personal data and the Controller is solely responsible for the processing instructions provided to the Processor.
                </p>

                <p className="mb-4">
                  <strong>B.1.2</strong> The Processor shall only process personal data to the extent necessary to provide the Controller the specified services and in accordance with the Controller's written instructions. The Processor shall not process the personal data for any other purpose or in a way that does not comply with these terms or the Data Protection Act. The Processor must promptly notify the Controller if, in its opinion, the Controller's instructions do not comply with the Data Protection Act and in such events the Processor is not obliged to follow the Controller's instructions.
                </p>

                <p className="mb-4">
                  <strong>B.1.3</strong> The Processor shall maintain the confidentiality of all personal data and it shall not disclose personal data to third parties unless in accordance with these terms, where such authorization is provided for in an agreement between the parties, the Controller provides special permission for dissemination of information, or the Processor is legally obliged to do so.
                </p>

                <p className="mb-2"><strong>B.1.4</strong> The Processor will ensure that its employees:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>are informed of the confidential nature of the personal data processed and that they are contractually bound by an obligation of confidentiality,</li>
                  <li>are aware of their confidentiality obligations imposed by legislation,</li>
                  <li>have undertaken training on the Data Protection Act relating to the processing of personal data,</li>
                  <li>are aware of the Processor's obligations under the Data Protection Act and these terms.</li>
                </ul>
              </section>

              {/* B.2 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.2 Security of personal data</h3>

                <p className="mb-2"><strong>B.2.1</strong> The Processor shall implement appropriate technical and organizational measures, appropriate to the risk, to ensure level of security and to minimize the risk of unlawful or unauthorized processing of personal data. The measures shall seek to, as appropriate:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>ensure ongoing confidentiality, integrity, and availability of personal data,</li>
                  <li>ensure a process for testing and evaluating the effectiveness of measures safeguarding the processing, and</li>
                  <li>ensure that adequate security measures are taken, having regards to the nature of the personal data processed, e.g. in terms of access control, the use of pseudo-identity and encryption.</li>
                </ul>

                <p>
                  <strong>B.2.2</strong> In the event a Controller deems it necessary to implement extra security measures, in addition to the measures the Processor has implemented in relation to specific services, the parties shall enter into specific agreement in relation to such additional service.
                </p>
              </section>

              {/* B.3 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.3 Personal data breach</h3>

                <p className="mb-4">
                  <strong>B.3.1</strong> The Processor shall, without undue delay and in any event within 24 hours of becoming aware, notify the Controller of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored, or otherwise processed ("Personal Data Breach"). The initial notification need not be a complete incident report; the Processor shall provide further information as it becomes available.
                </p>

                <p className="mb-4">
                  <strong>B.3.2</strong> The Processor's notification shall include all information referred to in Article 33(3) of the GDPR, to the extent available at the time.
                </p>

                <p className="mb-2"><strong>B.3.3</strong> The parties agree that the Controller is solely responsible for and has the sole right to determine:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>whether to provide notice of the Personal Data Breach to any data subjects, supervisory authorities, or others; and</li>
                  <li>how such notices shall be sent.</li>
                </ul>

                <p>
                  <strong>B.3.4</strong> Notification under this Section is made in order to enable the Controller to meet its own obligations and does not constitute an admission of fault or liability by the Processor.
                </p>
              </section>

              {/* B.4 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.4 Sub-processors</h3>

                <p className="mb-4">
                  <strong>B.4.1</strong> If the Processor appoints a third-party subcontractor to provide the services, or parts of it, and that requires the subcontractor's processing of personal data, the subcontractor shall be considered as Sub-Processor in the meaning of the Data Protection Act. Defenders engaged under the Defender Agreement are not Sub-Processors, as they are not engaged to process personal data on the Controller's behalf.
                </p>

                <p className="mb-4">
                  <strong>B.4.2</strong> The Processor may only authorize a Sub-Processor to process personal data if the Processor has entered into a written agreement with the Sub-Processor that contains terms substantially the same as those set out in these terms in relation to the security of personal data.
                </p>

                <p className="mb-4">
                  <strong>B.4.3</strong> Where the Sub-Processor fails to fulfill its obligations under such a written agreement, the Processor remains liable to the Controller, subject to clause A.7.
                </p>

                <p>
                  <strong>B.4.4</strong> If the Processor appoints a new Sub-Processor, it shall inform the Controller thereof and provide the Controller 14 days to object to such an appointment.
                </p>
              </section>

              {/* B.5 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.5 Transfer of personal data outside the EEA</h3>
                <p>
                  <strong>B.5.1</strong> The Processor must not transfer personal data outside the European Economic Area ("EEA") without the Controller's consent. Where such a transfer is agreed, it shall be carried out only on the basis of a valid transfer mechanism under Chapter V GDPR.
                </p>
              </section>

              {/* B.6 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.6 Data subject requests</h3>

                <p className="mb-4">
                  <strong>B.6.1</strong> The Processor shall assist the Controller, to the extent reasonable taking into consideration the nature of the processing, in responding to data subject requests. All work carried out by the Processor in relation to such assistance shall be subject to the parties' service agreement and/or the Processor's price list at any given time.
                </p>

                <p>
                  <strong>B.6.2</strong> The responsibility for responding to requests from data subjects shall always remain with the Controller.
                </p>
              </section>

              {/* B.7 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.7 Data protection impact assessment and prior consultation</h3>

                <p className="mb-4">
                  <strong>B.7.1</strong> Upon prior written request of the Controller, the Processor shall assist the Controller to carry out data protection impact assessment (DPIA) and in conducting prior consultation with Datatilsynet (Danish Data Protection Agency). Such assistance shall however always take into account the nature of processing and the information available to the Processor.
                </p>

                <p>
                  <strong>B.7.2</strong> All assistance with DPIA or prior consultation shall be subject to service fees in accordance with the Processor's price list at any given time.
                </p>
              </section>

              {/* B.8 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.8 Compliance and audit</h3>

                <p className="mb-4">
                  <strong>B.8.1</strong> The Processor shall make all information available to the Controller that are necessary to demonstrate compliance with these terms, and to the extent possible taking into consideration the nature of the service, allow for and contribute to audits by the Controller, or an auditor mandated by the Controller, for the purpose of verifying the Processor's compliance with these terms.
                </p>

                <p className="mb-2"><strong>B.8.2</strong> Audits shall be conducted on reasonable prior notice, during normal business hours, and no more than once per calendar year unless an audit is required following a Personal Data Breach or by a competent authority. Audits shall be conducted in a manner that:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>relates only to the services carried out by the Processor on behalf of the Controller;</li>
                  <li>avoids unreasonable disruption to the Processor's business; and</li>
                  <li>protects the confidentiality, security and rights of other customers and of Defenders.</li>
                </ul>

                <p className="mb-4">
                  <strong>B.8.3</strong> The Processor shall furthermore, in accordance with legal obligations thereof, ensure regulators' access to the personal data processed by the Processor on behalf of Controllers which are classified as regulated entities, and shall cooperate with any competent authority exercising its statutory supervisory or investigative powers in relation to the services.
                </p>

                <p>
                  <strong>B.8.4</strong> All assistance in relation to audits shall be subject to service fees in accordance with the Processor's price list at any given time, unless otherwise agreed in the individual customer agreement.
                </p>
              </section>

              {/* B.9 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.9 Duration, data return and deletion</h3>

                <p className="mb-2"><strong>B.9.1</strong> Part B shall remain in full force and effect as long as:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>the parties' service agreement remains in effect, or</li>
                  <li>the Processor processes personal data on behalf of the Controller.</li>
                </ul>

                <p className="mb-4">
                  <strong>B.9.2</strong> Upon termination of service, the Processor shall, at the choice of the Controller, delete or return all personal and client data to the Controller and delete existing copies, except to the extent retention is required by applicable law. Before deletion, the Controller shall be given a period of at least 30 days in which to export its data in a commonly used and readable format. If the return of data calls for substantive work on behalf of the Processor, such work shall be subject to service fee in accordance with the Processor's price list at any given time.
                </p>

                <p>
                  <strong>B.9.3</strong> The Processor shall ensure that data on security weaknesses, and proofs thereof, are held securely and handled so as not to cause damage to the customer.
                </p>
              </section>

              {/* B.10 */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.10 Notifications to the Controller</h3>

                <p className="mb-4">
                  <strong>B.10.1</strong> Notifications to the Controller based on these terms shall be sent to the Controller's registered contact person. The Controller is responsible for providing the Processor with contact details of such a person. If contact persons are listed in the parties' service agreement, a notification shall be sent to that contact person, unless parties have agreed otherwise.
                </p>

                <p className="mb-4">
                  <strong>B.10.2</strong> The Controller is responsible for providing the Processor with updated contact details.
                </p>

                <p>
                  <strong>B.10.3</strong> The Processor can also publish general notifications, subject to these terms, on its websites, on the condition that the Controller's contact persons shall be informed of such notifications and have the opportunity to register for such notifications. Notification of a Personal Data Breach under clause B.3 shall always be made directly to the Controller's contact person.
                </p>
              </section>

              {/* B.11 */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-primary mb-4">B.11 Miscellaneous</h3>

                <p className="mb-4">
                  <strong>B.11.1</strong> The parties' service agreement and Defend Denmark's <a href="/terms-of-service" className="text-primary hover:underline">General Terms and Conditions</a> apply in addition to Part B. The limitations and exclusions of liability referred to in clause A.7 apply to all claims arising under Part B and prevail over any inconsistent provision of Part B. Subject to the foregoing, in the event of any inconsistency between Part B and Defend Denmark's General Terms and Conditions or the parties' service agreement in respect of the processing of personal data, Part B shall prevail.
                </p>

                <p className="mb-4">
                  <strong>B.11.2</strong> This document is governed by the laws of Denmark. Any disputes arising from or in connection with it shall be brought exclusively before the City Court of Copenhagen (Københavns Byret).
                </p>

                <p className="mb-4">
                  <strong>B.11.3</strong> Defend Denmark reserves the right to amend this document in accordance with changes in relevant law or regulations or due to changes in how personal data is processed. Defend Denmark shall inform the Controller of any changes made. If changes materially affect the rights and obligations of the Controller, such changes shall not take effect until after a predetermined time, and if the Controller does not accept such changes after a notification is sent to the Controller, the Controller shall have the right to terminate the appropriate service.
                </p>

                <p>
                  <strong>B.11.4</strong> Where a customer agreement incorporates a specific dated version of this document, that version applies to that customer for the term of the agreement and is not amended by subsequent changes published on the Company's website, unless the parties agree otherwise in writing.
                </p>
              </section>

              {/* Contact */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Contact</h2>
                <p className="mb-4">Questions, requests or complaints:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: <a href="mailto:privacy@defenddenmark.dk" className="text-primary hover:underline">privacy@defenddenmark.dk</a></li>
                  <li>Postal: Defend Denmark ApS, Nørrebrogade 45D 4TH, 2200 KBH N</li>
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

export default GdprRole;
