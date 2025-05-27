import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import use3DScene from '../hooks/use3DScene';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const applyRef = useRef<HTMLDivElement>(null);

  // Initialize 3D scene
  use3DScene({ containerId: 'partners-3d-scene', color1: '#00D4FF', color2: '#FF3366' });

  // Setup animations
  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Section animations
    const sections = [partnersRef, benefitsRef, applyRef];

    for (const section of sections) {
      if (!section.current) continue;

      gsap.fromTo(
        section.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Cleanup
    return () => {
      const triggers = ScrollTrigger.getAll();
      for (const trigger of triggers) {
        trigger.kill();
      }
    };
  }, []);

  // Partner data
  const partners = [
    {
      id: 1,
      name: 'TechVision Labs',
      category: 'Technology',
      logo: '/assets/partners/placeholder-logo.png'
    },
    {
      id: 2,
      name: 'Global Retail Solutions',
      category: 'Retail',
      logo: '/assets/partners/placeholder-logo.png'
    },
    {
      id: 3,
      name: 'Innovative Finance Group',
      category: 'Finance',
      logo: '/assets/partners/placeholder-logo.png'
    },
    {
      id: 4,
      name: 'HealthCare Pioneers',
      category: 'Healthcare',
      logo: '/assets/partners/placeholder-logo.png'
    },
    {
      id: 5,
      name: 'EduTech Solutions',
      category: 'Education',
      logo: '/assets/partners/placeholder-logo.png'
    },
    {
      id: 6,
      name: 'Sustainable Energy Partners',
      category: 'Energy',
      logo: '/assets/partners/placeholder-logo.png'
    }
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: 'Co-Marketing Opportunities',
      description: 'Collaborate on joint marketing campaigns, events, and content to reach new audiences.',
      icon: (
        <svg key="co-marketing-icon" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Revenue Sharing',
      description: 'Earn commission on clients referred to 2WAY COMMUNICATIONS with our transparent revenue sharing model.',
      icon: (
        <svg key="revenue-icon" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Technical Support',
      description: 'Get priority access to our technical team for integration and implementation support.',
      icon: (
        <svg key="support-icon" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Training & Resources',
      description: 'Access exclusive training materials, tools, and resources to enhance your marketing capabilities.',
      icon: (
        <svg key="training-icon" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  // Placeholder image for partner logos
  const renderPlaceholderLogo = (category: string) => {
    let color: string;

    switch (category) {
      case 'Technology':
        color = '#7B61FF';
        break;
      case 'Retail':
        color = '#FF3366';
        break;
      case 'Finance':
        color = '#00D4FF';
        break;
      case 'Healthcare':
        color = '#32D74B';
        break;
      case 'Education':
        color = '#FF9500';
        break;
      case 'Energy':
        color = '#BF5AF2';
        break;
      default:
        color = '#00D4FF';
    }

    return (
      <div className="w-full h-full flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex flex-col items-center justify-center">
          <div
            className="text-4xl font-bold mb-2"
            style={{ color }}
          >
            {category.charAt(0)}
          </div>
          <div className="text-white/80 text-xs text-center">
            Partner Logo
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative pt-24 pb-20">
      {/* 3D Background */}
      <div
        id="partners-3d-scene"
        className="absolute inset-0 opacity-30 z-0"
      />

      {/* Header Section */}
      <div
        ref={headerRef}
        className="relative z-10 container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#FF3366]">
          Partner Program
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Join forces with 2WAY COMMUNICATIONS to expand your service offerings and create new revenue opportunities.
          Our partner program is designed to foster collaborative growth and mutual success.
        </p>
      </div>

      {/* Partners Grid Section */}
      <section
        ref={partnersRef}
        className="relative z-10 py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            Our <span className="text-[#00D4FF]">Partners</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="aspect-video"
              >
                {renderPlaceholderLogo(partner.category)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="relative z-10 py-16 bg-gradient-to-b from-[#0A0A30]/40 to-transparent"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">
            Partnership <span className="text-[#FF3366]">Benefits</span>
          </h2>
          <p className="text-lg text-white/80 mb-12 text-center max-w-3xl mx-auto">
            Our partners enjoy exclusive benefits designed to help grow their business
            and deliver enhanced value to their clients.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="p-6 rounded-xl bg-[#0A0A30]/50 backdrop-blur-sm border border-white/10 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-6 text-[#00D4FF]">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section
        ref={applyRef}
        className="relative z-10 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A0A30]/80 to-black/80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-white text-center">
                Become a Partner
              </h2>
              <p className="text-white/80 text-center mb-8">
                Interested in partnering with 2WAY COMMUNICATIONS? Fill out the form below and our partnership team will contact you to discuss the next steps.
              </p>

              <form className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/80 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-white/80 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm text-white/80 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm text-white/80 mb-1">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                    placeholder="Describe your business and how you'd like to partner with us"
                  />
                </div>

                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#FF3366] px-8 py-3 font-medium text-white transition-transform hover:scale-[1.02] shadow-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
