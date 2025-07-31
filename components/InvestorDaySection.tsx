'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tdbLogo from 'figma:asset/bb82525bc7caa35b46b45cfecc3ef037efe23e38.png';

export function InvestorDaySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#001F3F] to-[#0A0A0A] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        whileInView={{ opacity: 0.04, scale: 1, rotate: 0 }}
        transition={{ duration: 3, delay: 0.3 }}
      >
        <img 
          src={tdbLogo} 
          alt="TDB Logo Background" 
          className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] object-contain"
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
            TDB Investor Day 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for an exclusive deep-dive into TDB's strategic vision and financial performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Event Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern conference room with city view"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 glass-card-dark px-4 py-2 rounded-full">
                <span className="text-[#00B86B] font-semibold text-sm">Virtual & In-Person</span>
              </div>
            </div>

            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00B86B]/20 to-[#001F3F]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Strategic Vision & Growth
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get exclusive insights into TDB's strategic roadmap, sustainability initiatives, and digital transformation journey. Our executive team will present detailed financial projections and answer your questions.
              </p>
            </div>

            {/* Event Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: 'Date', value: 'March 15, 2025' },
                { icon: Clock, label: 'Time', value: '9:00 AM EST' },
                { icon: MapPin, label: 'Location', value: 'NYC Financial District' },
                { icon: Users, label: 'Format', value: 'Hybrid Event' }
              ].map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="glass-card-dark p-4 rounded-lg group hover:glow-green transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#00B86B] to-[#00D97F] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">{detail.label}</p>
                        <p className="text-white font-medium text-sm">{detail.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Topics */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Key Topics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'ESG Strategy & Commitments',
                  'Digital Banking Innovation',
                  'Market Expansion Plans',
                  'Capital Allocation Framework'
                ].map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-[#00B86B] rounded-full"></div>
                    <span className="text-gray-300 text-sm">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Registration Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group relative overflow-hidden bg-gradient-to-r from-[#00B86B] to-[#00D97F] px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-2xl w-full sm:w-auto"
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00D97F] to-[#00B86B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              ></motion.div>
              <div className="absolute inset-0 glow-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}