// src/components/Footer.tsx
import React, { useState, useEffect } from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaCompass,
  FaChevronRight,
  FaBriefcase,
  FaCheck,
  FaEnvelope,
  FaPaperPlane,
  FaLock,
  FaArrowUp,
  FaHeart,
  FaCoffee,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [email, setEmail] = useState('');

  // Update year on mount
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  // Social media links data (using react-icons components)
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jerry_zhiya?igsh=M2djdHkzYjIwNHVk&utm_source=ig_contact_invite',
      Icon: FaInstagram,
      gradient: 'from-purple-600 via-pink-600 to-orange-500',
      shadow: 'shadow-pink-500/25',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jeremiah-zhiya-6862803b0?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      Icon: FaLinkedinIn,
      gradient: 'from-blue-600 to-blue-800',
      shadow: 'shadow-blue-500/25',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/jeremiahzhiya',
      Icon: FaTwitter,
      gradient: 'from-sky-400 to-sky-600',
      shadow: 'shadow-sky-500/25',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com',
      Icon: SiTiktok,
      gradient: 'from-gray-900 via-red-500 to-blue-500',
      shadow: 'shadow-pink-500/25',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      Icon: FaYoutube,
      gradient: 'from-red-600 to-red-800',
      shadow: 'shadow-red-500/25',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1GpgMVujJE/',
      Icon: FaFacebookF,
      gradient: 'from-blue-700 to-blue-900',
      shadow: 'shadow-blue-500/25',
    },
  ];

  // Quick links data
  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Me', url: '/#about' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Testimonials', url: '/#testimonials' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/#contact' },
  ];

  // Services data
  const services = [
    'Social Media Management',
    'Content Creation',
    'Brand Strategy',
    'Web Development',
    'Digital Marketing',
    'Analytics & Reporting',
  ];

  // Stats data
  const stats = [
    { value: '50+', label: 'Happy Clients', gradient: 'from-blue-400 to-purple-500' },
    { value: '100+', label: 'Projects Completed', gradient: 'from-purple-400 to-pink-500' },
    { value: '5K+', label: 'Social Followers', gradient: 'from-pink-400 to-red-500' },
    { value: '2+', label: 'Years Experience', gradient: 'from-green-400 to-blue-500' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Bio */}
          <div className="lg:col-span-1">
            <a
              href="/"
              className="inline-block text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition duration-300 focus-visible"
              aria-label="Jeremiah Zhiya Home"
            >
              Jeremiah Zhiya
            </a>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Fullstack Developer & Social Media Manager helping brands grow their digital presence through strategic content and engaging campaigns.
            </p>

            {/* Social Media Links */}
            <div className="mt-6" aria-label="Social media profiles">
              <h3 className="text-white font-semibold mb-3 text-sm">Let's Connect</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.Icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 focus-visible`}
                      aria-label={`Follow on ${social.name} (opens in new tab)`}
                      title={social.name}
                    >
                      <Icon size={18} aria-hidden="true" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg" id="quick-links-heading">
              <FaCompass className="inline text-blue-500 mr-2" aria-hidden="true" />
              Quick Links
            </h3>
            <ul className="space-y-3" aria-labelledby="quick-links-heading">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block focus-visible"
                  >
                    <FaChevronRight className="inline text-xs text-blue-500 mr-2" aria-hidden="true" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg" id="services-heading">
              <FaBriefcase className="inline text-purple-500 mr-2" aria-hidden="true" />
              Services
            </h3>
            <ul className="space-y-3" aria-labelledby="services-heading">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/#services"
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block focus-visible"
                  >
                    <FaCheck className="inline text-xs text-purple-500 mr-2" aria-hidden="true" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg" id="newsletter-heading">
              <FaEnvelope className="inline text-pink-500 mr-2" aria-hidden="true" />
              Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest tips on social media growth, web development, and digital marketing.
            </p>
            <form className="space-y-3" onSubmit={handleSubscribe} aria-labelledby="newsletter-heading">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition duration-300"
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 focus-visible"
              >
                <FaPaperPlane className="inline mr-2" aria-hidden="true" />
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-3">
              <FaLock className="inline mr-1" aria-hidden="true" />
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-800 py-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear}
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 focus-visible ml-1">
                Jeremiah Zhiya
              </a>
              . All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-white transition duration-300 focus-visible">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-white transition duration-300 focus-visible">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-white transition duration-300 focus-visible">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className={`group w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 focus-visible ${
                showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              aria-label="Back to top"
            >
              <FaArrowUp aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Made with Love Badge */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs">
            Made with
            <FaHeart className="text-red-500 animate-pulse mx-1 inline" aria-hidden="true" />
            and
            <FaCoffee className="text-yellow-500 mx-1 inline" aria-hidden="true" />
            by Jeremiah Zhiya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;