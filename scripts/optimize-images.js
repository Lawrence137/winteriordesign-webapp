import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = path.join(__dirname, '..', 'public', 'images');
const outputDir = path.join(__dirname, '..', 'public', 'images', 'optimized');

// Get command line arguments
const args = process.argv.slice(2);
const specificFiles = args.length > 0 ? args : null;

// Only clean up if processing all files
if (!specificFiles) {
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });
} else {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // If processing specific files, only remove their optimized versions
  specificFiles.forEach(file => {
    const baseName = path.parse(file).name;
    const optimizedFiles = fs.readdirSync(outputDir).filter(f => f.startsWith(baseName + '-'));
    optimizedFiles.forEach(f => {
      const filePath = path.join(outputDir, f);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });
  });
}

// Logo-specific configurations
const logoConfigs = {
  'WinteriorLogo2.png': {
    sizes: [
      { width: 163, suffix: 'sm' },  // For mobile
      { width: 245, suffix: 'md' }   // For desktop (Lighthouse recommended)
    ],
    format: 'webp',
    quality: 90  // Increased quality for logos
  },
  'winteriordarklogo2.png': {
    sizes: [
      { width: 163, suffix: 'sm' },  // For mobile
      { width: 245, suffix: 'md' }   // For desktop (Lighthouse recommended)
    ],
    format: 'webp',
    quality: 90  // Increased quality for logos
  }
};

// Default configurations for other images
const defaultConfig = {
  sizes: [
    { width: 320, suffix: 'sm' },
    { width: 640, suffix: 'md' },
    { width: 1024, suffix: 'lg' },
    { width: 1920, suffix: 'xl' }
  ],
  formats: ['webp', 'avif'],
  quality: 80
};

async function optimizeImage(inputPath, fileName, relativePath = '') {
  try {
    const config = logoConfigs[fileName] || defaultConfig;
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Don't enlarge images
    const maxWidth = Math.min(metadata.width, Math.max(...config.sizes.map(s => s.width)));
    
    // Create output subdirectory if it doesn't exist
    const outputSubDir = path.join(outputDir, relativePath);
    if (!fs.existsSync(outputSubDir)) {
      fs.mkdirSync(outputSubDir, { recursive: true });
    }
    
    for (const size of config.sizes) {
      // Skip sizes larger than original
      if (size.width > metadata.width) continue;
      
      const width = size.width;
      const resized = image.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });

      const baseName = path.parse(fileName).name;
      
      if (config.format) {
        // Specific format
        await resized[config.format]({ quality: config.quality })
          .toFile(path.join(outputSubDir, `${baseName}-${size.suffix}.${config.format}`));
      } else {
        // Multiple formats
        for (const format of defaultConfig.formats) {
          await resized[format]({ quality: config.quality })
            .toFile(path.join(outputSubDir, `${baseName}-${size.suffix}.${format}`));
        }
        // Always include a JPEG version as fallback
        await resized.jpeg({ quality: config.quality })
          .toFile(path.join(outputSubDir, `${baseName}-${size.suffix}.jpg`));
      }
    }
    
    console.log(`Optimized: ${path.join(relativePath, fileName)}`);
  } catch (error) {
    console.error(`Error optimizing ${fileName}:`, error);
  }
}

async function processDirectory(dir, relativePath = '') {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && file !== 'optimized') {
        // Process subdirectory
        const newRelativePath = path.join(relativePath, file);
        await processDirectory(filePath, newRelativePath);
      } else if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        // If specific files are provided, only process those
        if (specificFiles && !specificFiles.includes(file)) continue;
        await optimizeImage(filePath, file, relativePath);
      }
    }
  } catch (error) {
    console.error('Error processing directory:', error);
  }
}

// Run optimization
processDirectory(inputDir); 