
// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import type { PersonalInfo } from '../types';

const Hero: React.FC = () => {
  const info = personalInfo as PersonalInfo;
  // Use provided content or fallbacks requested by you
  const displayName = info.name ?? 'Jeremiah Zhiya';
  const displayRole = info.role ?? 'Social Media Manager';
  const displayBio = info.bio ?? 'I help busy people get organized, run smooth operations, and free up time so they can focus on what matters most.';
  const imgSrc: string = info.image ?? '/default-avatar.png';

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <section className="relative w-full bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-0 -right-24 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Profile with polygon clip-path */}
        <motion.div
          {...fadeIn(0)}
          className="profile-container relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto mb-12 shadow-2xl"
          style={{
            WebkitClipPath: 'polygon(50% 0%, 0% 0%, 0% 100%, 50% 85%, 100% 100%, 100% 0%)',
            clipPath: 'polygon(50% 0%, 0% 0%, 0% 100%, 50% 85%, 100% 100%, 100% 0%)',
            overflow: 'hidden',
          }}
        >
          <img
            src={imgSrc}
            alt={`${displayName} profile`}
            className="w-full h-full object-cover block"
            loading="lazy"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 0 6px rgba(255,255,255,0.04)' }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeIn(0.1)}
          className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4"
        >
          {displayName}
        </motion.h1>

        {/* Role / subtitle */}
        <motion.p
          {...fadeIn(0.3)}
          className="text-gray-300 text-lg sm:text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto"
        >
          {displayRole} <span className="text-blue-500 mx-2">|</span> {displayBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeIn(0.5)} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-shadow shadow-lg"
            role="button"
          >
            Contact Me
          </a>

          <a
            href="/portfolio"
            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-semibold hover:border-white hover:text-white transition"
            role="button"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;