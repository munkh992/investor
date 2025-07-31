// Simple script to generate TDB logo as base64 data URL for immediate use
function generateTDBLogo() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  // Clear canvas with transparent background
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Create circular gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#1e3a8a');
  gradient.addColorStop(1, '#1d4ed8');
  
  // Draw main circle
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2 - 20, 0, 2 * Math.PI);
  ctx.fill();
  
  // Add green border
  const borderGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  borderGradient.addColorStop(0, '#00B86B');
  borderGradient.addColorStop(1, '#00D97F');
  
  ctx.strokeStyle = borderGradient;
  ctx.lineWidth = 8;
  ctx.stroke();
  
  // Draw TDB text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 120px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.fillText('TDB', canvas.width/2, canvas.height/2 - 20);
  
  // Reset shadow for subtitle
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
  // Add subtitle
  ctx.font = '600 28px Arial, sans-serif';
  ctx.fillStyle = '#00D97F';
  ctx.fillText('GREEN BANK', canvas.width/2, canvas.height/2 + 80);
  
  // Add decorative elements
  ctx.fillStyle = '#00B86B';
  ctx.globalAlpha = 0.7;
  
  // Left leaf
  ctx.beginPath();
  ctx.ellipse(180, 180, 15, 8, -Math.PI/4, 0, 2 * Math.PI);
  ctx.fill();
  
  // Right leaf
  ctx.beginPath();
  ctx.ellipse(332, 180, 15, 8, Math.PI/4, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.globalAlpha = 1;
  
  return canvas.toDataURL('image/png');
}

// For use in browser console or HTML page:
// console.log(generateTDBLogo());

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateTDBLogo };
}