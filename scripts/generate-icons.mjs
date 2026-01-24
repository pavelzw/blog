import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const faviconDir = join(__dirname, '../public/static/favicons');
const imagesDir = join(__dirname, '../public/static/images');

// Terminal prompt favicon SVG
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="15" fill="#111"/>
  <text x="50" y="68" font-family="monospace" font-size="60" font-weight="bold" fill="#f472b6" text-anchor="middle">&gt;_</text>
</svg>
`;

// Twitter card SVG (1200x630)
// Note: Space Grotesk must be installed on the system for correct rendering
const twitterCardSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <!-- White background -->
  <rect width="1200" height="630" fill="#ffffff"/>
  
  <!-- Centered content group -->
  <g transform="translate(600, 315)">
    <!-- Terminal prompt icon (left of center) -->
    <g transform="translate(-280, -100)">
      <rect width="200" height="200" rx="30" fill="#111"/>
      <text x="100" y="136" font-family="monospace" font-size="120" font-weight="bold" fill="#f472b6" text-anchor="middle">&gt;_</text>
    </g>
    
    <!-- Blog title (right of icon) -->
    <text x="-40" y="20" font-family="Space Grotesk, ui-sans-serif, system-ui, sans-serif" font-size="80" font-weight="700" text-anchor="start">
      <tspan fill="#111">pavel</tspan><tspan fill="#f472b6">.pink</tspan>
    </text>
  </g>
</svg>
`;

async function generateIcons() {
  // Ensure output directories exist
  await mkdir(faviconDir, { recursive: true });

  const svgBuffer = Buffer.from(faviconSvg);

  // Generate favicon SVG
  await writeFile(join(faviconDir, 'favicon.svg'), faviconSvg.trim());

  // Generate favicon PNG (32x32) as fallback for browsers that don't support SVG
  await sharp(svgBuffer).resize(32, 32).png().toFile(join(faviconDir, 'favicon-32x32.png'));

  // Generate apple-touch-icon (180x180)
  await sharp(svgBuffer).resize(180, 180).png().toFile(join(faviconDir, 'apple-touch-icon.png'));

  // Generate Android Chrome icons
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(join(faviconDir, 'android-chrome-192x192.png'));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(join(faviconDir, 'android-chrome-512x512.png'));

  // Generate site logo (512x512)
  await sharp(svgBuffer).resize(512, 512).png().toFile(join(imagesDir, 'logo.png'));

  // Generate twitter card (1200x630)
  const twitterCardBuffer = Buffer.from(twitterCardSvg);
  await sharp(twitterCardBuffer)
    .resize(1200, 630)
    .png()
    .toFile(join(imagesDir, 'twitter-card.png'));

  // Generate web manifest
  const manifest = {
    name: "Pavel's Blog",
    short_name: 'Pavel',
    icons: [
      { src: '/static/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/static/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#f472b6',
    background_color: '#111111',
    display: 'standalone',
  };
  await writeFile(join(faviconDir, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);

  console.log('Generated favicons, logo.png, twitter-card.png, and site.webmanifest');
}

generateIcons().catch(console.error);
