import { products } from '@/utils/constants';
import React, { useState } from 'react';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
 
  // Get all categories for filter
  const categories = ['all', ...products.map(p => p.category)];
  
  // Filter products based on search and category
  const filteredProducts = products.filter(product => 
    (activeCategory === 'all' || product.category === activeCategory) &&
    (searchTerm === '' || 
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.items.some(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ">
     
    

      <section className="max-w-6xl mx-auto p-6 mb-6 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 ">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Industrial Products</h2>
          
          
        </div>

        {/* Category Tabs */}
        <div className="hidden md:flex overflow-x-auto space-x-2 mb-6 max-w-6xl">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto max-w-6xl px-6 pb-16">
        {filteredProducts.map((productCategory, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">{productCategory.category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategory.items.map((product, productIndex) => (
                <div 
                  key={productIndex} 
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-102"
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-52 object-fit"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 dark:text-white">{product.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

 
    
    </div>
  );
};

export default ProductsPage;