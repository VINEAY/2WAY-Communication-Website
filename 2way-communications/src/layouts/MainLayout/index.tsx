import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Handle contact button click
  const handleContactClick = () => {
    // If already on home page, scroll to contact section
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page with #contact hash
      navigate('/#contact');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold text-white">
            2WAY <span className="text-[#00D4FF]">COMMUNICATIONS</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="text-white/80 hover:text-[#00D4FF] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white/80 hover:text-[#00D4FF] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white/80 hover:text-[#00D4FF] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-white/80 hover:text-[#00D4FF] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-white/80 hover:text-[#00D4FF] transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={handleContactClick}
            className="rounded-full bg-gradient-to-r from-[#00D4FF] to-[#FF3366] px-6 py-2 font-medium text-white transition-transform hover:scale-105"
          >
            Contact Us
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A30] py-12">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">2WAY COMMUNICATIONS</h3>
            <p className="text-sm text-gray-400">
              Innovative marketing solutions tailored for your business success.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-[#00D4FF]">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#00D4FF]">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#00D4FF]">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#00D4FF]">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Contact</h4>
            <address className="not-italic">
              <p className="mb-2 text-sm text-gray-400">
                6 Rockdene Close<br />
                East Grinstead RH19 3HA<br />
                England
              </p>
              <p className="mb-2 text-sm text-gray-400">
                <a href="tel:441132839401" className="hover:text-[#00D4FF]">
                  +44 113 283 9401
                </a>
              </p>
              <p className="text-sm text-gray-400">
                <a href="mailto:info@2waycommunications.pro" className="hover:text-[#00D4FF]">
                  info@2waycommunications.pro
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/terms-of-service" className="hover:text-[#00D4FF]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-[#00D4FF]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} 2WAY COMMUNICATIONS LIMITED. All rights reserved.
            Director: Mr Michael Roy Garside.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
