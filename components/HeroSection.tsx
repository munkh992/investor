'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Leaf, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const greenStats = [
    { icon: Leaf, label: '$65B+', subtitle: 'Green Finance Committed' },
    { icon: Award, label: '85%', subtitle: 'Carbon Reduction' },
    { icon: TrendingUp, label: 'AAA', subtitle: 'ESG Rating' }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Sustainable wind energy turbines with green finance buildings"
          className="w-full h-[120%] object-cover"
        />
        {/* Enhanced Gradient Overlay with Green Tints */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#001F3F]/50 to-[#0A0A0A]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00B86B]/15 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#00B86B]/10 via-transparent to-transparent"></div>
      </motion.div>

      {/* Floating Green Particles */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00B86B] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Large Logo Background */}
      <motion.div 
        className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="relative">
          <img 
            src="/assets/tdb-logo.svg" 
            alt="TDB Bank Logo Background" 
            className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-60"
          />
          {/* Enhanced glow effect with green tint */}
          <div className="absolute inset-0 w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-radial from-[#00B86B]/30 via-[#1e90ff]/20 to-transparent blur-3xl"></div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Green Banking Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="flex items-center space-x-2 glass-card-dark px-4 py-2 rounded-full">
                <Leaf className="w-5 h-5 text-[#00B86B]" />
                <span className="text-[#00B86B] font-semibold text-sm">Leading Green Bank</span>
                <div className="w-2 h-2 bg-[#00B86B] rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center space-x-2 glass-card-dark px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-white font-semibold text-sm">ESG Excellence Award 2024</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              TDB{' '}
              <span className="gradient-text block">
                Green Banking
              </span>
              <span className="text-4xl md:text-5xl text-gray-200 block mt-2">
                Investor Relations
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Driving sustainable growth with strong financial performance while creating positive environmental impact through innovative green banking solutions
            </motion.p>

            {/* Green Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 mb-12"
            >
              {greenStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 glass-card-dark px-6 py-4 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#00B86B] to-[#00D97F] rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xl">{stat.label}</div>
                      <div className="text-gray-400 text-sm">{stat.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="group relative overflow-hidden bg-gradient-to-r from-[#00B86B] to-[#00D97F] px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Leaf className="w-5 h-5" />
                  <span>Explore Green Investments</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00D97F] to-[#00B86B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                ></motion.div>
                <div className="absolute inset-0 glow-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download ESG Report
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-[#00B86B] to-[#00D97F] rounded-full mt-2"></div>
          </div>
          <div className="flex items-center space-x-1 text-white/60 text-xs">
            <Leaf className="w-3 h-3" />
            <span>Discover Green Banking</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}