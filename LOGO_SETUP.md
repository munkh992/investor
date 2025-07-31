# TDB Logo Setup Guide

This guide explains how to properly set up the TDB Bank logo for the investor relations website.

## Quick Setup (Recommended)

### Option 1: Use the Provided SVG Logo
The project includes a pre-made SVG logo at `/public/assets/tdb-logo.svg` that's ready to use. This logo features:
- Scalable vector graphics (perfect quality at any size)
- TDB branding with green banking theme
- Gradient backgrounds matching the site design
- Optimized for web deployment

**No additional setup required** - the components are already configured to use this logo.

### Option 2: Generate a Custom PNG Logo
If you prefer a PNG version, open `/public/assets/generate-logo.html` in your browser:

1. Open the file in any modern web browser
2. Click "Generate Logo" to create the TDB logo
3. Click "Download PNG" to save as `tdb-logo.png`
4. Place the downloaded file in `/public/assets/`

## Logo Usage Throughout the Site

The TDB logo appears in multiple locations:

### Header Logo (Small)
- **File**: `components/Header.tsx`
- **Path**: `/assets/tdb-logo.svg`
- **Size**: 48x48px (w-12 h-12)
- **Usage**: Main navigation branding

### Hero Section Background (Large)
- **File**: `components/HeroSection.tsx`
- **Path**: `/assets/tdb-logo.svg`
- **Size**: 600x600px (responsive)
- **Usage**: Large background logo with parallax effect

### Section Backgrounds (Medium)
- **Files**: Various section components
- **Path**: `/assets/tdb-logo.svg`
- **Sizes**: 300-500px (responsive)
- **Usage**: Subtle background branding elements

### Footer Logo (Small)
- **File**: `components/Footer.tsx`
- **Path**: `/assets/tdb-logo.svg`
- **Size**: 40x40px (w-10 h-10)
- **Usage**: Footer branding

## Customizing the Logo

### Updating the SVG Logo
To modify the existing SVG logo:

1. Edit `/public/assets/tdb-logo.svg`
2. Modify colors, text, or styling as needed
3. Save and the changes will apply site-wide

### Using Your Own Logo
To replace with a custom logo:

1. Create your logo as SVG (recommended) or PNG
2. Name it `tdb-logo.svg` or `tdb-logo.png`
3. Place in `/public/assets/`
4. Ensure it's square aspect ratio for best results

### Logo Requirements
- **Format**: SVG (preferred) or PNG
- **Aspect Ratio**: 1:1 (square)
- **Minimum Size**: 200x200px for PNG
- **Colors**: Should work on dark backgrounds
- **Transparency**: Background should be transparent

## Brand Colors Used in Logo

The current logo uses TDB's brand colors:

```css
/* Primary Blue Gradient */
#1e3a8a → #1d4ed8

/* Green Accent Gradient */  
#00B86B → #00D97F

/* Text Colors */
White: #ffffff
Green Subtitle: #00D97F
```

## Technical Details

### File Paths
All logo references use the public assets path:
```
/assets/tdb-logo.svg
```

### Component Integration
The logo is imported in components as:
```tsx
<img 
  src="/assets/tdb-logo.svg" 
  alt="TDB Bank Logo" 
  className="w-full h-full object-contain"
/>
```

### Performance Optimization
- SVG format provides:
  - Small file size
  - Perfect scaling
  - No pixelation
  - CSS styling capability

### Browser Compatibility
The SVG logo is supported by:
- Chrome 4+
- Firefox 4+
- Safari 4+
- Edge 12+
- IE 9+

## Deployment Checklist

Before deploying, ensure:

- [ ] Logo file exists at `/public/assets/tdb-logo.svg`
- [ ] Logo displays correctly in header
- [ ] Background logos appear in all sections
- [ ] Logo is visible on dark backgrounds
- [ ] Logo scales properly on mobile devices

## Troubleshooting

### Logo Not Displaying
1. Check file path: `/public/assets/tdb-logo.svg`
2. Verify file permissions
3. Clear browser cache
4. Check browser console for errors

### Logo Appears Pixelated
1. Use SVG format instead of PNG
2. Ensure PNG is high resolution (512x512px minimum)
3. Check CSS object-fit properties

### Logo Too Large/Small
1. Modify className sizing in components
2. Adjust SVG viewBox if needed
3. Use responsive classes (w-12 md:w-16 lg:w-20)

## Support

For logo-related issues:
1. Check this guide first
2. Verify file paths and formats
3. Test in different browsers
4. Check browser developer tools for errors

The TDB logo system is designed to be flexible and easy to customize while maintaining brand consistency across the entire investor relations website.