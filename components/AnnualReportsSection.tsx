'use client';

import { motion } from 'motion/react';
import { FileText, Download, Eye } from 'lucide-react';
import tdbLogo from 'figma:asset/bb82525bc7caa35b46b45cfecc3ef037efe23e38.png';

export function AnnualReportsSection() {
  const reports = [
    {
      year: '2024',
      status: 'Latest',
      annualReport: { size: '15.2 MB', pages: 156 },
      proxyStatement: { size: '3.8 MB', pages: 72 },
      highlights: ['Record net income of $19.6B', 'ROE of 15.2%', '12.8% CET1 ratio']
    },
    {
      year: '2023',
      status: 'Complete',
      annualReport: { size: '14.8 MB', pages: 148 },
      proxyStatement: { size: '3.6 MB', pages: 68 },
      highlights: ['Net income of $17.1B', 'ROE of 14.4%', '12.5% CET1 ratio']
    },
    {
      year: '2022',
      status: 'Complete',
      annualReport: { size: '13.9 MB', pages: 142 },
      proxyStatement: { size: '3.4 MB', pages: 64 },
      highlights: ['Net income of $15.8B', 'ROE of 13.8%', '12.2% CET1 ratio']
    },
    {
      year: '2021',
      status: 'Complete',
      annualReport: { size: '13.2 MB', pages: 138 },
      proxyStatement: { size: '3.2 MB', pages: 62 },
      highlights: ['Net income of $14.2B', 'ROE of 13.1%', '11.9% CET1 ratio']
    },
    {
      year: '2020',
      status: 'Complete',
      annualReport: { size: '12.8 MB', pages: 134 },
      proxyStatement: { size: '3.0 MB', pages: 58 },
      highlights: ['Net income of $12.5B', 'ROE of 12.3%', '11.6% CET1 ratio']
    },
    {
      year: '2019',
      status: 'Archive',
      annualReport: { size: '11.9 MB', pages: 128 },
      proxyStatement: { size: '2.8 MB', pages: 54 },
      highlights: ['Net income of $11.8B', 'ROE of 11.9%', '11.3% CET1 ratio']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#001F3F] to-[#0A0A0A] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute bottom-10 right-10 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        whileInView={{ opacity: 0.06, scale: 1, rotate: 0 }}
        transition={{ duration: 2, delay: 0.6 }}
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
            Annual Reports
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access comprehensive annual reports and proxy statements for detailed financial analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => {
            const isLatest = report.status === 'Latest';
            const isArchive = report.status === 'Archive';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`glass-card-dark rounded-xl p-6 group cursor-pointer relative overflow-hidden ${
                  isLatest ? 'ring-2 ring-[#00B86B]/30' : ''
                }`}
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isLatest 
                      ? 'bg-[#00B86B]/20 text-[#00B86B]' 
                      : isArchive
                      ? 'bg-gray-600/20 text-gray-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {report.status}
                  </span>
                  
                  {isLatest && (
                    <div className="w-3 h-3 bg-[#00B86B] rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Year */}
                <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-[#00B86B] transition-colors duration-300">
                  {report.year}
                </h3>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    Key Highlights
                  </h4>
                  <div className="space-y-2">
                    {report.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#00B86B] rounded-full"></div>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Document Downloads */}
                <div className="space-y-4">
                  {/* Annual Report */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#00B86B]/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#00B86B] to-[#00D97F] rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Annual Report</p>
                        <p className="text-gray-400 text-xs">
                          {report.annualReport.pages} pages • {report.annualReport.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 text-gray-400 hover:text-[#00B86B] transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 text-gray-400 hover:text-[#00B86B] transition-colors duration-300"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Proxy Statement */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#00B86B]/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#003366] to-[#001F3F] rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Proxy Statement</p>
                        <p className="text-gray-400 text-xs">
                          {report.proxyStatement.pages} pages • {report.proxyStatement.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 text-gray-400 hover:text-[#00B86B] transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 h-6 text-gray-400 hover:text-[#00B86B] transition-colors duration-300"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ${
                  isLatest ? 'glow-green' : 'glow-blue'
                }`}></div>

                {/* Card expansion shadow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#00B86B]/30 rounded-xl transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}