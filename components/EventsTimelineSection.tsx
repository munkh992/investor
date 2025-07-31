'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, Video, Download, ExternalLink } from 'lucide-react';
import tdbLogo from 'figma:asset/bb82525bc7caa35b46b45cfecc3ef037efe23e38.png';

export function EventsTimelineSection() {
  const events = [
    {
      date: '2025-03-15',
      time: '9:00 AM EST',
      title: 'TDB Investor Day 2025',
      description: 'Comprehensive overview of strategic initiatives and financial outlook.',
      type: 'Live Event',
      status: 'upcoming',
      links: [
        { label: 'Register', icon: ExternalLink, type: 'register' },
        { label: 'Add to Calendar', icon: Calendar, type: 'calendar' }
      ]
    },
    {
      date: '2025-02-28',
      time: '8:00 AM EST',
      title: 'Q4 2024 Earnings Call',
      description: 'Quarterly financial results and management discussion.',
      type: 'Conference Call',
      status: 'upcoming',
      links: [
        { label: 'Join Call', icon: Video, type: 'join' },
        { label: 'Dial-in Info', icon: Download, type: 'download' }
      ]
    },
    {
      date: '2025-01-20',
      time: '2:00 PM EST',
      title: 'Sustainable Finance Summit',
      description: 'ESG initiatives and green banking strategy presentation.',
      type: 'Webinar',
      status: 'completed',
      links: [
        { label: 'Watch Recording', icon: Video, type: 'recording' },
        { label: 'Download Slides', icon: Download, type: 'download' }
      ]
    },
    {
      date: '2024-12-10',
      time: '10:00 AM EST',
      title: 'Digital Innovation Showcase',
      description: 'Technology roadmap and digital transformation updates.',
      type: 'Virtual Event',
      status: 'completed',
      links: [
        { label: 'View Presentation', icon: Video, type: 'recording' },
        { label: 'Download Materials', icon: Download, type: 'download' }
      ]
    },
    {
      date: '2024-11-15',
      time: '8:00 AM EST',
      title: 'Q3 2024 Earnings Call',
      description: 'Third quarter financial performance and outlook.',
      type: 'Conference Call',
      status: 'completed',
      links: [
        { label: 'Listen to Recording', icon: Video, type: 'recording' },
        { label: 'Download Transcript', icon: Download, type: 'download' }
      ]
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#001F3F] relative overflow-hidden">
      {/* Background Logo */}
      <motion.div 
        className="absolute top-10 left-10 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        whileInView={{ opacity: 0.07, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, delay: 0.4 }}
      >
        <img 
          src={tdbLogo} 
          alt="TDB Logo Background" 
          className="w-60 h-60 lg:w-80 lg:h-80 object-contain"
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
            Events & Presentations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay informed about upcoming investor events and access past presentations
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B86B] via-[#003366] to-[#00B86B] opacity-60"></div>
          
          <div className="space-y-8">
            {events.map((event, index) => {
              const isUpcoming = event.status === 'upcoming';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                    isUpcoming 
                      ? 'bg-[#00B86B] border-[#00D97F] shadow-lg shadow-[#00B86B]/50' 
                      : 'bg-[#003366] border-[#001F3F]'
                  }`}>
                    {isUpcoming && (
                      <div className="absolute inset-0 rounded-full bg-[#00B86B] animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Event Card */}
                  <div className="ml-16">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`glass-card-dark rounded-xl p-6 group cursor-pointer relative overflow-hidden ${
                        isUpcoming ? 'glow-green' : ''
                      }`}
                    >
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isUpcoming 
                              ? 'bg-[#00B86B]/20 text-[#00B86B]' 
                              : 'bg-gray-600/20 text-gray-400'
                          }`}>
                            {event.type}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isUpcoming 
                              ? 'bg-blue-500/20 text-blue-400' 
                              : 'bg-gray-500/20 text-gray-500'
                          }`}>
                            {isUpcoming ? 'Upcoming' : 'Completed'}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                          <Clock className="w-4 h-4 ml-2" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <h3 className={`text-xl font-semibold mb-3 group-hover:text-[#00B86B] transition-colors duration-300 ${
                        isUpcoming ? 'text-white' : 'text-gray-200'
                      }`}>
                        {event.title}
                      </h3>

                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-3">
                        {event.links.map((link, linkIndex) => {
                          const IconComponent = link.icon;
                          return (
                            <motion.button
                              key={linkIndex}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                link.type === 'register' || link.type === 'join'
                                  ? 'bg-gradient-to-r from-[#00B86B] to-[#00D97F] text-white hover:shadow-lg'
                                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                              <span>{link.label}</span>
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-blue rounded-xl"></div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}