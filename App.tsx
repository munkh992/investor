'use client';

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { NewsSection } from './components/NewsSection';
import { ESGSection } from './components/ESGSection';
import { GreenFinanceSection } from './components/GreenFinanceSection';
import { EarningsSection } from './components/EarningsSection';
import { InvestorDaySection } from './components/InvestorDaySection';
import { EventsTimelineSection } from './components/EventsTimelineSection';
import { AnnualReportsSection } from './components/AnnualReportsSection';
import { ShareholderInfoSection } from './components/ShareholderInfoSection';
import { PerformanceCharts } from './components/PerformanceCharts';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* News & Updates */}
      <NewsSection />
      
      {/* ESG & Sustainability */}
      <ESGSection />
      
      {/* Green Finance Solutions */}
      <GreenFinanceSection />
      
      {/* Quarterly Earnings */}
      <EarningsSection />
      
      {/* Investor Day */}
      <InvestorDaySection />
      
      {/* Events & Presentations Timeline */}
      <EventsTimelineSection />
      
      {/* Annual Reports */}
      <AnnualReportsSection />
      
      {/* Shareholder Information */}
      <ShareholderInfoSection />
      
      {/* Performance Charts */}
      <PerformanceCharts />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}