
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/content';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic Sliding Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Client Stories</h2>

        <div className="relative flex flex-col md:flex-row items-center gap-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.45 }}
              className="w-full md:w-2/3"
            >
              <div className="bg-gray-800 p-6 md:p-10 rounded-2xl relative shadow-2xl border border-gray-700">
                <FaQuoteLeft className="text-blue-500 text-4xl absolute top-6 left-6 opacity-30" />
                <p className="text-gray-300 italic text-lg md:text-xl mb-6 relative z-10 pt-4">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {/* Photo next to the name */}
                    <img
                      src={testimonials[currentIndex].image}
                      alt={`${testimonials[currentIndex].name} photo`}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-700"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-white text-lg">{testimonials[currentIndex].name}</h4>
                    <span className="text-sm text-blue-500">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Photo column for larger screens */}
          <div className="hidden md:flex md:flex-col md:items-center md:gap-4 md:w-1/3">
            <img
              src={testimonials[currentIndex].image}
              alt={`${testimonials[currentIndex].name} large photo`}
              className="w-40 h-40 rounded-xl object-cover border-2 border-gray-700 shadow-lg"
            />
            <div className="text-sm text-gray-300">{testimonials[currentIndex].role}</div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-light"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2 items-center">
            {testimonials.map((t, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all overflow-hidden ${index === currentIndex ? 'text-blue-500 w-6' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial ${index + 1}`}
                title={t.name}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-light"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;