import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TermsOfService = () => {
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
          Terms of Service
        </h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          Please read these terms carefully before using our services.
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
                Welcome to 2WAY COMMUNICATIONS LIMITED. These Terms of Service ("Terms") govern your use of our website located at 2waycommunications.pro, as well as any associated services, applications, or content (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>

              <h2>2. Definitions</h2>
              <p>
                <strong>"Client"</strong> refers to any individual or entity that purchases or uses our marketing services.<br />
                <strong>"Content"</strong> refers to all material, including text, images, videos, designs, and other media, that we create for you as part of our Services.<br />
                <strong>"Contract"</strong> refers to the specific agreement between 2WAY COMMUNICATIONS LIMITED and the Client outlining the scope, deliverables, timeline, and payment terms for specific marketing services.
              </p>

              <h2>3. Services</h2>
              <p>
                2WAY COMMUNICATIONS LIMITED provides various marketing services, including but not limited to digital marketing strategy, content creation, brand development, and marketing analytics. The specific services to be provided will be outlined in the Contract between 2WAY COMMUNICATIONS LIMITED and the Client.
              </p>

              <h2>4. Client Responsibilities</h2>
              <p>
                The Client agrees to:
              </p>
              <ul>
                <li>Provide accurate and complete information necessary for the provision of services</li>
                <li>Review and provide feedback on deliverables within agreed timeframes</li>
                <li>Pay all fees as outlined in the Contract</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Obtain necessary rights or permissions for any content or materials provided to 2WAY COMMUNICATIONS LIMITED</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                Unless otherwise specified in the Contract:
              </p>
              <ul>
                <li>2WAY COMMUNICATIONS LIMITED retains intellectual property rights to all methodologies, processes, and proprietary systems used in the delivery of services</li>
                <li>Upon full payment, the Client receives a non-exclusive license to use the Content created specifically for the Client as part of the Services</li>
                <li>The Client retains all rights to their pre-existing materials provided to 2WAY COMMUNICATIONS LIMITED</li>
              </ul>

              <h2>6. Payment Terms</h2>
              <p>
                Payment terms will be specified in the Contract. Unless otherwise stated:
              </p>
              <ul>
                <li>All invoices are due within 30 days of issuance</li>
                <li>Late payments may incur additional fees</li>
                <li>2WAY COMMUNICATIONS LIMITED reserves the right to suspend services if payment is not received within the agreed timeframe</li>
              </ul>

              <h2>7. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of all proprietary or sensitive information shared during the course of the business relationship. This includes, but is not limited to, business strategies, client lists, financial information, and marketing plans.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, 2WAY COMMUNICATIONS LIMITED shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, arising out of or relating to the Services, whether based on warranty, contract, tort (including negligence), or any other legal theory.
              </p>
              <p>
                Our total liability for all claims related to the Services shall not exceed the total amount paid by the Client to 2WAY COMMUNICATIONS LIMITED for the Services giving rise to the claim during the three (3) months preceding the claim.
              </p>

              <h2>9. Termination</h2>
              <p>
                Either party may terminate the Contract with written notice if:
              </p>
              <ul>
                <li>The other party breaches any material term of the Contract and fails to remedy the breach within 14 days of receiving notice</li>
                <li>The other party becomes insolvent, makes an assignment for the benefit of creditors, or has a receiver appointed for its assets</li>
              </ul>
              <p>
                Upon termination, the Client shall pay for all services rendered up to the date of termination.
              </p>

              <h2>10. Amendments</h2>
              <p>
                2WAY COMMUNICATIONS LIMITED reserves the right to modify these Terms at any time. We will provide notice of any material changes. Your continued use of our Services after such modifications will constitute your acknowledgment and agreement to the modified Terms.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:<br />
                2WAY COMMUNICATIONS LIMITED<br />
                6 Rockdene Close<br />
                East Grinstead RH19 3HA<br />
                England<br />
                Phone: +44 113 283 9401<br />
                Email: info@2waycommunications.pro
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

export default TermsOfService;
