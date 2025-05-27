import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import use3DScene from '../hooks/use3DScene';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scene3dRef = useRef<HTMLDivElement>(null);
  const aiSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // Initialize 3D scene
  use3DScene({ containerId: 'hero-3d-scene' });

  // Animations
  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();

    heroTl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    heroTl.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.7'
    );

    heroTl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.7'
    );

    // Scroll animations
    if (aiSectionRef.current) {
      gsap.fromTo(
        aiSectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: aiSectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Cleanup function
    return () => {
      const triggers = ScrollTrigger.getAll();
      for (const trigger of triggers) {
        trigger.kill();
      }
    };
  }, []);

  // Add effect for scrolling to contact form if URL has #contact hash
  useEffect(() => {
    if (window.location.hash === '#contact' && contactSectionRef.current) {
      setTimeout(() => {
        contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Small delay to ensure everything is loaded
    }
  }, []);

  // Handle "Get personalized recommendations" button click
  const handleAiButtonClick = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      >
        {/* 3D Background */}
        <div
          id="hero-3d-scene"
          ref={scene3dRef}
          className="absolute inset-0 z-0"
        />

        {/* Content */}
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#FF3366]"
            >
              Transform Your Marketing Strategy
            </h1>

            <p
              ref={subheadingRef}
              className="text-lg md:text-xl text-white/80 mb-8"
            >
              At 2WAY COMMUNICATIONS, we specialize in creating innovative marketing solutions
              that elevate your brand and drive measurable results. Our team of experts
              combines creativity with data-driven strategies to help your business thrive
              in the digital landscape.
            </p>

            <button
              ref={buttonRef}
              className="rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF3366] px-8 py-3 font-medium text-white transition-transform hover:scale-105 shadow-lg"
            >
              Discover Our Services
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section
        ref={aiSectionRef}
        className="py-20 relative"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#0A0A30]/80 to-black/0 z-0" />

        <div className="container relative z-10 px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* AI Illustration */}
            <div className="relative">
              <div className="relative h-[400px] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A30] to-black rounded-2xl transform -rotate-2 shadow-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 relative">
                    {/* AI Brain Visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <div className="absolute w-48 h-48 rounded-full border-4 border-[#00D4FF]/30 animate-[spin_8s_linear_infinite]" />
                        <div className="absolute w-36 h-36 rounded-full border-4 border-[#FF3366]/30 top-6 left-6 animate-[spin_6s_linear_infinite_reverse]" />
                        <div className="absolute w-24 h-24 rounded-full border-4 border-white/30 top-12 left-12 animate-[spin_4s_linear_infinite]" />

                        {/* Brain Core */}
                        <div className="absolute w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#FF3366] rounded-full top-16 left-16 blur-sm" />
                        <div className="absolute w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#FF3366] rounded-full top-16 left-16">
                          <div className="w-full h-full flex items-center justify-center text-white">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="white" strokeWidth="2" />
                              <path d="M12 18V22M12 2V6M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Data Elements */}
                    <div className="absolute top-0 left-0 flex flex-col bg-[#0A0A30]/80 p-3 rounded-md border border-[#00D4FF]/20 shadow-[0_0_15px_rgba(0,212,255,0.3)] animate-[float_4s_ease-in-out_infinite]">
                      <div className="w-20 h-1 bg-[#00D4FF]/50 rounded mb-1" />
                      <div className="w-16 h-1 bg-[#00D4FF]/30 rounded mb-1" />
                      <div className="w-12 h-1 bg-[#00D4FF]/20 rounded" />
                    </div>

                    <div className="absolute bottom-8 right-0 flex flex-col bg-[#0A0A30]/80 p-3 rounded-md border border-[#FF3366]/20 shadow-[0_0_15px_rgba(255,51,102,0.3)] animate-[float_5s_ease-in-out_infinite_0.5s]">
                      <div className="w-20 h-1 bg-[#FF3366]/50 rounded mb-1" />
                      <div className="w-16 h-1 bg-[#FF3366]/30 rounded mb-1" />
                      <div className="w-12 h-1 bg-[#FF3366]/20 rounded" />
                    </div>

                    <div className="absolute top-1/2 right-8 flex flex-col bg-[#0A0A30]/80 p-3 rounded-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-[float_4.5s_ease-in-out_infinite_1s]">
                      <div className="w-12 h-1 bg-white/50 rounded mb-1" />
                      <div className="w-16 h-1 bg-white/30 rounded mb-1" />
                      <div className="w-8 h-1 bg-white/20 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                AI-ассистент по стратегии продвижения
              </h2>

              <p className="text-lg text-white/80 mb-8">
                Наш ИИ проанализирует ваш бизнес и предложит эффективную стратегию увеличения дохода с помощью цифрового маркетинга.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF3366] p-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/80">Персонализированные рекомендации на основе данных</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF3366] p-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/80">Анализ конкурентов и рыночных тенденций</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF3366] p-1">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/80">Оптимизация маркетингового бюджета для максимальной эффективности</p>
                </li>
              </ul>

              <button
                onClick={handleAiButtonClick}
                className="rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF3366] px-8 py-3 font-medium text-white transition-transform hover:scale-105 shadow-lg"
              >
                Получить персональные рекомендации
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        ref={contactSectionRef}
        id="contact"
        className="py-20"
      >
        <div className="container px-4">
          <div className="max-w-2xl mx-auto bg-[#0A0A30]/80 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
              Свяжитесь с нами
            </h2>

            <form>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/80 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="block text-sm text-white/80 mb-1">
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                  placeholder="Название компании"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm text-white/80 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                  placeholder="Опишите свой бизнес или проект"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#FF3366] px-8 py-3 font-medium text-white transition-transform hover:scale-[1.02] shadow-lg"
              >
                Отправить запрос
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
