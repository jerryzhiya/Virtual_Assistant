
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-brand-bg to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Hi, I'm <span className="text-blue-500">{personalInfo.name}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            {personalInfo.role}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-gray-500 max-w-lg mx-auto md:mx-0"
          >
            {personalInfo.bio}
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-center md:justify-start space-x-6"
          >
            {personalInfo.socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={28} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-brand-dark rounded-full opacity-20 animate-pulse"></div>
            <img 
              src="/profile-pics.jpeg" 
              alt="Jerry Creative Profile" 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;