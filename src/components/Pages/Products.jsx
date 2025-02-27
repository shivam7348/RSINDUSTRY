import React from 'react';
import './Product.css'; 

const ProductComponent = () => {
  // Example data for images, names, and descriptions
  const products = [
    { id: 1, image: 'image1.jpg', name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, image: 'image2.jpg', name: 'Product 2', description: 'Description for Product 2' },
    // Add more products here...
  ];

  return (
    <div className="product-container">
      <h1>Manufacturing Company Name</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;