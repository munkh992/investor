'use client';

import { motion } from 'motion/react';
import { FileText, Download, Presentation, FileSpreadsheet, Mic } from 'lucide-react';
import tdbLogo from 'figma:asset/bb82525bc7caa35b46b45cfecc3ef037efe23e38.png';

export function EarningsSection() {
  const earningsResources = [
    {
      title: 'Earnings Press Release',
      type: 'PDF',
      icon: FileText,
      size: '2.4 MB',
      description: 'Complete Q4 2024 earnings announcement'
    },
    {
      title: 'Earnings Presentation',
      type: 'PDF',
      icon: Presentation,
      size: '8.7 MB',
      description: 'Investor presentation slides'
    },
    {
      title: 'Earnings Supplement',
      type: 'PDF',
      icon: FileText,
      size: '1.8 MB',
      description: 'Detailed financial metrics and analysis'
    },
    {
      title: 'Earnings Supplement',
      type: 'XLS',
      icon: FileSpreadsheet,
      size: '524 KB',
      description: 'Financial data in spreadsheet format'
    },
    {
      title: 'Earnings Transcript',
      type: 'PDF',
      icon: FileText,
      size: '156 KB',
      description: 'Full transcript of earnings call'
    },
    {
      title: 'Conference Call',
      type: 'Audio',
      icon: Mic,
      size: '45.2 MB',
      description: 'Audio recording of earnings call'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#001F3F] to-[#0A0A0A] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute bottom-10 left-10 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        whileInView={{ opacity: 0.06, scale: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <img 
          src={tdbLogo} 
          alt="TDB Logo Background" 
          className="w-72 h-72 lg:w-96 lg:h-96 object-contain"
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
            2025 Earnings
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access our latest quarterly earnings reports and financial documents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {earningsResources.map((resource, index) => {
            const IconComponent = resource.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="glass-card-dark rounded-xl p-6 group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B86B]/10 to-[#00D97F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#00B86B] to-[#00D97F] p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00B86B] transition-colors duration-300">
                    {resource.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-[#001F3F] text-[#00B86B] rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                    <span className="text-gray-400 text-xs">{resource.size}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#00B86B] to-[#00D97F] text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </motion.button>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#00B86B]/30 rounded-xl transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}