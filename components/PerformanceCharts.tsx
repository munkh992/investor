'use client';

import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import tdbLogo from 'figma:asset/bb82525bc7caa35b46b45cfecc3ef037efe23e38.png';

export function PerformanceCharts() {
  const netIncomeData = [
    { year: '2020', value: 12.5 },
    { year: '2021', value: 14.2 },
    { year: '2022', value: 15.8 },
    { year: '2023', value: 17.1 },
    { year: '2024', value: 19.6 }
  ];

  const depositData = [
    { year: '2020', value: 485 },
    { year: '2021', value: 512 },
    { year: '2022', value: 548 },
    { year: '2023', value: 579 },
    { year: '2024', value: 615 }
  ];

  const loanData = [
    { year: '2020', value: 368 },
    { year: '2021', value: 392 },
    { year: '2022', value: 425 },
    { year: '2023', value: 451 },
    { year: '2024', value: 478 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card-dark p-3 rounded-lg border border-[#00B86B]/30">
          <p className="text-white font-medium">{`${label}: $${payload[0].value}B`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#001F3F] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        whileInView={{ opacity: 0.05, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, delay: 0.4 }}
      >
        <img 
          src={tdbLogo} 
          alt="TDB Logo Background" 
          className="w-[450px] h-[450px] lg:w-[650px] lg:h-[650px] object-contain"
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
            TDB Annual Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track our consistent growth and financial strength over the years
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Net Income Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-dark rounded-xl p-6 group hover:glow-green transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Net Income
              <span className="block text-sm text-gray-400 mt-1">(Billions USD)</span>
            </h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={netIncomeData}>
                  <defs>
                    <linearGradient id="netIncomeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00B86B" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00B86B" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00B86B" 
                    strokeWidth={3}
                    fill="url(#netIncomeGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Deposit Balances Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card-dark rounded-xl p-6 group hover:glow-blue transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Average Deposit Balances
              <span className="block text-sm text-gray-400 mt-1">(Billions USD)</span>
            </h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={depositData}>
                  <defs>
                    <linearGradient id="depositGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#003366" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#001F3F" stopOpacity={1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    fill="url(#depositGradient)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Loan Balances Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card-dark rounded-xl p-6 group hover:glow-green transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Average Loan Balances
              <span className="block text-sm text-gray-400 mt-1">(Billions USD)</span>
            </h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={loanData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#ffffff80" />
                  <YAxis stroke="#ffffff80" />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00D97F" 
                    strokeWidth={4}
                    dot={{ fill: '#00B86B', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, fill: '#00D97F' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Return on Equity', value: '15.2%', change: '+0.8%' },
            { label: 'Common Equity Tier 1', value: '12.8%', change: '+0.3%' },
            { label: 'Efficiency Ratio', value: '58.5%', change: '-1.2%' },
            { label: 'Net Interest Margin', value: '2.42%', change: '+0.05%' }
          ].map((metric, index) => (
            <div key={index} className="glass-card-dark rounded-xl p-6 text-center group hover:glow-green transition-all duration-300">
              <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
              <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-[#00B86B] text-sm">{metric.change}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}