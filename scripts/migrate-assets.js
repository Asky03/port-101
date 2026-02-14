/**
 * Migration Script - Move assets to public folder
 * Run with: node scripts/migrate-assets.js
 */

const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'assets');
const publicDir = path.join(__dirname, '..', 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✓ Created public/ directory');
}

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`⚠ Source directory not found: ${src}`);
    return;
  }

  // Create destination directory
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied: ${entry.name}`);
    }
  }
}

console.log('🚀 Starting asset migration...\n');

// Copy images
const imagesDir = path.join(assetsDir, 'images');
const publicImagesDir = path.join(publicDir, 'images');
if (fs.existsSync(imagesDir)) {
  copyDir(imagesDir, publicImagesDir);
  console.log('\n✓ Images migrated to public/images/');
} else {
  console.log('⚠ No images directory found at assets/images/');
}

// Copy favicon files to root of public
const faviconFiles = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'site.webmanifest',
];

console.log('\n📦 Copying favicon files to public root...');
faviconFiles.forEach((file) => {
  const srcPath = path.join(imagesDir, file);
  const destPath = path.join(publicDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied: ${file}`);
  }
});

console.log('\n✅ Migration complete!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3000');
