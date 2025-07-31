'use client';

import { motion } from 'motion/react';
import { Leaf, Zap, Droplet, Recycle, Target, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ESGSection() {
  const esgMetrics = [
    {
      icon: Leaf,
      title: 'Carbon Neutral by 2030',
      value: '85%',
      description: 'Reduction in operational carbon footprint since 2020',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Zap,
      title: 'Renewable Energy',
      value: '78%',
      description: 'Of our facilities powered by renewable energy',
      color: 'from-yellow-500 to-orange-400'
    },
    {
      icon: Droplet,
      title: 'Water Conservation',
      value: '42%',
      description: 'Reduction in water usage across operations',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Target,
      title: 'Green Financing',
      value: '$65B',
      description: 'Committed to sustainable finance by 2026',
      color: 'from-[#00B86B] to-[#00D97F]'
    }
  ];

  const greenInitiatives = [
    {
      title: 'Green Bond Issuance',
      amount: '$12.5B',
      description: 'Supporting renewable energy and sustainable infrastructure projects worldwide',
      projects: ['Solar & Wind Farms', 'Green Buildings', 'Clean Transportation', 'Water Management'],
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Sustainable Lending',
      amount: '$28.3B',
      description: 'Financing eco-friendly businesses and sustainable development projects',
      projects: ['Clean Technology', 'Sustainable Agriculture', 'Green Real Estate', 'ESG Startups'],
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Carbon Offset Programs',
      amount: '2.1M',
      description: 'Tons of CO2 offset through reforestation and clean energy initiatives',
      projects: ['Forest Restoration', 'Renewable Energy', 'Carbon Capture', 'Ecosystem Protection'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#001F3F] to-[#0A0A0A] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.6, rotate: 15 }}
        whileInView={{ opacity: 0.04, scale: 1, rotate: 0 }}
        transition={{ duration: 3, delay: 0.3 }}
      >
        <img 
          src="/assets/tdb-logo.svg" 
          alt="TDB Logo Background" 
          className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] object-contain"
        />
      </motion.div>

      {/* Animated green particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00B86B] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Leaf className="w-8 h-8 text-[#00B86B]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ESG & Sustainability
            </h2>
            <Leaf className="w-8 h-8 text-[#00B86B]" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the financial industry toward a sustainable future through responsible banking, 
            environmental stewardship, and positive social impact
          </p>
        </motion.div>

        {/* ESG Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {esgMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-card-dark rounded-xl p-6 group cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${metric.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#00B86B] transition-colors duration-300">
                    {metric.value}
                  </h3>
                  
                  <h4 className="font-semibold text-[#00B86B] mb-2">
                    {metric.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm">
                    {metric.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-green rounded-xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Green Initiatives */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Our Green Banking Initiatives</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Pioneering sustainable finance solutions that drive positive environmental impact while delivering strong returns
            </p>
          </motion.div>

          {greenInitiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="glass-card-dark rounded-xl p-8 group hover:glow-green transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-[#00B86B] rounded-full animate-pulse"></div>
                    <span className="text-[#00B86B] font-semibold uppercase tracking-wide text-sm">
                      Active Initiative
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00B86B] transition-colors duration-300">
                    {initiative.title}
                  </h4>
                  
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-4xl font-bold gradient-text">{initiative.amount}</span>
                    <span className="text-gray-400 text-sm">
                      {initiative.title === 'Carbon Offset Programs' ? 'tons CO2' : 'committed'}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {initiative.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h5 className="font-semibold text-white">Key Focus Areas:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {initiative.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="flex items-center space-x-2">
                          <Leaf className="w-3 h-3 text-[#00B86B]" />
                          <span className="text-gray-300 text-sm">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative overflow-hidden rounded-2xl group"
                >
                  <ImageWithFallback
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent"></div>
                  
                  {/* Floating achievement badge */}
                  <div className="absolute top-6 right-6 glass-card-dark px-4 py-2 rounded-full">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-[#00B86B]" />
                      <span className="text-white text-sm font-medium">Impact Leader</span>
                    </div>
                  </div>
                  
                  {/* Green glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B86B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="glass-card-dark rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Green Banking Revolution
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with TDB to create a sustainable financial future. Discover how our ESG initiatives 
              and green banking solutions can align with your investment goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-[#00B86B] to-[#00D97F] px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-2xl"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Leaf className="w-5 h-5" />
                  <span>Explore Green Investments</span>
                </span>
                <div className="absolute inset-0 glow-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                Download ESG Report
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}