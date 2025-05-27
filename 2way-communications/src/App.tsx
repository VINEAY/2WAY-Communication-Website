import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import History from "./pages/History";
import Partners from "./pages/Partners";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Layouts
import MainLayout from "./layouts/MainLayout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of 3D assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0A0A30] text-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">2WAY COMMUNICATIONS</h1>
          <div className="h-2 w-64 overflow-hidden rounded-full bg-gray-700">
            <div className="animate-pulse h-full w-full bg-gradient-to-r from-[#00D4FF] to-[#FF3366]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="team" element={<Team />} />
          <Route path="history" element={<History />} />
          <Route path="partners" element={<Partners />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
