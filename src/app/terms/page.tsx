import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pflege Orientierung",
  description:
    "Review the Terms & Conditions governing your access and use of the Polaris platform and related caregiver guidance services.",
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0C2B4E] text-center mb-16 tracking-tight">
          Terms & Conditions
        </h1>

        {/* Policy Content Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to Polaris. These Terms & Conditions govern your access to and use of the
              Polaris platform and all related services. By accessing or using Polaris, you agree to
              be bound by these Terms. If you do not agree with any part of these Terms, you should
              discontinue use of the platform immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">2. About Polaris</h2>
            <p>
              Polaris is a digital guidance platform designed to help family caregivers better
              understand their caregiving situation through a structured assessment known as the Care
              Compass. Based on the information provided, Polaris delivers personalised guidance and
              recommended next steps using predefined recommendation logic.
            </p>
            <p>
              Polaris is intended to support informed decision-making and should not be considered a
              replacement for professional medical, legal, financial, or social care advice.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">3. Eligibility</h2>
            <p>
              You must be at least 18 years of age or the age of legal majority in your jurisdiction
              to use Polaris. By using the platform, you confirm that you meet these requirements
              and have the legal capacity to enter into these Terms.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              4. Use of the Platform
            </h2>
            <p>
              You agree to use Polaris responsibly and only for lawful purposes. You must provide
              information that is accurate and truthful to the best of your knowledge. You must not
              misuse the platform, attempt to gain unauthorised access, interfere with its
              operation, or use Polaris in any manner that could damage, disable, or compromise the
              security or availability of the service.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              5. Personalised Guidance
            </h2>
            <p>
              The recommendations provided by Polaris are generated using predefined assessment logic
              based on the information you submit through the Care Compass.
            </p>
            <p>
              These recommendations are intended to provide guidance only and should not be
              interpreted as medical advice, diagnosis, treatment, or emergency assistance. You
              remain solely responsible for making healthcare decisions and should consult qualified
              professionals whenever appropriate.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              6. Emergency Situations
            </h2>
            <p>
              Polaris is not an emergency service. If you believe you or someone you care for is
              experiencing a medical emergency or requires immediate assistance, you should contact
              your local emergency services or an appropriate healthcare professional without delay.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">7. Partner Referrals</h2>
            <p>
              Polaris may provide the option to request support from partner organisations. Where you
              choose to use this feature, relevant information may be shared with the selected
              organisation solely for the purpose of facilitating the requested support.
            </p>
            <p>
              Polaris cannot guarantee the availability, quality, or outcome of services provided by
              third-party organisations.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              8. Intellectual Property
            </h2>
            <p>
              All content, branding, software, designs, graphics, text, logos, and other materials
              available through Polaris are protected by applicable intellectual property laws.
            </p>
            <p>
              You may access and use the platform for personal, non-commercial purposes only. You may
              not reproduce, distribute, modify, reverse engineer, or exploit any part of the platform
              without prior written permission.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">9. Privacy</h2>
            <p>
              Your use of Polaris is also governed by our Privacy Policy, which explains how your
              personal information is collected, used, stored, and protected. By using the platform,
              you acknowledge that you have read and understood the Privacy Policy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              10. Availability of the Service
            </h2>
            <p>
              We strive to keep Polaris available, secure, and reliable at all times. However, we do
              not guarantee uninterrupted access and reserve the right to modify, suspend, maintain,
              or discontinue any part of the platform when necessary for maintenance, security, or
              future improvements.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              11. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Polaris shall not be liable for any
              direct, indirect, incidental, consequential, or special damages arising from the use of
              or inability to use the platform, reliance on personalised guidance, interruptions in
              service, or third-party services accessed through the platform.
            </p>
            <p>
              Users remain responsible for their own decisions and should always seek professional
              advice where appropriate.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">12. Disclaimer</h2>
            <p>
              Polaris is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
              While we make every reasonable effort to provide accurate and reliable guidance, we make
              no guarantees regarding the completeness, accuracy, reliability, or suitability of the
              recommendations generated through the platform.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              13. Changes to the Terms
            </h2>
            <p>
              We may revise these Terms & Conditions from time to time to reflect changes in legal
              requirements, platform functionality, or business operations. Updated versions will
              become effective upon publication. Continued use of Polaris after changes have been
              published constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">14. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and interpreted in accordance with the
              laws of Switzerland, without regard to its conflict of law principles. Any disputes
              arising from the use of Polaris shall be subject to the exclusive jurisdiction of the
              competent courts of Switzerland.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              15. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms & Conditions, please contact the
              Polaris team through the contact information provided on the official Polaris website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
