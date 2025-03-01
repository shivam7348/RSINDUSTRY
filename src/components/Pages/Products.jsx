import products from '@/utils/constants';
import React from 'react';

const ProductComponent = () => {
  // Example data for images, names, and descriptions
 

  return (
    <div className="p-6 text-center min-h-screen max-w-7xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-md mb-8">
        Our Products
      </h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;