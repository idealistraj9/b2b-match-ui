import * as React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Footer from "@/components/footer";

export default function GTC() {
  return (
    <>
      <div className="bg-secondary flex flex-col text-center justify-center">
        <div className="w-fit  max-h-screen overflow-auto">
          <span className="text-5xl mt-5 font-bold pl-6">
            <h1 className="bg-gradient-to-r p-5 from-green-600 via-violet-900-500 to-violet-700 inline-block text-transparent bg-clip-text">
              General Terms and Conditions (GTC)
            </h1>
          </span>
          <div className="bg-secondary flex flex-grow justify-center items-center  m-3 rounded-sm border-background mt-3 pt-0">
            <Card className="flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none">
              <CardTitle className="mt-5 text-xl">1. Scope</CardTitle>
              <CardDescription className="text-[20px]">
                These General Terms and Conditions (GTC) apply to all contracts
                concluded between the company BildKom International GmbH in
                Zurich (hereinafter referred to as provider) and its customers
                (hereinafter referred to as customer) regarding the delivery of
                addresses. Differing or additional conditions from the customer
                will not be recognized unless the provider has expressly agreed
                to them in writing.
              </CardDescription>

              <CardTitle className="mt-5 text-xl">
                2. Conclusion of contract
              </CardTitle>
              <CardDescription className="text-[20px]">
                The presentation of the addresses on the provider's website does
                not constitute a binding offer, but rather a non-binding
                invitation to the customer to place an order. Due to the nature
                of colloquial search queries, the result may vary. So that the
                customer knows what he is buying, the purchasing process is
                divided into the following steps:
              </CardDescription>
              <ol className="list-decimal list-inside m-3 text-[20px] text-gray-500 font-semibold">
                <li>
                  The customer enters their search query (prompt), can adjust
                  and refine it.
                </li>
                <li>If he is satisfied with the result, he can click “Buy”.</li>
                <li>
                  Various options can now be selected. The final purchase price
                  is displayed immediately.
                </li>
                <li>
                  The customer enters their information (name, email, address,
                  etc.) and places the order.
                </li>
                <li>
                  We send the customer an invoice (advance payment). After
                  receipt of payment, the customer receives the addresses by
                  email as an Excel file.
                </li>
                <li>
                  The contract is only concluded when the customer has paid the
                  invoice.
                </li>
              </ol>
              <CardTitle className="mt-5 text-xl">
                3. Prices and payment conditions
              </CardTitle>
              <CardDescription className="text-[20px]">
                The prices for the addresses are based on the provider's current
                price list and are calculated and displayed in real time. Prices
                are in Swiss francs (CHF) and include VAT. If the customer does
                not pay the invoice within 10 days, his order will be
                deactivated.
              </CardDescription>

              <CardTitle className="mt-5 text-xl">
                4. Delivery and delivery time
              </CardTitle>
              <CardDescription className="text-[20px]">
                The provider delivers the ordered addresses in an Excel format
                to the customer by email. The delivery period is 5 working days
                from receipt of payment by the provider. The provider makes
                every effort to adhere to the delivery deadline, but cannot
                guarantee this. Exceeding the delivery deadline does not entitle
                the customer to withdraw from the contract or to claim damages.
              </CardDescription>

              <CardTitle className="mt-5 text-xl">
                5. Rights of use and liability
              </CardTitle>
              <CardDescription className="text-[20px]">
                The provider grants the customer a simple, non-transferable and
                unlimited right of use to the addresses supplied. The customer
                undertakes to only use the addresses for the agreed purpose and
                to observe the applicable data protection regulations. The
                customer is solely responsible for the content and form of his
                advertising or communication with the addressees. The provider
                assumes no liability for the accuracy, completeness and
                timeliness of the addresses supplied. The provider is not liable
                for damages incurred by the customer or third parties as a
                result of the use or non-use of the addresses, unless the
                provider acted intentionally or with gross negligence.
              </CardDescription>

              <CardTitle className="mt-5 text-xl">
                6. Right of withdrawal
              </CardTitle>
              <CardDescription className="text-[20px]">
                The customer has no right of withdrawal as the goods are
                individually manufactured.
              </CardDescription>

              <CardTitle className="mt-5 text-xl">7. Final provisions</CardTitle>
              <CardDescription className="text-[20px]">
                Should individual provisions of these General Terms and
                Conditions be or become invalid or unenforceable, the
                effectiveness of the remaining provisions remains unaffected.
                Instead of the invalid or unenforceable provision, a provision
                that corresponds to the economic purpose of the contract is
                deemed to have been agreed
              </CardDescription>

              <CardTitle className="mt-5 text-xl">7. Final provisions</CardTitle>
              <CardDescription className="text-[20px]">
                Should individual provisions of these General Terms and
                Conditions be or become invalid or unenforceable, the
                effectiveness of the remaining provisions remains unaffected.
                Instead of the invalid or unenforceable provision, a provision
                that corresponds to the economic purpose of the contract is
                deemed to have been agreed.
              </CardDescription>
            </Card>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
