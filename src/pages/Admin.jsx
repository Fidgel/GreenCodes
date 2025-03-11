import React, { useState, useEffect } from 'react';
import { importProductsFromCSV, saveProducts, loadProducts } from '../utils/csvImporter';
import '../styles/Admin.css';

const Admin = () => {
  const [file, setFile] = useState(null);
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Load any saved products on component mount
  useEffect(() => {
    const savedProducts = loadProducts();
    if (savedProducts) {
      setProducts(savedProducts);
      setMessage(`${savedProducts.length} products loaded from storage.`);
    }
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImport = async () => {
    if (!file) {
      setMessage('Please select a CSV file first.');
      return;
    }
    
    setIsLoading(true);
    setMessage('Importing products...');
    
    try {
      const importedProducts = await importProductsFromCSV(file);
      saveProducts(importedProducts);
      setProducts(importedProducts);
      setMessage(`Successfully imported ${importedProducts.length} products!`);
    } catch (error) {
      console.error('Import error:', error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1>Product Management</h1>
      
      <div className="import-section">
        <h2>Import Products from CSV</h2>
        <p>Upload a CSV file with product data. The file should have columns for: title, description, image, price, discountPrice, discount, affiliateLink</p>
        
        <div className="file-input">
          <input 
            type="file" 
            accept=".csv" 
            onChange={handleFileChange} 
            disabled={isLoading}
          />
          <button 
            onClick={handleImport} 
            disabled={!file || isLoading}
            className="import-button"
          >
            {isLoading ? 'Importing...' : 'Import Products'}
          </button>
        </div>
        
        {message && <div className="message">{message}</div>}
      </div>
      
      {products.length > 0 && (
        <div className="products-preview">
          <h2>Imported Products ({products.length})</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Has Image</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title.substring(0, 40)}...</td>
                  <td>{product.price} → {product.discountPrice}</td>
                  <td>{product.discount}</td>
                  <td>{product.image ? '✓' : '✗'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;