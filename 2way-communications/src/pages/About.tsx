import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import use3DScene from '../hooks/use3DScene';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Initialize 3D scene
  use3DScene({ containerId: 'about-3d-scene', color1: '#7B61FF', color2: '#FF3366' });

  // Setup animations
  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Section animations
    const sections = [missionRef, historyRef, valuesRef, teamRef];

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

  // Company values data
  const companyValues = [
    {
      id: 1,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge marketing solutions.',
      icon: (
        <svg key="innovation-icon" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: '#7B61FF'
    },
    {
      id: 2,
      title: 'Data-Driven',
      description: 'We base our strategies on comprehensive analytics and insights, ensuring measurable results.',
      icon: (
        <svg key="data-icon" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21H3V3M21 9l-8 8-4-4-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: '#00D4FF'
    },
    {
      id: 3,
      title: 'Client-Centric',
      description: "Our clients' success is our priority; we build long-term partnerships based on trust and results.",
      icon: (
        <svg key="client-icon" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.773-4.5 2m0 0c-1.168-1.227-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: '#FF3366'
    },
    {
      id: 4,
      title: 'Integrity',
      description: 'We conduct business with the highest standards of ethics, transparency, and honesty.',
      icon: (
        <svg key="integrity-icon" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: '#32D74B'
    }
  ];

  // Team data
  const teamMembers = [
    {
      id: 1,
      name: 'Michael Roy Garside',
      role: 'Director & Founder',
      bio: 'With over 20 years of experience in marketing and business development, Michael founded 2WAY COMMUNICATIONS with a vision to transform how companies approach digital marketing.',
      image: '/assets/team/profile-placeholder.png'
    },
    {
      id: 2,
      name: 'Alexandra Chen',
      role: 'Head of Strategy',
      bio: 'Alexandra brings a wealth of experience in developing comprehensive marketing strategies that align with business objectives and deliver exceptional results.',
      image: '/assets/team/profile-placeholder.png'
    },
    {
      id: 3,
      name: 'Daniel Wright',
      role: 'Creative Director',
      bio: 'Daniel leads our creative team, bringing innovative design thinking and brand development expertise to every project we undertake.',
      image: '/assets/team/profile-placeholder.png'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Data Analytics Lead',
      bio: 'Sarah specializes in transforming complex data into actionable insights, helping our clients make informed decisions about their marketing investments.',
      image: '/assets/team/profile-placeholder.png'
    }
  ];

  return (
    <div className="relative pt-24 pb-20">
      {/* 3D Background */}
      <div
        id="about-3d-scene"
        className="absolute inset-0 opacity-30 z-0"
      />

      {/* Header Section */}
      <div
        ref={headerRef}
        className="relative z-10 container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] to-[#FF3366]">
          About 2WAY COMMUNICATIONS
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          We are a forward-thinking marketing agency dedicated to helping businesses thrive in the digital landscape.
          Our innovative approaches and data-driven strategies create measurable results.
        </p>
      </div>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="relative z-10 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Mission Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Our <span className="text-[#7B61FF]">Mission</span>
              </h2>
              <p className="text-white/80 mb-6">
                At 2WAY COMMUNICATIONS, our mission is to empower businesses with innovative marketing solutions that
                drive growth and create lasting value. We believe in the power of strategic communication to transform
                brands and connect them meaningfully with their audiences.
              </p>
              <p className="text-white/80">
                We're committed to staying at the forefront of digital marketing technologies and trends, ensuring
                our clients always receive the most effective and forward-thinking solutions available.
              </p>
            </div>

            {/* Mission Visualization */}
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A30]/80 to-black/80 rounded-2xl transform rotate-3 shadow-xl border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Orbital rings */}
                  <div className="absolute w-64 h-64 rounded-full border-2 border-[#7B61FF]/30 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute w-48 h-48 rounded-full border-2 border-[#00D4FF]/30 top-8 left-8 animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute w-32 h-32 rounded-full border-2 border-[#FF3366]/30 top-16 left-16 animate-[spin_10s_linear_infinite]" />

                  {/* Core */}
                  <div className="absolute w-16 h-16 bg-gradient-to-br from-[#7B61FF] to-[#FF3366] rounded-full top-24 left-24 flex items-center justify-center shadow-[0_0_20px_rgba(123,97,255,0.5)]">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>

                  {/* Orbital elements */}
                  <div className="absolute top-4 left-28 w-8 h-8 bg-[#7B61FF] rounded-full shadow-lg animate-[float_4s_ease-in-out_infinite]" />
                  <div className="absolute top-40 left-8 w-6 h-6 bg-[#00D4FF] rounded-full shadow-lg animate-[float_5s_ease-in-out_infinite_0.5s]" />
                  <div className="absolute top-20 left-12 w-5 h-5 bg-[#FF3366] rounded-full shadow-lg animate-[float_6s_ease-in-out_infinite_1s]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section
        ref={historyRef}
        className="relative z-10 py-16 bg-gradient-to-b from-black/0 to-[#0A0A30]/40"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            Our <span className="text-[#00D4FF]">Journey</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative pl-8 sm:pl-12 ml-4 border-l-2 border-[#00D4FF]/50">
              {/* Year 1 */}
              <div className="mb-12 relative">
                <div className="absolute -left-14 w-10 h-10 rounded-full bg-[#0A0A30] border-2 border-[#00D4FF] flex items-center justify-center">
                  <span className="font-bold text-[#00D4FF]">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2010: Foundation</h3>
                <p className="text-white/80">
                  2WAY COMMUNICATIONS was founded in East Grinstead with a vision to provide innovative marketing solutions
                  for businesses looking to expand their digital presence. Starting with a small team of 3 marketing specialists,
                  we focused on helping local businesses establish effective online strategies.
                </p>
              </div>

              {/* Year 2 */}
              <div className="mb-12 relative">
                <div className="absolute -left-14 w-10 h-10 rounded-full bg-[#0A0A30] border-2 border-[#00D4FF] flex items-center justify-center">
                  <span className="font-bold text-[#00D4FF]">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2015: Growth & Expansion</h3>
                <p className="text-white/80">
                  After establishing a strong reputation for delivering results, we expanded our team and services to accommodate
                  a growing client base. This period saw us develop our proprietary analytics framework, enabling more precise
                  measurement and optimization of marketing campaigns.
                </p>
              </div>

              {/* Year 3 */}
              <div className="mb-12 relative">
                <div className="absolute -left-14 w-10 h-10 rounded-full bg-[#0A0A30] border-2 border-[#00D4FF] flex items-center justify-center">
                  <span className="font-bold text-[#00D4FF]">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2018: International Recognition</h3>
                <p className="text-white/80">
                  Our innovative approach to digital marketing earned international recognition, with our team
                  receiving several industry awards. We began working with clients across Europe and expanded our services
                  to include advanced data analytics and AI-driven marketing solutions.
                </p>
              </div>

              {/* Year 4 */}
              <div className="relative">
                <div className="absolute -left-14 w-10 h-10 rounded-full bg-[#0A0A30] border-2 border-[#00D4FF] flex items-center justify-center">
                  <span className="font-bold text-[#00D4FF]">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Today: Industry Leaders</h3>
                <p className="text-white/80">
                  Today, 2WAY COMMUNICATIONS stands as a leader in innovative marketing solutions. Our team of specialists
                  continues to pioneer new approaches, combining creativity with data-driven strategies to deliver exceptional
                  results for our diverse client portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="relative z-10 py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            Our <span className="text-[#FF3366]">Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {companyValues.map((value) => (
              <div
                key={value.id}
                className="p-6 rounded-xl bg-[#0A0A30]/50 backdrop-blur-sm border border-white/10 hover:border-opacity-50 transition-all duration-300 group hover:border"
                style={{ borderColor: value.color }}
              >
                <div
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ color: value.color }}
                >
                  {value.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3 text-white group-hover:text-opacity-100 transition-colors duration-300"
                  style={{ color: value.color }}
                >
                  {value.title}
                </h3>
                <p className="text-white/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className="relative z-10 py-16 bg-gradient-to-b from-[#0A0A30]/40 to-black/0"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Our <span className="text-[#00D4FF]">Team</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto text-center mb-12">
            Meet the passionate experts behind 2WAY COMMUNICATIONS. Our diverse team brings together expertise
            in marketing, design, technology, and business strategy.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group"
              >
                <div className="mb-5 overflow-hidden rounded-xl aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#FF3366]/20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/30 to-[#FF3366]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Team member image - using actual images */}
                  <div className="h-full w-full absolute inset-0">
                    {member.id === 1 && (
                      <img src="/assets/team/michael.jpg" alt={member.name} className="w-full h-full object-cover" />
                    )}
                    {member.id === 2 && (
                      <img src="/assets/team/alexandra.jpg" alt={member.name} className="w-full h-full object-cover" />
                    )}
                    {member.id === 3 && (
                      <img src="/assets/team/daniel.jpg" alt={member.name} className="w-full h-full object-cover" />
                    )}
                    {member.id === 4 && (
                      <img src="/assets/team/sarah.jpg" alt={member.name} className="w-full h-full object-cover" />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#00D4FF] mb-3">{member.role}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-[#0A0A30]/80 to-black/80 backdrop-blur-lg border border-white/10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Join Our Team
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We're always looking for talented individuals who are passionate about marketing and innovation.
              If you're interested in working with us, get in touch!
            </p>
            <button className="rounded-full bg-gradient-to-r from-[#7B61FF] to-[#FF3366] px-8 py-3 font-medium text-white transition-transform hover:scale-105 shadow-lg">
              View Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
