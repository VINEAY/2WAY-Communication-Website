import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import use3DScene from '../hooks/use3DScene';
import { Link, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Initialize 3D scene
  use3DScene({ containerId: 'team-3d-scene', color1: '#7B61FF', color2: '#FF3366' });

  // Setup animations
  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Section animations
    const sections = [teamSectionRef, ctaSectionRef];

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

  // Team data - extended version with more details
  const teamMembers = [
    {
      id: 1,
      name: 'Michael Roy Garside',
      role: 'Director & Founder',
      bio: 'With over 20 years of experience in marketing and business development, Michael founded 2WAY COMMUNICATIONS with a vision to transform how companies approach digital marketing.',
      extendedBio: 'Prior to founding 2WAY COMMUNICATIONS, Michael held senior positions at several leading marketing agencies and technology companies. His expertise spans digital transformation, brand strategy, and innovative marketing solutions. Michael is frequently invited to speak at industry conferences and contributes to major marketing publications.',
      expertise: ['Strategic Planning', 'Business Development', 'Brand Positioning'],
      education: 'MBA, London Business School',
      image: '/assets/team/michael.jpg'
    },
    {
      id: 2,
      name: 'Alexandra Chen',
      role: 'Head of Strategy',
      bio: 'Alexandra brings a wealth of experience in developing comprehensive marketing strategies that align with business objectives and deliver exceptional results.',
      extendedBio: 'Alexandra has spent over 15 years refining her approach to strategic marketing planning. Her data-driven methodology has helped numerous global brands achieve significant growth. She specializes in creating scalable strategies that evolve with changing market conditions and consumer behaviors.',
      expertise: ['Market Research', 'Campaign Strategy', 'Consumer Insights'],
      education: 'MSc Marketing Analytics, University of Oxford',
      image: '/assets/team/alexandra.jpg'
    },
    {
      id: 3,
      name: 'Daniel Wright',
      role: 'Creative Director',
      bio: 'Daniel leads our creative team, bringing innovative design thinking and brand development expertise to every project we undertake.',
      extendedBio: 'With a background in both traditional and digital design, Daniel has a unique perspective on visual communication. His work has been recognized with numerous industry awards. Daniel is passionate about using design as a strategic business tool and mentoring emerging creative talent.',
      expertise: ['Brand Identity', 'UX/UI Design', 'Visual Storytelling'],
      education: 'BA Design, Central Saint Martins',
      image: '/assets/team/daniel.jpg'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Data Analytics Lead',
      bio: 'Sarah specializes in transforming complex data into actionable insights, helping our clients make informed decisions about their marketing investments.',
      extendedBio: 'Sarah is an expert in marketing analytics with a strong foundation in both statistical analysis and marketing principles. She has pioneered several proprietary analytics models that help quantify marketing impact across channels. Her work has directly contributed to significant ROI improvements for our clients.',
      expertise: ['Data Visualization', 'Predictive Modeling', 'Attribution Analysis'],
      education: 'PhD Statistics, Imperial College London',
      image: '/assets/team/sarah.jpg'
    },
    {
      id: 5,
      name: 'James Wilson',
      role: 'Digital Marketing Specialist',
      bio: 'James is an expert in digital marketing channels, with particular focus on PPC, SEO, and social media strategy.',
      extendedBio: 'With a decade of experience in digital marketing, James has managed campaigns across diverse industries and platforms. He stays at the cutting edge of digital marketing trends and algorithm changes, ensuring our clients always receive optimal performance from their digital campaigns.',
      expertise: ['Search Engine Optimization', 'Paid Media', 'Social Strategy'],
      education: 'BSc Digital Marketing, University of Manchester',
      image: '/assets/team/team1.jpg'
    },
    {
      id: 6,
      name: 'Emily Rodriguez',
      role: 'Content Strategist',
      bio: 'Emily develops content strategies that engage audiences and drive meaningful conversions across all touchpoints.',
      extendedBio: 'Emily has a background in journalism and content marketing, giving her a unique perspective on storytelling for brands. She has developed content strategies for companies ranging from startups to Fortune 500 organizations. Her approach focuses on creating consistent, valuable content that builds audience relationships.',
      expertise: ['Content Planning', 'Copywriting', 'Editorial Strategy'],
      education: 'MA Communications, Cardiff University',
      image: '/assets/team/team2.jpg'
    },
    {
      id: 7,
      name: 'Robert Zhang',
      role: 'Technology Director',
      bio: 'Robert leads our technical implementations, ensuring seamless integration of marketing technologies and platforms.',
      extendedBio: 'Robert bridges the gap between marketing strategy and technical execution. With extensive experience in MarTech stack development and systems integration, he helps clients leverage technology to achieve their marketing objectives. He specializes in CRM implementation, marketing automation, and custom solutions development.',
      expertise: ['Marketing Automation', 'CRM Systems', 'Technical Integration'],
      education: 'MSc Computer Science, University of Edinburgh',
      image: '/assets/team/team3.jpg'
    },
    {
      id: 8,
      name: 'Sophia Parker',
      role: 'Client Relations Manager',
      bio: 'Sophia ensures our clients receive exceptional service and that all projects are delivered to the highest standards.',
      extendedBio: 'With a background in both marketing and account management, Sophia understands the complexities of client relationships in the marketing industry. She excels at translating client objectives into actionable project plans and maintaining clear communication throughout project lifecycles.',
      expertise: ['Project Management', 'Client Communication', 'Quality Assurance'],
      education: 'BA Business Management, University of Bristol',
      image: '/assets/team/team1.jpg'
    }
  ];

  // State for selected team member
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  // Handle Contact Us button click
  const handleContactUs = () => {
    // Scroll to top of home page and show contact form
    navigate('/#contact');
  };

  return (
    <div className="relative pt-24 pb-20">
      {/* 3D Background */}
      <div
        id="team-3d-scene"
        className="absolute inset-0 opacity-30 z-0"
      />

      {/* Header Section */}
      <div
        ref={headerRef}
        className="relative z-10 container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] to-[#FF3366]">
          Our Team
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Meet the talented professionals who make 2WAY COMMUNICATIONS a leader in innovative marketing solutions.
          Our diverse team brings together expertise in strategy, creativity, technology, and analytics.
        </p>
      </div>

      {/* Team Grid Section */}
      <section
        ref={teamSectionRef}
        className="relative z-10 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="mb-5 overflow-hidden rounded-xl aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B61FF]/20 to-[#FF3366]/20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/30 to-[#FF3366]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Team member image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#00D4FF] mb-3">{member.role}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>

                <button className="mt-4 inline-flex items-center text-[#FF3366] text-sm group-hover:underline">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedMember(null)} />

          <div className="relative bg-[#0A0A30] border border-white/10 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedMember(null)}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Image */}
                <div className="md:w-1/3">
                  <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Content */}
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{selectedMember.name}</h3>
                  <p className="text-[#00D4FF] text-xl mb-6">{selectedMember.role}</p>

                  <h4 className="text-white font-medium mb-3">About</h4>
                  <p className="text-white/80 mb-6">{selectedMember.extendedBio}</p>

                  <h4 className="text-white font-medium mb-3">Areas of Expertise</h4>
                  <ul className="mb-6 flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill) => (
                      <li key={`${selectedMember.id}-${skill}`} className="px-3 py-1 rounded-full bg-[#7B61FF]/20 text-[#7B61FF] text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-white font-medium mb-3">Education</h4>
                  <p className="text-white/80">{selectedMember.education}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Our Team Section */}
      <section
        ref={ctaSectionRef}
        className="relative z-10 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-[#0A0A30]/80 to-black/80 backdrop-blur-lg border border-white/10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact our team of marketing experts today to discuss your project needs
              and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactUs}
                className="rounded-lg bg-gradient-to-r from-[#7B61FF] to-[#FF3366] px-8 py-3 font-medium text-white transition-transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
              <a
                href="mailto:info@2waycommunications.pro"
                className="rounded-lg bg-white/10 hover:bg-white/20 px-8 py-3 font-medium text-white transition-colors duration-300">
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
