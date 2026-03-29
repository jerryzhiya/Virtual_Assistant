
import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "I am a passionate Social Media Manager with over 2 years of experience in the digital landscape. I don't just post content; I build narratives that resonate.";
  
  const fullText = "My approach combines creativity with analytics, ensuring that every post serves a purpose and drives measurable growth for your brand. I've worked with startups, established brands, and influencers across various industries including fashion, tech, and lifestyle. My goal is to help you connect authentically with your audience while achieving your business objectives.";

  return (
    <section id="about" className="py-20 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {isExpanded ? fullText : shortText}
          </p>

          {/* Read More Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 inline-flex items-center text-black font-semibold hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-4 py-2"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Show less" : "Read more about me"}
          >
            {isExpanded ? (
              <>
                Show Less <FaChevronUp className="ml-2" />
              </>
            ) : (
              <>
                Read More <FaChevronDown className="ml-2" />
              </>
            )}
          </button>

          {/* Optional: Animated decorative line */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                exit={{ width: 0 }}
                className="h-1 text-white mx-auto mt-6 rounded"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;