const fs = require('fs');
const path = require('path');

const catalogueDir = __dirname;
const productsJsPath = path.join(catalogueDir, 'products.js');
const productHtmlPath = path.join(catalogueDir, 'product.html');
const productDir = path.join(catalogueDir, 'product');

if (!fs.existsSync(productDir)) {
    fs.mkdirSync(productDir);
}

// Read products.js
let productsJsContent = fs.readFileSync(productsJsPath, 'utf8');
const prefix = "const products = ";
const startIndex = productsJsContent.indexOf(prefix);
let jsonStr = productsJsContent.substring(startIndex + prefix.length).trim();
if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);

let products;
try {
    products = eval('(' + jsonStr + ')');
} catch (e) {
    console.error("Failed to parse products:", e);
    process.exit(1);
}

const templateHtml = fs.readFileSync(productHtmlPath, 'utf8');

products.forEach(product => {
    let content = templateHtml;
    
    // Replace asset paths to point to absolute path
    content = content.replace(/href="style\.css(\?v=\d+)?"/g, 'href="/Antique-Solapur-Ganeshji-Catalogue/style.css?v=3"');
    content = content.replace(/href="images\/logo\.png"/g, 'href="/Antique-Solapur-Ganeshji-Catalogue/images/logo.png"');
    content = content.replace(/src="images\/logo\.png"/g, 'src="/Antique-Solapur-Ganeshji-Catalogue/images/logo.png"');
    content = content.replace(/href="index\.html"/g, 'href="/Antique-Solapur-Ganeshji-Catalogue/index.html"');
    content = content.replace(/href="terms\.html"/g, 'href="/Antique-Solapur-Ganeshji-Catalogue/terms.html"');
    content = content.replace(/src="products\.js(\?v=\d+)?"/g, 'src="/Antique-Solapur-Ganeshji-Catalogue/products.js?v=3"');
    content = content.replace(/src="script\.js(\?v=\d+)?"/g, 'src="/Antique-Solapur-Ganeshji-Catalogue/script.js?v=3"');
    content = content.replace(/src="images\/Review\//g, 'src="/Antique-Solapur-Ganeshji-Catalogue/images/Review/');
    
    // Inject productId
    content = content.replace(
        /let productId = urlParams\.get\('id'\) \|\| localStorage\.getItem\('currentProductId'\);/,
        `let productId = "${product.id}";`
    );

    // Prepend absolute path to dynamically loaded image/video sources
    content = content.replace(/img\.src = src;/g, "img.src = '/Antique-Solapur-Ganeshji-Catalogue/' + src;");
    content = content.replace(/video\.src = src;/g, "video.src = '/Antique-Solapur-Ganeshji-Catalogue/' + src;");
    content = content.replace(/videoTags\[i\]\.src = vidSrc;/g, "videoTags[i].src = '/Antique-Solapur-Ganeshji-Catalogue/' + vidSrc;");

    const targetDir = path.join(productDir, product.id);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(path.join(targetDir, 'index.html'), content, 'utf8');
});

console.log('Successfully generated ' + products.length + ' product pages.');
