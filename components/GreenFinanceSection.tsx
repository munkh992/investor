'use client';

import { motion } from 'motion/react';
import { Leaf, TrendingUp, Shield, Globe, Zap, Building } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GreenFinanceSection() {
  const greenProducts = [
    {
      icon: Leaf,
      title: 'Green Bonds',
      subtitle: 'Sustainable Infrastructure Financing',
      description: 'Invest in bonds that fund renewable energy, clean transportation, and sustainable building projects.',
      features: ['Tax-efficient returns', 'ESG impact tracking', 'AAA-rated securities', 'Quarterly impact reports'],
      yield: '4.8%',
      minInvestment: '$10K',
      impact: '50+ Projects Funded',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Clean Energy Fund',
      subtitle: 'Renewable Energy Portfolio',
      description: 'Diversified portfolio focused on solar, wind, and emerging clean energy technologies worldwide.',
      features: ['Global diversification', 'Technology leaders', 'Carbon offset included', 'Professional management'],
      yield: '7.2%',
      minInvestment: '$5K',
      impact: '2.1M tons CO2 avoided',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Building,
      title: 'Sustainable Real Estate',
      subtitle: 'Green Building Investments',
      description: 'REIT focused on LEED-certified buildings and sustainable urban development projects.',
      features: ['LEED Gold+ properties', 'Energy efficiency', 'Urban sustainability', 'Stable dividends'],
      yield: '5.9%',
      minInvestment: '$25K',
      impact: '85% Energy Reduction',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'ESG Global Equity',
      subtitle: 'Responsible Investment Fund',
      description: 'Actively managed fund investing in companies with strong ESG practices and sustainable business models.',
      features: ['ESG screening', 'Impact measurement', 'Shareholder advocacy', 'Global exposure'],
      yield: '9.1%',
      minInvestment: '$1K',
      impact: 'Top 10% ESG Rating',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const sustainabilityFeatures = [
    {
      title: 'Carbon Footprint Tracking',
      description: 'Monitor and offset the carbon impact of your investment portfolio',
      icon: '🌱'
    },
    {
      title: 'Impact Measurement',
      description: 'Quantify the environmental and social impact of your investments',
      icon: '📊'
    },
    {
      title: 'ESG Scoring',
      description: 'Real-time ESG ratings for all holdings with transparent methodology',
      icon: '⭐'
    },
    {
      title: 'Green Banking Rewards',
      description: 'Earn rewards points for choosing sustainable banking products',
      icon: '🎁'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#001F3F] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute bottom-16 right-16 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, rotate: -25 }}
        whileInView={{ opacity: 0.06, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, delay: 0.4 }}
      >
        <img 
          src="/assets/tdb-logo.svg" 
          alt="TDB Logo Background" 
          className="w-72 h-72 lg:w-96 lg:h-96 object-contain"
        />
      </motion.div>

      {/* Nature-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00B86B]/5 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00B86B] to-[#00D97F] rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Green Finance Solutions
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Grow your wealth while creating positive environmental impact through our comprehensive 
            suite of sustainable investment products and green banking services
          </p>
        </motion.div>

        {/* Hero Green Finance Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Wind turbines in green field representing sustainable energy investment"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#001F3F]/60 to-[#00B86B]/20"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-6">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  $65B+ in Green Finance Commitments
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl text-gray-200"
                >
                  Leading the transition to a sustainable economy through innovative financial solutions
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Green Investment Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {greenProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card-dark rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${product.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#00B86B] transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-sm text-[#00B86B] font-medium">{product.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#00B86B]">{product.yield}</div>
                      <div className="text-xs text-gray-400">Expected Return</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#00B86B] rounded-full"></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Minimum Investment</div>
                      <div className="font-bold text-white">{product.minInvestment}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 mb-1">Impact Achievement</div>
                      <div className="font-bold text-[#00B86B]">{product.impact}</div>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-green rounded-2xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Sustainability Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Sustainability Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card-dark rounded-xl p-6 text-center group hover:glow-green transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-white mb-3 group-hover:text-[#00B86B] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="glass-card-dark rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B86B]/5 to-[#00D97F]/5"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <TrendingUp className="w-8 h-8 text-[#00B86B]" />
                <h3 className="text-3xl font-bold text-white">Start Your Green Investment Journey</h3>
                <Shield className="w-8 h-8 text-[#00B86B]" />
              </div>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of investors who are already making a positive impact while building wealth. 
                Our green finance experts are ready to help you create a sustainable investment strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#00B86B] to-[#00D97F] px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-2xl"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Leaf className="w-5 h-5" />
                    <span>Open Green Account</span>
                  </span>
                  <div className="absolute inset-0 glow-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-[#00B86B]">$0</div>
                  <div className="text-sm text-gray-400">Account Fees</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-[#00B86B]">24/7</div>
                  <div className="text-sm text-gray-400">Expert Support</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-[#00B86B]">100%</div>
                  <div className="text-sm text-gray-400">Transparent Impact</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}