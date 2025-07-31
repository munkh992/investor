'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = [
    {
      title: 'Investor Resources',
      links: ['Annual Reports', 'SEC Filings', 'Proxy Statements', 'Dividend Information']
    },
    {
      title: 'Financial Information',
      links: ['Quarterly Earnings', 'Financial Highlights', 'Credit Ratings', 'Fixed Income']
    },
    {
      title: 'Corporate Governance',
      links: ['Board of Directors', 'Committee Charters', 'Code of Ethics', 'ESG Information']
    },
    {
      title: 'Contact',
      links: ['Investor Relations', 'Media Inquiries', 'Shareholder Services', 'Transfer Agent']
    }
  ];

  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B86B] via-transparent to-[#001F3F]"></div>
      </div>

      {/* Background Logo */}
      <motion.div 
        className="absolute top-16 right-16 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
        whileInView={{ opacity: 0.04, scale: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img 
          src="/assets/tdb-logo.png" 
          alt="TDB Logo Background" 
          className="w-80 h-80 lg:w-[400px] lg:h-[400px] object-contain"
        />
      </motion.div>

      <div className="relative z-10">
        {/* Email Subscription Section */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Connected
              </h3>
              <p className="text-gray-300 mb-8">
                Sign up for investor news and alerts to receive the latest updates from TDB Bank
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00B86B] focus:ring-2 focus:ring-[#00B86B]/20 transition-all duration-300"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#00B86B] to-[#00D97F] text-white font-semibold rounded-lg hover:shadow-lg glow-green transition-all duration-300"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </motion.button>
              </form>

              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#00B86B] mt-4"
                >
                  Thank you for subscribing to TDB investor updates!
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img 
                      src="/assets/tdb-logo.png" 
                      alt="TDB Bank Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white text-lg font-semibold">TDB Bank</span>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Leading financial institution committed to sustainable growth and innovative banking solutions.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-[#00B86B]" />
                    <span className="text-sm">123 Financial District, NY 10004</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4 text-[#00B86B]" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4 text-[#00B86B]" />
                    <span className="text-sm">investors@tdbbank.com</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-[#00B86B] transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 text-sm mb-4 md:mb-0"
              >
                © 2025 TDB Bank. All rights reserved. Member FDIC.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-6"
              >
                <div className="flex items-center space-x-4">
                  {[
                    { icon: Linkedin, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Facebook, href: '#' }
                  ].map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00B86B] hover:border-[#00B86B] transition-all duration-300"
                      >
                        <IconComponent className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <a href="#" className="hover:text-[#00B86B] transition-colors duration-300">Privacy Policy</a>
                  <span>|</span>
                  <a href="#" className="hover:text-[#00B86B] transition-colors duration-300">Terms of Use</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}