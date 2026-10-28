const fs = require('fs');

const ecoHtml = fs.readFileSync('Eco-Friendly-Ganeshji-Catalogue/index.html', 'utf8');

// Find all image sources in Eco-Friendly
const imgRegex = /<img\s+src="([^"]+)"[^>]*>/gi;
let match;
const ecoImages = [];
while ((match = imgRegex.exec(ecoHtml)) !== null) {
    ecoImages.push(match[1]);
}

console.log("Found Eco images:", ecoImages.filter(src => src.includes('DMME') || src.includes('DMM85')));
