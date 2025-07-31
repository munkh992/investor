'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, DollarSign, Users, Calendar, Phone, Mail, Building } from 'lucide-react';
import tdbLogo from 'figma:asset/bb82525bc7caa35b46b45cfecc3ef037efe23e38.png';

export function ShareholderInfoSection() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const shareholderInfo = [
    {
      title: 'Dividend Information',
      icon: DollarSign,
      content: {
        overview: 'TDB Bank maintains a consistent dividend policy, reflecting our commitment to returning value to shareholders.',
        details: [
          { label: 'Current Quarterly Dividend', value: '$0.85 per share' },
          { label: 'Annual Dividend Yield', value: '3.8%' },
          { label: 'Dividend Growth (5-year CAGR)', value: '6.2%' },
          { label: 'Next Payment Date', value: 'April 15, 2025' },
          { label: 'Ex-Dividend Date', value: 'March 28, 2025' },
          { label: 'Record Date', value: 'March 30, 2025' }
        ]
      }
    },
    {
      title: 'Stock Information',
      icon: Users,
      content: {
        overview: 'Real-time stock information and trading details for TDB Bank common shares.',
        details: [
          { label: 'Stock Symbol', value: 'TDB' },
          { label: 'Exchange', value: 'NYSE' },
          { label: 'CUSIP', value: '872540109' },
          { label: 'Shares Outstanding', value: '1.85 billion' },
          { label: '52-Week High', value: '$89.42' },
          { label: '52-Week Low', value: '$68.15' }
        ]
      }
    },
    {
      title: 'Transfer Agent',
      icon: Building,
      content: {
        overview: 'For questions about stock certificates, dividend payments, or account changes, contact our transfer agent.',
        details: [
          { label: 'Transfer Agent', value: 'Computershare Trust Company' },
          { label: 'Address', value: '150 Royall Street, Canton, MA 02021' },
          { label: 'Phone (US)', value: '+1 (800) 962-4284' },
          { label: 'Phone (International)', value: '+1 (781) 575-3100' },
          { label: 'Website', value: 'www.computershare.com/investor' },
          { label: 'Online Account Access', value: 'Available 24/7' }
        ]
      }
    },
    {
      title: 'Annual Meeting',
      icon: Calendar,
      content: {
        overview: 'Information about the Annual Meeting of Shareholders and voting procedures.',
        details: [
          { label: '2025 Annual Meeting Date', value: 'May 20, 2025' },
          { label: 'Time', value: '10:00 AM EDT' },
          { label: 'Location', value: 'Virtual Meeting' },
          { label: 'Record Date for Voting', value: 'March 25, 2025' },
          { label: 'Proxy Voting Deadline', value: 'May 19, 2025 11:59 PM EDT' },
          { label: 'Voting Platform', value: 'www.virtualshareholdermeeting.com/TDB2025' }
        ]
      }
    },
    {
      title: 'Investor Relations Contact',
      icon: Phone,
      content: {
        overview: 'Contact our Investor Relations team for financial information and inquiries.',
        details: [
          { label: 'Head of Investor Relations', value: 'Sarah Johnson' },
          { label: 'Phone', value: '+1 (555) 123-4567' },
          { label: 'Email', value: 'investors@tdbbank.com' },
          { label: 'Mailing Address', value: '123 Financial District, New York, NY 10004' },
          { label: 'Office Hours', value: 'Monday - Friday, 9:00 AM - 5:00 PM EST' },
          { label: 'Media Inquiries', value: 'media@tdbbank.com' }
        ]
      }
    },
    {
      title: 'Financial Calendar',
      icon: Calendar,
      content: {
        overview: 'Key dates for upcoming financial events and reporting deadlines.',
        details: [
          { label: 'Q1 2025 Earnings Release', value: 'April 28, 2025' },
          { label: 'Q2 2025 Earnings Release', value: 'July 21, 2025' },
          { label: 'Q3 2025 Earnings Release', value: 'October 20, 2025' },
          { label: 'Q4 2025 Earnings Release', value: 'January 27, 2026' },
          { label: 'Annual Report Filing (10-K)', value: 'March 31, 2025' },
          { label: 'Proxy Statement Filing', value: 'April 15, 2025' }
        ]
      }
    }
  ];

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#001F3F] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.6, rotate: 25 }}
        whileInView={{ opacity: 0.03, scale: 1, rotate: 0 }}
        transition={{ duration: 3.5, delay: 0.2 }}
      >
        <img 
          src={tdbLogo} 
          alt="TDB Logo Background" 
          className="w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] object-contain"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shareholder Information
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about your TDB Bank investment
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {shareholderInfo.map((section, index) => {
            const IconComponent = section.icon;
            const isOpen = openSection === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-card-dark rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'glow-green' : ''
                }`}
              >
                {/* Accordion Header */}
                <motion.button
                  onClick={() => toggleSection(index)}
                  className="w-full p-6 text-left flex items-center justify-between group hover:bg-white/5 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-to-r from-[#00B86B] to-[#00D97F]' 
                        : 'bg-white/10 group-hover:bg-gradient-to-r group-hover:from-[#00B86B] group-hover:to-[#00D97F]'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                      isOpen ? 'text-[#00B86B]' : 'text-white group-hover:text-[#00B86B]'
                    }`}>
                      {section.title}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`transition-colors duration-300 ${
                      isOpen ? 'text-[#00B86B]' : 'text-gray-400 group-hover:text-[#00B86B]'
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.button>

                {/* Accordion Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {section.content.overview}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.content.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                            transition={{ duration: 0.3, delay: detailIndex * 0.05 }}
                            className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10"
                          >
                            <span className="text-gray-400 text-sm">{detail.label}</span>
                            <span className="text-white font-medium text-sm">{detail.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="glass-card-dark rounded-xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00B86B] to-[#00D97F] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Need Assistance?</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Our Investor Relations team is here to help with any questions about your TDB investment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#00B86B] to-[#00D97F] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}