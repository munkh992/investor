# TDB Bank Investor Relations Website

A premium, ultra-modern investor relations website for TDB Bank, featuring comprehensive green banking initiatives, ESG commitments, and sustainable finance solutions.

![TDB Bank Hero](./public/assets/hero-preview.jpg)

## 🌟 Features

### Green Banking Focus
- **ESG Performance Tracking** - Real-time environmental, social, and governance metrics
- **Sustainable Finance** - $65B+ commitment to green investments and clean energy
- **Carbon Neutral Goals** - 85% reduction in operational carbon footprint
- **Green Bond Offerings** - Comprehensive sustainable investment products

### Investor Relations
- **Quarterly Earnings** - Downloadable reports and presentations
- **Annual Reports** - Complete financial documentation with ESG integration
- **Shareholder Information** - Dividend details, stock data, and contact information
- **Performance Charts** - Interactive financial visualizations
- **Events Timeline** - Investor day registration and presentation access

### Technical Excellence
- **Modern React Architecture** - Built with React 18 and TypeScript
- **Premium Animations** - Smooth Motion/Framer Motion interactions
- **Responsive Design** - Optimized for all devices and screen sizes
- **Glassmorphism UI** - Contemporary design with depth and transparency
- **Tailwind CSS v4** - Latest styling framework with custom TDB branding

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tdb-investor-relations.git
   cd tdb-investor-relations
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the TDB logo** (Important!)
   - The logo is already provided as `/public/assets/tdb-logo.svg`
   - For PNG version: Open `/public/assets/generate-logo.html` in browser and download
   - See [LOGO_SETUP.md](./LOGO_SETUP.md) for detailed instructions

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm run preview
```

### GitHub Pages Deployment

1. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/tdb-investor-relations"
   }
   ```

2. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/tdb-investor-relations/',
     // ... other config
   })
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Automatic Deployment
The project includes GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment:
- Pushes to `main` branch trigger automatic deployment
- Enable GitHub Pages in repository settings
- Select "GitHub Actions" as source

## 🎨 Customization

### Brand Colors
The website uses TDB's brand colors defined in `styles/globals.css`:

```css
:root {
  --tdb-black: #0A0A0A;      /* Primary dark background */
  --tdb-blue: #001F3F;       /* Deep corporate blue */
  --tdb-green: #00B86B;      /* Sustainable green accent */
  --tdb-blue-light: #003366; /* Secondary blue */
  --tdb-green-light: #00D97F; /* Light green highlights */
}
```

### Logo Replacement
**The TDB logo is already set up and ready to use!**

Current logo locations:
- **Main logo**: `/public/assets/tdb-logo.svg` (ready to use)
- **Generator**: `/public/assets/generate-logo.html` (for PNG version)
- **Setup guide**: See [LOGO_SETUP.md](./LOGO_SETUP.md)

To use your own logo:
1. Replace `/public/assets/tdb-logo.svg` with your logo
2. Ensure square aspect ratio (1:1)
3. Use SVG format for best quality

### Content Updates
- **News Items**: Edit `components/NewsSection.tsx`
- **Financial Data**: Update `components/PerformanceCharts.tsx`
- **ESG Metrics**: Modify `components/ESGSection.tsx`
- **Contact Information**: Update `components/Footer.tsx`

## 📁 Project Structure

```
tdb-investor-relations/
├── public/
│   ├── assets/
│   │   ├── tdb-logo.svg        # Main TDB logo (ready to use)
│   │   └── generate-logo.html  # Logo generator tool
│   ├── favicon.ico
│   └── site.webmanifest
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── NewsSection.tsx
│   ├── ESGSection.tsx          # Green banking & sustainability
│   ├── GreenFinanceSection.tsx # Sustainable investment products
│   ├── EarningsSection.tsx
│   ├── InvestorDaySection.tsx
│   ├── EventsTimelineSection.tsx
│   ├── AnnualReportsSection.tsx
│   ├── ShareholderInfoSection.tsx
│   ├── PerformanceCharts.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css             # Global styles and brand colors
├── App.tsx                     # Main application component
├── main.tsx                    # Application entry point
├── package.json               # Project dependencies
├── README.md                  # This file
├── LOGO_SETUP.md             # Detailed logo setup guide
└── .github/workflows/deploy.yml # Automatic deployment
```

## 🔧 Dependencies

### Core Framework
- **React 18.2.0** - Modern React with hooks and concurrent features
- **TypeScript 5.2.2** - Type-safe JavaScript development
- **Vite 4.4.9** - Fast build tool and development server

### UI & Styling  
- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **Motion/React 10.16.0** - Smooth animations and interactions
- **Lucide React 0.263.1** - Beautiful icon library

### Data Visualization
- **Recharts 2.8.0** - Interactive charts for financial data
- **Sonner 1.0.3** - Toast notifications

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- **Logo Issues**: See [LOGO_SETUP.md](./LOGO_SETUP.md)
- **Email**: investors@tdbbank.com
- **Phone**: +1 (555) 123-4567
- **Issues**: [GitHub Issues](https://github.com/yourusername/tdb-investor-relations/issues)

## ✅ Pre-Deployment Checklist

Before deploying to production:

- [ ] TDB logo displays correctly in header
- [ ] Background logos appear in all sections  
- [ ] All green banking content is accurate
- [ ] ESG metrics and data are current
- [ ] Contact information is updated
- [ ] Repository URL is correct in package.json
- [ ] GitHub Pages is configured
- [ ] All images load properly
- [ ] Mobile responsiveness tested
- [ ] Performance optimized

---

**TDB Bank** - Leading the future of sustainable banking and green finance.

## 🔄 Deployment Workflow

This project is configured for easy deployment to GitHub Pages. The build process:

1. Optimizes all assets and images
2. Bundles JavaScript and CSS
3. Generates static HTML files
4. Creates service worker for offline functionality
5. Deploys to GitHub Pages automatically

For other hosting platforms (Netlify, Vercel, AWS), simply upload the `dist` folder after running `npm run build`.

## 🌱 Green Banking Theme

The website emphasizes TDB's commitment to sustainable banking:
- **ESG Integration** throughout all sections
- **Green Finance** dedicated section with investment products
- **Sustainability Metrics** prominently displayed
- **Environmental Impact** tracking and reporting
- **Carbon Neutral** goals and achievements