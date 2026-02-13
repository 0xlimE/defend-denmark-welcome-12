import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-6xl mx-auto bg-background shadow-lg">
        <Navbar />
        
        <main className="pt-16">
          <PageHero
            title="Terms of Service"
            subtitle="General Terms and Conditions for Defend Denmark services"
          />

          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Defend Denmark ApS – General Terms and Conditions</h1>
                <p className="text-muted-foreground">Version 1.0 • Effective Date: 23 Oct 2025</p>
              </div>

              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. General</h2>
                <p className="mb-4">
                  These General Terms and Conditions (the "T&Cs") apply to all services provided by Defend Denmark ApS, CVR 45824578, Rodosvej 15, 2300 KBH S (hereinafter "Defend Denmark" or the "Company") to its customers.
                </p>
                <p className="mb-4">
                  These T&Cs apply to all agreements between Defend Denmark and its customers concerning the purchase of services, including offers, work requests and job descriptions, unless otherwise agreed in writing.
                </p>
                <p>
                  In addition to these T&Cs (with subsequent amendments), special terms and conditions may apply to the relationship between Defend Denmark and its customers, based on the parties' agreements. If special terms and conditions deviate from the T&Cs, the former shall prevail over the latter.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Payment and Terms of Payment</h2>
                
                <h3 className="text-xl font-semibold mb-3">2.1 Billing and Invoices</h3>
                <p className="mb-4">
                  Prices for services are listed in the Company's price list, and special prices or other specified prices are stated in agreements. All prices are quoted without VAT (moms), unless otherwise stated.
                </p>
                <p className="mb-4">
                  The due date of invoices is 14 days after their issuance and the date of maturity is 6 days after the due date. Comments concerning invoices must be made without delay and no later than their date of maturity. Otherwise, invoices are considered to be accepted by the customer.
                </p>
                <p className="mb-4">
                  If an invoice or other contractual obligations fall due on the date of maturity, the customer must pay penalty interest in accordance with Danish law on interest rates (Renteloven).
                </p>

                <h3 className="text-xl font-semibold mb-3">2.2 Outlay</h3>
                <p className="mb-4">
                  The customer shall pay for all costs incurred by Defend Denmark on behalf of the customer. If there are major expenses or costs, Defend Denmark will seek the customer's consent for such expenses beforehand.
                </p>

                <h3 className="text-xl font-semibold mb-3">2.3 Changes to Price Lists</h3>
                <p className="mb-4">
                  Defend Denmark's price lists are updated every 12 months in accordance with the Danish consumer price index.
                </p>
                <p>
                  Defend Denmark furthermore reserves the right to change the Company's price lists as needed with at least 30 days' notice.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Customers' Obligations and Responsibilities</h2>
                <p className="mb-4">
                  The customer guarantees that it has the authority to entrust Defend Denmark with providing the agreed service and that the rights of third parties are fully respected in relation to that service, whether it is copyright, property rights or any other rights.
                </p>
                <p className="mb-4">
                  The customer shall enable Defend Denmark to provide the agreed services, including by providing access to necessary systems and, as the case may be, a place of business, or as is necessary at any given time in Defend Denmark's opinion.
                </p>
                <p>
                  Customers are responsible for the instructions and orders they give to Defend Denmark, as well as for the validity of the information provided to the Company.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Defend Denmark's Obligations and Responsibilities</h2>
                <p className="mb-4">
                  Defend Denmark is responsible for the agreed service being adequate and in accordance with the parties' agreement.
                </p>
                <p>
                  If a customer believes that Defend Denmark's service has a defect, it must notify Defend Denmark as soon as it becomes aware of the defect, without undue delay.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Indemnity from Third Party Claims</h2>
                <p>
                  The customer shall hold Defend Denmark fully harmless from any third-party claims on the basis that the agreed service has violated the rights of the relevant third party or others.
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Limitations of Liability</h2>
                <p className="mb-4">
                  Defend Denmark is not liable for damages that cannot be attributed to the intent or gross negligence of the Company or its employees.
                </p>
                <p className="mb-4">
                  Defend Denmark's liability for damages shall be limited to customers' direct loss and therefore does not cover the customers' or third parties' indirect or consequential loss, including operational losses, loss of profits or goodwill or the customers' breach of an agreement with a third party.
                </p>
                <p className="mb-4">
                  Defend Denmark is not liable for damage caused by the customer or a third party that does not act on behalf of Defend Denmark.
                </p>
                <p className="mb-4">
                  Defend Denmark's liability for possible damages is limited to the amount that has been paid by the customer to Defend Denmark in the last 6 months prior to the incurrence of the liability claim. Defend Denmark's total liability for damages can under no circumstances exceed DKK 1,000,000.
                </p>
                <p className="mb-4">
                  The customer agrees to ensure that no claim or accusation is made against any Defend Denmark employee, who imposes or seeks to impose responsibility in relation to the service provided. If any such claim or accusation is nevertheless made, the customer guarantees to hold Defend Denmark and the relevant employee harmless from all consequences in relation to such a claim. In all events, every employee of Defend Denmark shall benefit from all exemptions, limitations of liability, provisions, conditions and rights in these T&Cs that are for the benefit of Defend Denmark as if such provision were expressly made for the employee's benefit.
                </p>
                <p>
                  The provisions of this article shall survive the termination of the agreement.
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Force Majeure</h2>
                <p className="mb-4">
                  In the event that Defend Denmark cannot fulfill its obligations towards a customer due to a force majeure event, Defend Denmark shall be released from all its obligations during the period in which the force majeure events persist, and the customer has no right to apply default remedies towards Defend Denmark, including claims of refund, discount, damages, cancellation, and/or termination.
                </p>
                <p className="mb-4">
                  A force majeure event means an event or circumstances not within Defend Denmark's control, provided that Defend Denmark could not overcome such an event by applying reasonable remedies. Without limiting the generality of the foregoing, such events and circumstances shall, e.g., include war, rebellion, sabotage, riots, epidemics, natural disasters, actions of administrative authorities in the field of foreign exchange or commercial matters, trade embargos, port embargos, general transportation barriers, prohibition of import/export, energy shortage, and similar uncontrollable events in relations with subcontractors.
                </p>
                <p>
                  If a force majeure event lasts for a continuous 30 days or a longer period, Defend Denmark may terminate or cancel an agreement with the customer without notice and without being held liable.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Intellectual Property Rights and Licenses</h2>
                
                <h3 className="text-xl font-semibold mb-3">8.1 Defend Denmark's Products</h3>
                <p className="mb-4">
                  All Defend Denmark advice and any product arising from the agreed service is intended only for the customers in question. Other parties are not permitted to rely on the advice, or to use the product in any way, without the written consent of the Company.
                </p>

                <h3 className="text-xl font-semibold mb-3">8.2 Software License</h3>
                <p className="mb-4">
                  The software license that Defend Denmark grants to the customer covers the use of the relevant software while the agreement between the parties is in effect and the customer pays the agreed fees.
                </p>
                <p className="mb-4">
                  In cases where Defend Denmark acts as a reseller, the person/entity who grants Defend Denmark the right to resell a license is the owner of copyrights and any other intellectual property and identity rights, whether trademark rights, design rights, patent rights or other rights, related to the software, in accordance with the owner's terms that apply to the software. A software license does not entail the transfer of such rights other than what is expressly stated in the agreement between the parties.
                </p>
                <p className="mb-4">
                  The customer undertakes to use the software in accordance with the parties' agreement and the legally protected rights of Defend Denmark and/or third parties.
                </p>
                <p className="mb-4">
                  The customer agrees to comply with Defend Denmark's instructions, and as the case may be of third parties, regarding the use of licensed software, and the customer shall ensure that the customer's hardware and the necessary connections to the software meet Defend Denmark's requirements, as applicable.
                </p>

                <h3 className="text-xl font-semibold mb-3">8.3 Customer/Third Parties' Equipment, Systems and Materials</h3>
                <p className="mb-4">
                  In relation to Defend Denmark's service to a customer, Defend Denmark may gain access to any kind of equipment (hardware and software) and customer's systems. All rights to such equipment and systems belong to the customer, or third parties, as the case may be.
                </p>
                <p>
                  The customer guarantees that all necessary licenses for such access by Defend Denmark are in place. The customer shall hold Defend Denmark harmless from any kind of third-party claims based on the fact that such access infringes that person's/entity's rights.
                </p>
              </section>

              {/* Section 9 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Confidentiality Obligations</h2>
                <p className="mb-4">
                  The parties must treat as confidential information they may obtain in the execution of the parties' agreement, including on the agreement's subject, the customer's software system, related software, customers, business connections, operations, activities, financial matters and trade practices of the opposite party.
                </p>
                <p className="mb-4">
                  Employees, contractors and others who carry out assignments on behalf of Defend Denmark are bound by a contractual confidentiality obligation. That confidentiality obligation shall survive the termination of the contract in question.
                </p>
                <p>
                  This provision shall survive the termination of the parties' agreement.
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">10. Data Protection</h2>
                <p className="mb-4">
                  Defend Denmark acts as a data controller within the meaning of the EU General Data Protection Regulation (GDPR) and Danish Data Protection Act regarding the processing of personal data of contacts who act on behalf of companies and other customers of Defend Denmark. As a Data Controller, Defend Denmark is obligated to comply with all applicable data protection laws and regulations. Defend Denmark shall implement appropriate technical and organizational measures to safeguard the personal data from unauthorized or unlawful processing, accidental loss, destruction, or damage.
                </p>
                <p className="mb-4">
                  The Company's services do not, in general, entail any processing (access, transfer, or storage) by Defend Denmark of personal data in customer's possession beyond what is necessary to provide the bug bounty platform services.
                </p>
                <p className="mb-4">
                  If Defend Denmark processes personal data on behalf of a customer as a data processor, e.g., in connection with the service that Defend Denmark provides to customers, the Defend Denmark Data Processing Agreement applies, which is available upon request or as part of the customer agreement.
                </p>
                <p>
                  For detailed information about how we process personal data, please refer to our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </section>

              {/* Section 11 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">11. Defaults and Default Remedies</h2>
                <p className="mb-4">
                  Any infringement of these T&Cs by the parties, including any delay in payment, is considered to be a default by the party in question. Defend Denmark reserves the right to stop providing and, depending on the circumstances, terminate the service in the event of the customer's default.
                </p>
                <p className="mb-4">
                  In accordance with general rules, both contracting parties may terminate the agreement without notice in the event of material default/infringement of the other party.
                </p>
                <p className="mb-4">
                  Furthermore, Defend Denmark may exercise all default remedies, including termination, if:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>the customer does not pay invoices from Defend Denmark within 30 days from the date of maturity,</li>
                  <li>the customer does not fulfill its contractual obligations towards Defend Denmark within 30 days from the date of a written notice from Defend Denmark challenging the customer to fulfill its obligations, or</li>
                  <li>the customer enters into bankruptcy proceedings, is granted an authorization to enter into financial reorganization or to seek a composition of creditors.</li>
                </ul>
                <p className="mb-4">
                  If Defend Denmark terminates an agreement, the customer must pay accrued fees and all Defend Denmark's costs in accordance with the agreement. The customer shall indemnify Defend Denmark for any expenses and loss of income which Defend Denmark may incur due to the customer's infringement of the agreement.
                </p>
                <p>
                  Parties must be notified if either one intends to terminate the contract, both parties have 30 working days to remedy the given cause for termination. Notification of termination and its cause must be in writing and sent in a verifiable manner.
                </p>
              </section>

              {/* Section 12 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">12. Assignment of Rights and Subcontractors</h2>
                <p className="mb-4">
                  Defend Denmark may use contractors to carry out projects on behalf of the customer, in part or in whole, to the extent permitted by law and the conditions in Defend Denmark's Data Processing Agreement. Defend Denmark shall ensure that the customer is informed about such outsourcing.
                </p>
                <p>
                  Customers may not assign their rights and obligations without Defend Denmark's consent.
                </p>
              </section>

              {/* Section 13 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">13. Termination of an Agreement</h2>
                <p className="mb-4">
                  Provided that a notice period is not stipulated in an agreement between the parties, the notice period shall be three months. The termination shall take effect at the end of the month in which it is received, and then the termination period begins. Notification of termination must be in writing and delivered by a verifiable manner.
                </p>
                <p>
                  Either party may terminate the agreement with immediate effect if the other party commits a material breach of these T&Cs and fails to remedy such breach within 30 days of receiving written notice.
                </p>
              </section>

              {/* Section 14 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">14. Rights and Obligations Upon Termination</h2>
                <p className="mb-4">
                  Upon termination of an agreement, for whatever reason, the customer shall pay Defend Denmark outstanding debts, as applicable. Parties shall return to each other, within 10 days, any properties, materials, data, or confidential information which has been provided and is owned by the opposite party, or the opposite party is entitled to.
                </p>
                <p>
                  Any work that Defend Denmark carries out upon termination is charged in accordance with the Company's price list, unless otherwise agreed.
                </p>
              </section>

              {/* Section 15 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">15. Governing Law and Jurisdiction</h2>
                <p className="mb-4">
                  The contractual relationship between Defend Denmark and its customers is governed by Danish law.
                </p>
                <p className="mb-4">
                  In the event of a dispute, the matter shall be resolved by the Copenhagen City Court (Københavns Byret) as the agreed venue.
                </p>
                <p>
                  If any provisions of these T&Cs or an agreement conflict with applicable laws and regulations or if such provisions are deemed invalid by a court having jurisdiction over the parties, such provisions shall be reworded in such a way as to minimize the distortion of the original purpose of the parties within the framework of the respective laws and court rulings, and the provisions of the T&Cs and/or agreement shall otherwise remain in full force.
                </p>
              </section>

              {/* Section 16 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">16. Amendments to the T&Cs</h2>
                <p className="mb-4">
                  Defend Denmark reserves the right to amend these T&Cs and the amendments will be announced with at least 30 days' notice on the Company's website and via email to the customer's designated point of contact.
                </p>
                <p>
                  Continued use of Defend Denmark's services after the notice period constitutes acceptance of the amended T&Cs. If you do not agree with the amendments, you may terminate the agreement in accordance with Section 13.
                </p>
              </section>

              {/* Section 17 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">17. Security Researchers (Defenders) Specific Terms</h2>
                <p className="mb-4">
                  Security researchers ("Defenders") who participate in the Defend Denmark platform must sign a separate Defender Agreement which includes additional terms specific to their participation, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Rules of engagement for security testing</li>
                  <li>Responsible disclosure requirements</li>
                  <li>Verification requirements (MitID verification, criminal record check)</li>
                  <li>Payment terms for bounty rewards</li>
                  <li>Confidentiality and non-disclosure obligations</li>
                  <li>Prohibition of unauthorized access or testing outside approved scope</li>
                </ul>
                <p>
                  The Defender Agreement is complementary to these T&Cs. In case of conflict between the Defender Agreement and these T&Cs, the Defender Agreement shall prevail for matters specifically related to security research activities.
                </p>
              </section>

              {/* Section 18 */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">18. Contact Information</h2>
                <p className="mb-4">For questions regarding these Terms of Service:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: <a href="mailto:info@defenddenmark.dk" className="text-primary hover:underline">info@defenddenmark.dk</a></li>
                  <li>Postal: Defend Denmark ApS, Rodosvej 15, 2300 KBH S, Denmark</li>
                  <li>CVR: 45824578</li>
                </ul>
                <p className="mt-6 text-muted-foreground text-sm">Last updated: 23 Oct 2025</p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;
