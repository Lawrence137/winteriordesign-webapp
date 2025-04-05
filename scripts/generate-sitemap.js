import { SitemapStream } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Portfolio data import
import { portfolioItems } from '../src/data.js';

// Base URL of your website
const baseUrl = 'https://winteriordesign.com';

// Generate dynamic URLs from portfolio items
const portfolioUrls = portfolioItems.map(item => ({
  url: `/portfolio/${item.id}`,
  changefreq: 'monthly',
  priority: 0.8,
  lastmod: new Date().toISOString()
}));

// Static URLs
const staticUrls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

// Category URLs
const categoryUrls = [
  { url: '/portfolio/category/kitchen-cabinets', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio/category/bathroom-vanities', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio/category/closets-and-wardrobes', changefreq: 'weekly', priority: 0.9 },
  { url: '/portfolio/category/tv-units', changefreq: 'weekly', priority: 0.9 }
];

// Combine all URLs
const urls = [...staticUrls, ...categoryUrls, ...portfolioUrls];

// Create output directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create sitemap
async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname: baseUrl });
    
    // Write URLs to stream
    urls.forEach(url => stream.write(url));
    stream.end();

    // Convert stream to string
    let data = '';
    stream.on('data', chunk => data += chunk);
    stream.on('end', () => {
      fs.writeFileSync(
        path.join(publicDir, 'sitemap.xml'),
        data
      );
      console.log('Sitemap generated successfully!');
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Run the sitemap generation
generateSitemap(); 