import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pflege Orientierung",
  description:
    "Learn how Polaris collects, uses, protects, and handles your information with full data sovereignty and privacy transparency.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0C2B4E] text-center mb-16 tracking-tight">
          Privacy Policy
        </h1>

        {/* Policy Content Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">1. Introduction</h2>
            <p>
              At Polaris, protecting your privacy is one of our highest priorities. We understand
              that family caregivers may share sensitive information while seeking guidance, and we
              are committed to handling that information with transparency, integrity, and care. This
              Privacy Policy explains how we collect, use, store, protect, and disclose your
              information when you access or use the Polaris platform.
            </p>
            <p>
              By using Polaris, you acknowledge that you have read and understood this Privacy Policy
              and agree to the collection and use of your information as described herein.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              2. Information We Collect
            </h2>
            <p>
              Polaris collects only the information necessary to provide a personalised and reliable
              guidance experience. This may include information you voluntarily provide during the
              Care Compass assessment, contact details submitted through support or referral forms,
              and any additional information you choose to share while interacting with the platform.
            </p>
            <p>
              We also collect limited technical information automatically, including device
              information, browser type, operating system, IP address, pages visited, session
              duration, and other usage data that helps us improve platform performance, reliability,
              and security.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              3. How We Use Your Information
            </h2>
            <p>
              The information collected through Polaris is used to generate personalised guidance
              based on your Care Compass assessment, improve the overall user experience, respond to
              support requests, facilitate referrals to partner organisations where requested,
              monitor platform performance, maintain security, and comply with applicable legal
              obligations.
            </p>
            <p>
              Polaris does not use your assessment responses for advertising or sell your personal
              information to third parties.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              4. Personalised Recommendations
            </h2>
            <p>
              Recommendations presented within Polaris are generated using predefined assessment
              logic and configurable recommendation rules. They are intended to help caregivers
              better understand their current situation and identify appropriate next steps.
            </p>
            <p>
              Polaris provides guidance only and does not provide medical diagnosis, treatment, or
              professional healthcare advice. Users should always consult qualified healthcare
              professionals regarding medical concerns or emergencies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">5. Data Sharing</h2>
            <p>
              Your personal information is never shared except where necessary to deliver the
              services you have requested or where required by law.
            </p>
            <p>
              If you choose to request additional support, Polaris may securely share relevant
              information with an appropriate partner organisation to facilitate that request.
              Information shared is limited to what is reasonably necessary to provide the requested
              assistance.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">6. Data Security</h2>
            <p>
              Polaris implements industry-standard technical and organisational safeguards designed
              to protect your information against unauthorised access, alteration, disclosure,
              misuse, or destruction.
            </p>
            <p>
              These safeguards include encrypted communication, secure authentication, protected
              administrative access, continuous monitoring, secure server infrastructure, and regular
              security updates to maintain the integrity of the platform.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              7. Cookies and Analytics
            </h2>
            <p>
              Polaris uses cookies and similar technologies to enhance your browsing experience,
              remember user preferences, measure website performance, and understand how visitors
              interact with the platform.
            </p>
            <p>
              We may use trusted analytics services, including Google Analytics 4 and Microsoft
              Clarity, to better understand user behaviour, improve usability, and optimise the Care
              Compass experience. These services collect aggregated and anonymised usage information
              wherever possible.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">8. Data Retention</h2>
            <p>
              Personal information is retained only for as long as necessary to provide the Polaris
              services, maintain assessment history where applicable, comply with legal obligations,
              resolve disputes, improve the platform, and support future service enhancements.
            </p>
            <p>
              When information is no longer required, it is securely deleted or anonymised in
              accordance with our data retention procedures.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">9. Your Rights</h2>
            <p>
              Depending on your location and applicable privacy laws, you may have the right to
              request access to your personal information, correct inaccurate information, request
              deletion of your data, withdraw consent where applicable, or object to certain types of
              processing.
            </p>
            <p>
              Requests relating to your personal information will be handled within a reasonable
              timeframe and in accordance with applicable legal requirements.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              10. Third-Party Services
            </h2>
            <p>
              Polaris may integrate with carefully selected third-party services to provide
              essential platform functionality, including hosting, email delivery, analytics, and
              communication services.
            </p>
            <p>
              Each provider is selected based on its commitment to security and privacy. However,
              Polaris is not responsible for the privacy practices of external websites or services
              that operate independently of our platform.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              11. Children&apos;s Privacy
            </h2>
            <p>
              Polaris is intended for adults who provide care for family members or loved ones. The
              platform is not designed for use by children, and we do not knowingly collect personal
              information from individuals under the age required by applicable law.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">
              12. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in legal
              requirements, technology, or the Polaris platform. Any updates will become effective
              upon publication, and the latest version will always be available on this page.
              Continued use of Polaris after changes are published constitutes acceptance of the
              revised Privacy Policy.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#0C2B4E]">13. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, your personal information, or
              how your data is processed, please contact the Polaris team through the contact
              details provided on our website. We are committed to addressing privacy concerns
              promptly, transparently, and responsibly.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
