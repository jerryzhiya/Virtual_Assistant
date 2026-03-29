
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const fd = new FormData(form);

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzwbnzq';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const json = await response.json().catch(() => ({}));
        console.error('Formspree Error:', json);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Network Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-600">
            Have a project in mind? Fill out the form below or email me directly at{' '}
            <a href={`mailto:${personalInfo.email}`} className="text-blue-500 font-semibold hover:underline">
              {personalInfo.email}
            </a>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
        >
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Message Sent!</h3>
              <p className="text-gray-600 mt-2">Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : status === 'error' ? (
            <div className="text-center py-12 animate-fade-in">
              <FaExclamationCircle className="text-blue-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Oops!</h3>
              <p className="text-gray-600 mt-2">Something went wrong. Please try again or email me directly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-light focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-light focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:bg-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-blue-500 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-blue-500 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'submitting' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <FaPaperPlane className="ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;