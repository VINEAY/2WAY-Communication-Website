import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import use3DScene from '../hooks/use3DScene';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredPostRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  // Initialize 3D scene
  use3DScene({ containerId: 'blog-3d-scene', color1: '#FF3366', color2: '#7B61FF' });

  // Setup animations
  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Section animations
    const sections = [featuredPostRef, postsRef, newsletterRef];

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

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Digital Marketing',
      excerpt: 'Explore how artificial intelligence is revolutionizing marketing strategies and what this means for businesses in 2025 and beyond.',
      category: 'Technology',
      date: 'April 10, 2025',
      author: 'Michael Garside',
      image: '/assets/blog/blog1.jpg',
      featured: true,
      tags: ['AI', 'Digital Marketing', 'Technology Trends']
    },
    {
      id: 2,
      title: 'Building a Data-Driven Marketing Strategy',
      excerpt: 'Learn how to develop and implement a marketing strategy that leverages data analytics to drive decision-making and optimize ROI.',
      category: 'Strategy',
      date: 'March 28, 2025',
      author: 'Alexandra Chen',
      image: '/assets/blog/blog2.jpg',
      featured: false,
      tags: ['Data Analytics', 'Marketing Strategy', 'ROI']
    },
    {
      id: 3,
      title: 'The Power of Visual Storytelling in Brand Development',
      excerpt: 'Discover how visual elements can enhance your brand narrative and create deeper emotional connections with your audience.',
      category: 'Branding',
      date: 'March 15, 2025',
      author: 'Daniel Wright',
      image: '/assets/blog/blog3.jpg',
      featured: false,
      tags: ['Branding', 'Visual Design', 'Storytelling']
    },
    {
      id: 4,
      title: 'Cross-Channel Marketing: Integrating Your Digital Presence',
      excerpt: 'Tips and strategies for creating a cohesive marketing approach across multiple digital platforms and channels.',
      category: 'Digital',
      date: 'March 8, 2025',
      author: 'Sarah Johnson',
      image: '/assets/blog/blog4.jpg',
      featured: false,
      tags: ['Digital Marketing', 'Multi-Channel', 'Integration']
    },
    {
      id: 5,
      title: 'Understanding Customer Journey Analytics',
      excerpt: 'A deep dive into how mapping and analyzing the customer journey can lead to more effective marketing campaigns.',
      category: 'Analytics',
      date: 'February 22, 2025',
      author: 'Sarah Johnson',
      image: '/assets/blog/blog1.jpg',
      featured: false,
      tags: ['Customer Experience', 'Analytics', 'Journey Mapping']
    }
  ];

  // Featured post (first item with featured: true)
  const featuredPost = blogPosts.find(post => post.featured);

  // Regular posts (all non-featured posts)
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="relative pt-24 pb-20">
      {/* 3D Background */}
      <div
        id="blog-3d-scene"
        className="absolute inset-0 opacity-30 z-0"
      />

      {/* Header Section */}
      <div
        ref={headerRef}
        className="relative z-10 container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF3366] to-[#7B61FF]">
          Blog & Insights
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Stay updated with the latest marketing trends, strategies, and insights from our team of experts.
          Discover actionable tips and in-depth analysis to enhance your marketing efforts.
        </p>
      </div>

      {/* Featured Post Section */}
      {featuredPost && (
        <section
          ref={featuredPostRef}
          className="relative z-10 py-10"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-white">
              Featured Article
            </h2>

            <div className="grid md:grid-cols-2 gap-8 bg-[#0A0A30]/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
              {/* Featured Image */}
              <div className="h-[400px] min-h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#FF3366]/20 text-[#FF3366] mr-3">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-white/60">
                    {featuredPost.date}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {featuredPost.title}
                </h3>

                <p className="text-white/80 mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#FF3366]/20 flex items-center justify-center mr-3">
                    <span className="text-[#FF3366] font-bold">
                      {featuredPost.author.charAt(0)}
                    </span>
                  </div>
                  <span className="text-white/70">
                    {featuredPost.author}
                  </span>
                </div>

                <div className="mt-auto">
                  <button className="inline-flex items-center group text-[#FF3366]">
                    Read Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts Section */}
      <section
        ref={postsRef}
        className="relative z-10 py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-white">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#0A0A30]/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 mr-3">
                      {post.category}
                    </span>
                    <span className="text-xs text-white/60">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {post.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-white/80">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-white/70">
                        {post.author}
                      </span>
                    </div>

                    <button className="text-[#00D4FF] text-sm hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="rounded-lg bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        ref={newsletterRef}
        className="relative z-10 py-16 bg-gradient-to-b from-[#0A0A30]/40 to-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A0A30]/80 to-black/60 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4 text-white text-center">
                Stay Informed
              </h2>
              <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights, trends, and exclusive content delivered directly to your inbox.
              </p>

              <form className="max-w-lg mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#00D4FF]"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-gradient-to-r from-[#FF3366] to-[#7B61FF] px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] shadow-lg"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-white/50 text-xs mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
