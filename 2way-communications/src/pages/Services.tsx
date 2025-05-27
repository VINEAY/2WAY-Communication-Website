import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import use3DScene from '../hooks/use3DScene';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const serviceSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize 3D scene
  use3DScene({ containerId: 'services-3d-scene', color1: '#00D4FF', color2: '#7B61FF' });

  // Setup animations
  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Service sections animations
    serviceSectionsRef.current.forEach((section, index) => {
      if (!section) return;

      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Cleanup
    return () => {
      const triggers = ScrollTrigger.getAll();
      for (const trigger of triggers) {
        trigger.kill();
      }
    };
  }, []);

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      client: 'Global Tech Corporation',
      title: 'Digital Transformation Campaign',
      description: 'We developed and executed a comprehensive digital marketing strategy that transformed the client\'s online presence and lead generation capabilities.',
      achievements: [
        { label: 'Increase in Website Traffic', value: '187%', color: '#00D4FF' },
        { label: 'Conversion Rate Improvement', value: '32%', color: '#FF3366' },
        { label: 'Return on Ad Spend (ROAS)', value: '4.8x', color: '#7B61FF' }
      ],
      services: ['Search Engine Optimization', 'Pay-Per-Click Advertising', 'Content Marketing Strategy']
    },
    {
      id: 2,
      client: 'European Retail Chain',
      title: 'Omnichannel Marketing Integration',
      description: 'Unified the client\'s marketing approach across all channels, creating a seamless customer journey from digital touchpoints to in-store experiences.',
      achievements: [
        { label: 'Customer Engagement Increase', value: '78%', color: '#FF3366' },
        { label: 'Online-to-Offline Conversion', value: '42%', color: '#00D4FF' },
        { label: 'Customer Lifetime Value Growth', value: '56%', color: '#7B61FF' }
      ],
      services: ['CRM Implementation', 'Marketing Automation', 'Customer Journey Mapping']
    },
    {
      id: 3,
      client: 'Startup SaaS Platform',
      title: 'Market Penetration Strategy',
      description: 'Designed and implemented a go-to-market strategy for a new SaaS product, establishing market presence and driving rapid user acquisition.',
      achievements: [
        { label: 'User Acquisition Cost Reduction', value: '61%', color: '#7B61FF' },
        { label: 'Monthly Recurring Revenue Growth', value: '218%', color: '#00D4FF' },
        { label: 'Product Trial Conversion Rate', value: '28%', color: '#FF3366' }
      ],
      services: ['Market Research', 'Growth Hacking', 'Product Marketing Strategy']
    }
  ];

  return (
    <div className="relative pt-24 pb-20">
      {/* 3D Background */}
      <div
        id="services-3d-scene"
        className="absolute inset-0 opacity-30 z-0"
      />

      {/* Header Section */}
      <div
        ref={headerRef}
        className="relative z-10 container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#7B61FF]">
          Our Services & Case Studies
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Discover how 2WAY COMMUNICATIONS LIMITED has helped businesses transform their marketing strategies and achieve exceptional results.
          Our proven methodologies and innovative approaches create measurable impact.
        </p>
      </div>

      {/* Service List */}
      <div className="relative z-10 container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service Item 1 */}
          <div className="p-6 rounded-xl bg-[#0A0A30]/50 backdrop-blur-sm border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#7B61FF] mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00D4FF] transition-colors duration-300">
              Digital Marketing Strategy
            </h3>
            <p className="text-white/70 mb-4">
              Comprehensive, data-driven marketing strategies tailored to your business goals and target audience.
            </p>
            <button className="inline-flex items-center text-[#00D4FF] hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Service Item 2 */}
          <div className="p-6 rounded-xl bg-[#0A0A30]/50 backdrop-blur-sm border border-white/10 hover:border-[#FF3366]/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF3366] to-[#7B61FF] mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 19v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M19 5v14a2 2 0 002 2h-2a2 2 0 002-2V5a2 2 0 00-2-2h2a2 2 0 00-2 2z" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF3366] transition-colors duration-300">
              Content & Brand Development
            </h3>
            <p className="text-white/70 mb-4">
              Strategic content creation and brand positioning that resonates with your audience and drives engagement.
            </p>
            <button className="inline-flex items-center text-[#FF3366] hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Service Item 3 */}
          <div className="p-6 rounded-xl bg-[#0A0A30]/50 backdrop-blur-sm border border-white/10 hover:border-[#7B61FF]/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#00D4FF] mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path d="M12 8v8M8 12h8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#7B61FF] transition-colors duration-300">
              Analytics & Performance
            </h3>
            <p className="text-white/70 mb-4">
              Advanced analytics and reporting solutions that provide actionable insights to optimize your marketing ROI.
            </p>
            <button className="inline-flex items-center text-[#7B61FF] hover:underline">
              Learn more
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="relative z-10 py-16 bg-gradient-to-b from-black/0 to-[#0A0A30]/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            Success Stories With <span className="text-[#00D4FF]">Real Results</span>
          </h2>

          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              ref={(el) => {
                if (el) {
                  serviceSectionsRef.current[index] = el;
                }
              }}
              className="max-w-5xl mx-auto mb-24 last:mb-0"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Case Study Content */}
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="p-8 rounded-xl bg-[#0A0A30]/80 backdrop-blur-md border border-white/10 shadow-xl">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm text-white/70 mb-4">
                      {caseStudy.client}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {caseStudy.title}
                    </h3>
                    <p className="text-white/80 mb-6">
                      {caseStudy.description}
                    </p>

                    <h4 className="text-lg font-semibold mb-4 text-white/90">Key Services:</h4>
                    <ul className="mb-6 space-y-2">
                      {caseStudy.services.map((service) => (
                        <li key={`${caseStudy.id}-service-${service}`} className="flex items-start">
                          <div className="mr-3 mt-1 text-[#00D4FF]">
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-white/80">{service}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-5 py-2 text-white transition-colors duration-300">
                      View Full Case Study
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Case Study Stats Visualization */}
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative h-[400px] w-full rounded-xl bg-[#0A0A30]/30 backdrop-blur-sm border border-white/10 p-6 flex flex-col justify-center">
                    <h4 className="text-xl font-semibold mb-8 text-white">
                      Measurable Results
                    </h4>

                    <div className="space-y-8">
                      {caseStudy.achievements.map((achievement) => (
                        <div key={`${caseStudy.id}-achievement-${achievement.label}`} className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white/80">{achievement.label}</span>
                            <span className="text-2xl font-bold" style={{ color: achievement.color }}>
                              {achievement.value}
                            </span>
                          </div>
                          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full animate-pulse"
                              style={{
                                width: `${Number.parseInt(achievement.value, 10) * 2}%`,
                                maxWidth: '100%',
                                backgroundColor: achievement.color,
                                boxShadow: `0 0 10px ${achievement.color}`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${caseStudy.achievements[0].color} 0%, transparent 70%)` }} />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${caseStudy.achievements[1].color} 0%, transparent 70%)` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Let's discuss how our marketing expertise can help your business reach new heights.
            Our team is ready to develop a customized strategy tailored to your specific goals.
          </p>
          <button className="rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF3366] px-8 py-3 font-medium text-white transition-transform hover:scale-105 shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
