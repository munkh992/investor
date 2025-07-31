'use client';

import { motion } from 'motion/react';
import { Calendar, ArrowRight, Leaf, Award } from 'lucide-react';

export function NewsSection() {
  const newsItems = [
    {
      date: '2025-01-28',
      headline: 'TDB Reports Strong Q4 2024 Results with Record ESG Performance',
      excerpt: 'Net income increased 15% year-over-year, driven by solid growth in green lending and sustainable finance initiatives.',
      category: 'Earnings',
      isGreen: false
    },
    {
      date: '2025-01-25',
      headline: 'TDB Achieves Carbon Neutral Operations Ahead of 2030 Target',
      excerpt: 'Bank successfully reduces operational carbon footprint by 85%, investing in renewable energy and sustainable practices.',
      category: 'ESG',
      isGreen: true
    },
    {
      date: '2025-01-20',
      headline: 'TDB Launches $50 Billion Sustainable Finance Initiative',
      excerpt: 'Comprehensive commitment to green bonds, clean energy financing, and sustainable infrastructure over the next five years.',
      category: 'Green Finance',
      isGreen: true
    },
    {
      date: '2025-01-18',
      headline: 'Green Bond Issuance Raises $5.2B for Renewable Energy Projects',
      excerpt: 'Oversubscribed bond offering will fund solar, wind, and energy storage projects across North America and Europe.',
      category: 'Green Bonds',
      isGreen: true
    },
    {
      date: '2025-01-15',
      headline: 'Digital Banking Platform Expands with ESG Investment Tools',
      excerpt: 'New mobile banking features include carbon footprint tracking, ESG portfolio analysis, and impact measurement.',
      category: 'Innovation',
      isGreen: true
    },
    {
      date: '2025-01-10',
      headline: 'TDB Board Declares Quarterly Dividend and ESG Performance Bonus',
      excerpt: 'Board declares quarterly dividend of $0.85 per share plus sustainability-linked performance bonus of $0.05.',
      category: 'Dividend',
      isGreen: true
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#001F3F] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute top-10 right-10 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 0.08, scale: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img 
          src="/assets/tdb-logo.png" 
          alt="TDB Logo Background" 
          className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
        />
      </motion.div>

      {/* Green floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00B86B] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Leaf className="w-8 h-8 text-[#00B86B]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              TDB News & Updates
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay informed with the latest developments in sustainable finance, green banking initiatives, 
            and TDB's environmental impact achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass-card-dark rounded-xl p-8 group cursor-pointer relative overflow-hidden ${
                item.isGreen ? 'border border-[#00B86B]/20' : ''
              }`}
            >
              {/* Green indicator for sustainability news */}
              {item.isGreen && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#00B86B] rounded-full animate-pulse"></div>
              )}

              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ${
                item.isGreen ? 'glow-green' : 'glow-blue'
              }`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-[#00B86B]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.isGreen 
                        ? 'bg-[#00B86B]/20 text-[#00B86B]' 
                        : 'bg-[#003366]/20 text-blue-400'
                    }`}>
                      {item.category}
                    </span>
                    {item.isGreen && (
                      <div className="flex items-center space-x-1">
                        <Leaf className="w-3 h-3 text-[#00B86B]" />
                        <span className="text-xs text-[#00B86B] font-medium">Green Banking</span>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                  item.isGreen 
                    ? 'text-white group-hover:text-[#00B86B]' 
                    : 'text-white group-hover:text-blue-400'
                }`}>
                  {item.headline}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className={`flex items-center font-medium group-hover:${
                  item.isGreen ? 'text-[#00D97F]' : 'text-blue-300'
                } transition-colors duration-300 ${
                  item.isGreen ? 'text-[#00B86B]' : 'text-blue-400'
                }`}>
                  <span className="mr-2">Read more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Animated border on hover */}
              <div className={`absolute inset-0 border border-transparent group-hover:border-${
                item.isGreen ? '[#00B86B]/30' : 'blue-400/30'
              } rounded-xl transition-all duration-300`}></div>

              {/* Background pattern for green news */}
              {item.isGreen && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B86B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Green Banking Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass-card-dark rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B86B]/10 via-transparent to-[#00B86B]/10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Award className="w-8 h-8 text-[#00B86B]" />
                <h3 className="text-2xl font-bold text-white">Leading the Green Banking Revolution</h3>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                TDB has committed over $65 billion to sustainable finance initiatives, making us one of the world's 
                leading green banks. Our comprehensive ESG approach drives both financial performance and environmental impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#00B86B]">$65B+</div>
                  <div className="text-sm text-gray-400">Green Finance Committed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#00B86B]">85%</div>
                  <div className="text-sm text-gray-400">Carbon Footprint Reduction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#00B86B]">2.1M</div>
                  <div className="text-sm text-gray-400">Tons CO2 Offset Annually</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}