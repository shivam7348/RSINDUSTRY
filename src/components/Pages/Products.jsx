import Banner from '@/Banner/Banner';

import React from 'react';
import ProductsPage from './../Product/ProductsPage';

const ProductComponent = () => {
  const bannerImage = 'https://www.shutterstock.com/image-photo/blue-color-laser-cnc-cut-260nw-2149033525.jpg';

  return (
    <>
      <Banner title="Product" breadcrumb="Product" image={bannerImage} />

      {/* <div className="p-4 sm:p-6 text-center min-h-screen max-w-7xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 drop-shadow-md mb-6">
          Our Products
        </h1>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <ProductsPage/>
    </>
  );
};

export default ProductComponent;
