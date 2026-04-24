const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\pavan\\.gemini\\antigravity\\brain\\7bc67125-4a9e-4aa0-bc48-65d39714d9ab';
const destDir = 'c:\\Users\\pavan\\MediatorApp\\assets\\images';

// Based on the file sizes, these match the 5 uploaded files
const files = [
  'media__1777014910763.jpg', // 265936 bytes
  'media__1777014910842.jpg', // 175823 bytes
  'media__1777014910924.jpg', // 224870 bytes
  'media__1777014910993.jpg', // 171758 bytes
  'media__1777014910554.jpg'  // 193267 bytes
];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

files.forEach((file, index) => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, `banner${index + 1}.jpg`);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to banner${index + 1}.jpg`);
  } else {
    console.log(`File not found: ${srcPath}`);
  }
});
