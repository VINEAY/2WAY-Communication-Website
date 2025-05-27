import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Setup animations
  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Content animation
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
    );

    return () => {
      const triggers = ScrollTrigger.getAll();
      for (const trigger of triggers) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <div className="relative pt-24 pb-20">
      {/* Header Section */}
      <div
        ref={headerRef}
        className="relative z-10 container mx-auto px-4 py-10 text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-white">
          Privacy Policy
        </h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
      </div>

      {/* Content Section */}
      <section
        ref={contentRef}
        className="relative z-10 py-10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#0A0A30]/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2>1. Introduction</h2>
              <p>
                2WAY COMMUNICATIONS LIMITED ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 2waycommunications.pro or use our marketing services.
              </p>
              <p>
                We adhere to the General Data Protection Regulation (GDPR), the UK Data Protection Act 2018, and, where applicable, the Children's Online Privacy Protection Act (COPPA). By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>Personal Data</h3>
              <p>
                We may collect personally identifiable information, such as:
              </p>
              <ul>
                <li>Name, email address, phone number, and company name</li>
                <li>Billing information and payment details</li>
                <li>Job title and professional information</li>
                <li>Communication preferences</li>
                <li>Information you provide in forms, surveys, or other interactive areas of our services</li>
              </ul>

              <h3>Usage Data</h3>
              <p>
                We may also collect information about how our website and services are accessed and used, including:
              </p>
              <ul>
                <li>IP address, browser type, and device information</li>
                <li>Pages viewed and links clicked</li>
                <li>Time spent on pages and interaction data</li>
                <li>Referral sources and website navigation paths</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>
                We use the collected information for various purposes, including:
              </p>
              <ul>
                <li>Providing, operating, and maintaining our services</li>
                <li>Processing and completing transactions</li>
                <li>Sending administrative information, service updates, and marketing communications</li>
                <li>Responding to inquiries, comments, and questions</li>
                <li>Improving our website and services based on usage patterns</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2>4. Legal Basis for Processing (GDPR)</h2>
              <p>
                Under the GDPR, we process your personal data based on the following legal grounds:
              </p>
              <ul>
                <li><strong>Contractual necessity:</strong> Processing necessary for the performance of a contract with you</li>
                <li><strong>Legitimate interests:</strong> Processing necessary for our legitimate business interests, provided these interests don't override your rights</li>
                <li><strong>Legal compliance:</strong> Processing necessary to comply with applicable laws</li>
                <li><strong>Consent:</strong> Processing based on your specific consent for particular purposes</li>
              </ul>

              <h2>5. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will securely delete or anonymize your information when it is no longer needed for these purposes.
              </p>

              <h2>6. Data Sharing and Disclosure</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li><strong>Service providers:</strong> Third parties that help us deliver our services (e.g., payment processors, hosting providers, analytics services)</li>
                <li><strong>Business partners:</strong> With your consent, we may share your information with trusted business partners for marketing or promotional purposes</li>
                <li><strong>Legal requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate safeguards for your data</li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>

              <h2>7. Children's Privacy (COPPA)</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
              </p>

              <h2>8. Your Data Protection Rights</h2>
              <p>
                Under applicable data protection laws, you have the following rights:
              </p>
              <ul>
                <li><strong>Access:</strong> The right to request copies of your personal data</li>
                <li><strong>Rectification:</strong> The right to request correction of inaccurate information</li>
                <li><strong>Erasure:</strong> The right to request deletion of your personal data in certain circumstances</li>
                <li><strong>Restriction:</strong> The right to request restriction of processing of your personal data</li>
                <li><strong>Data portability:</strong> The right to receive your personal data in a structured, commonly used format</li>
                <li><strong>Objection:</strong> The right to object to the processing of your personal data</li>
                <li><strong>Automated decision-making:</strong> The right not to be subject to automated decision-making, including profiling, with significant effects</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in Section 12.
              </p>

              <h2>9. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and track information about your browsing activities on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our services may not function properly without cookies.
              </p>
              <p>
                Our cookie policy includes:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count visitors and analyze how users navigate our website</li>
                <li><strong>Functionality cookies:</strong> Enable us to personalize content for you</li>
                <li><strong>Targeting cookies:</strong> Record your visit to our website, the pages you visit, and the links you follow to deliver relevant advertisements</li>
              </ul>

              <h2>10. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your personal data internationally, we take steps to ensure adequate protection for your information, which may include:
              </p>
              <ul>
                <li>Using EU-approved Standard Contractual Clauses</li>
                <li>Transferring to countries with an adequacy decision from the European Commission</li>
                <li>Implementing appropriate safeguards as required by applicable law</li>
              </ul>

              <h2>12. Contact Information</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p>
                Data Protection Officer<br />
                2WAY COMMUNICATIONS LIMITED<br />
                6 Rockdene Close<br />
                East Grinstead RH19 3HA<br />
                England<br />
                Email: privacy@2waycommunications.pro<br />
                Phone: +44 113 283 9401
              </p>
              <p>
                If you are located in the European Economic Area, you have the right to lodge a complaint with your local data protection authority.
              </p>

              <h2>13. Changes to this Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <p className="text-sm text-white/50 mt-8">
                Last Updated: April 15, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
