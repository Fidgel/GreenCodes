const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// Paths - update default path to look in the scripts directory
const csvPath = process.argv[2] || path.join(__dirname, 'Amazon_products.csv'); // Look in scripts folder
const productsJsPath = path.resolve(__dirname, '../src/data/products.js');

// Function to read existing products.js file
function readExistingProducts() {
  try {
    // Read the existing file content
    const fileContent = fs.readFileSync(productsJsPath, 'utf8');
    
    // Extract the array part using regex
    const match = fileContent.match(/export const productData = (\[[\s\S]*?\]);/);
    if (match && match[1]) {
      // Parse the array part
      return JSON.parse(match[1]);
    }
    
    console.log('Could not parse existing products.js, starting with empty array');
    return [];
  } catch (err) {
    console.log('Error reading existing products.js:', err.message);
    return [];
  }
}

// Read existing products
const existingProducts = readExistingProducts();
const existingIds = new Set(existingProducts.map(p => p.id));

// Find the highest existing ID
let maxId = 0;
existingProducts.forEach(product => {
  if (product.id > maxId) maxId = product.id;
});

// Process new products from CSV
console.log(`Processing CSV from: ${csvPath}`);
console.log(`Found ${existingProducts.length} existing products`);

const newProducts = [];

fs.createReadStream(csvPath)
  .pipe(csv())
  .on('data', (data) => {
    // Log CSV columns from first row for debugging
    if (newProducts.length === 0) {
      console.log("CSV columns:", Object.keys(data));
    }
    
    // Calculate discount if needed
    let discount = data.discount || '';
    if (!discount && data.price && data.discountPrice) {
      try {
        const price = parseFloat(data.price.replace(/[^0-9,.]/g, '').replace(',', '.'));
        const discountPrice = parseFloat(data.discountPrice.replace(/[^0-9,.]/g, '').replace(',', '.'));
        
        if (price > discountPrice) {
          const discountPerc = Math.round((1 - discountPrice/price) * 100);
          discount = `${discountPerc}% OFF`;
        }
      } catch(e) {
        console.log('Error calculating discount:', e);
      }
    }
    
    // Get fields from CSV, check different possible column names
    const title = data.title || data['title-content'] || data['productTitle'] || 'Amazon Product';
    const image = data['image-src'] || data.image || data['image-href'] || '';
    const affiliateLink = data['web-scraper-start-url'] || data.affiliateLink || '';
    const description = data.description || 'Premium Amazon product with fast shipping';
    
    // Create new product
    newProducts.push({
      id: ++maxId, // Increment the highest ID for each new product
      title: title.trim(),
      description: description,
      image: image,
      price: data.price || '€0.00',
      discountPrice: data.discountPrice || '',
      discount: discount,
      affiliateLink: affiliateLink
    });
  })
  .on('end', () => {
    console.log(`Added ${newProducts.length} new products`);
    
    // Merge existing and new products
    const mergedProducts = [...existingProducts, ...newProducts];
    
    // Generate the new file content
    const output = `// Generated on ${new Date().toLocaleDateString()}\nexport const productData = ${JSON.stringify(mergedProducts, null, 2)};`;
    
    // Write back to products.js
    fs.writeFileSync(productsJsPath, output);
    
    console.log(`\nSuccess! Updated products.js with ${mergedProducts.length} total products.`);
  });