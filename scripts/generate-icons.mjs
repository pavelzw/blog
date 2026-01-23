import sharp from 'sharp';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '../public/static/favicons');

// Terminal prompt favicon SVG
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="15" fill="#111"/>
  <text x="50" y="68" font-family="monospace" font-size="60" font-weight="bold" fill="#f472b6" text-anchor="middle">&gt;_</text>
</svg>
`;

async function generateIcons() {
  // Ensure output directory exists
  await mkdir(outputDir, { recursive: true });

  const svgBuffer = Buffer.from(faviconSvg);

  // Generate apple-touch-icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(outputDir, 'apple-touch-icon.png'));

  // Generate Android Chrome icons
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(join(outputDir, 'android-chrome-192x192.png'));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(join(outputDir, 'android-chrome-512x512.png'));

  // Generate web manifest
  const manifest = {
    name: "Pavel's Blog",
    short_name: "Pavel",
    icons: [
      { src: '/static/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/static/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#f472b6',
    background_color: '#111111',
    display: 'standalone',
  };
  await writeFile(join(outputDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

  console.log('Generated apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png, site.webmanifest');
}

generateIcons().catch(console.error);
