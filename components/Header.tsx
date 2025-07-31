'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Investor Relations',
    'Quarterly Earnings',
    'Press Releases',
    'Events & Presentations',
    'Investor Day',
    'SFC Filings & Other Disclosures',
    'Annual Report & Proxy',
    'Fixed Income',
    'Shareholder Info',
    'ESG Info'
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-[#0A0A0A] to-[#001F3F] shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* TDB Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/assets/tdb-logo.png" 
                alt="TDB Bank Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white text-xl font-semibold">TDB Bank</span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white hover:text-[#00B86B] transition-colors duration-300 relative group text-sm font-medium"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00B86B] to-[#00D97F] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden text-white p-2"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}