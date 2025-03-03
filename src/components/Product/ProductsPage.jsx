import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const products = [
    {
      category: "Machining Parts",
      items: [
        { name: "ACE CHALD PART", image: "https://5.imimg.com/data5/DY/QP/QC/SELLER-3211704/cnc-turned-components-500x500.jpg", description: "Precision-engineered components for industrial machinery" },
        { name: "ALL TYPE MACHINING PART", image: "https://5.imimg.com/data5/SELLER/Default/2024/7/436750597/WI/IK/JR/3843285/cnc-machining-parts.png", description: "Custom machined parts for various industrial applications" },
        { name: "CANVER MACHINING AND PART", image: "/Linkpi/placeholder/300/200", description: "Specialized machining solutions for complex requirements" }
      ]
    },
    {
      category: "Brass & Copper Parts",
      items: [
        { name: "BRASS NIPPLE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ040UdllTcQzeB_6Rz3bQou_wESIw5_tyn9w&s", description: "High-quality brass nipples for plumbing and industrial use" },
        { name: "BRASS COMPONENTS", image: "https://www.nikasam.com/img/products/brass-precision-turned-parts/brass-turned-components.webp", description: "Precision brass components for various applications" },
        { name: "COPPER DEAD CAP", image: "https://5.imimg.com/data5/SELLER/Default/2022/6/BS/KG/RI/26307974/dead-cap-1.jpg", description: "Durable copper dead caps with excellent conductivity" }
      ]
    },
    {
      category: "Oil & Gas Plant Parts",
      items: [
        { name: "OIL AND GAS PLANT PART", image: "https://www.12eleven.com/hubfs/Oil%20and%20Gas%20Production%20and%20Process%20Equipment.jpg", description: "Specialized components for oil and gas processing facilities" },
        { name: "OIL AND GAS PLANT PART", image: "/Linkpi/placeholder/300/200", description: "Specialized components for oil and gas processing facilities" },
        { name: "DIE, TOOLS, JIG FIXTURE", image: "https://5.imimg.com/data5/JQ/PK/CI/SELLER-2831548/dies-jigs-fixture-500x500.jpg", description: "Custom tooling solutions for industrial applications" }
      ]
    },
    {
      category: "Couplers & Connectors",
      items: [
        { name: "CUPPLER", image: "https://apnagharbanao.in:4000/uploads/25396-1695379575512.jpg", description: "Standard couplers for industrial pipe connections" },
        { name: "CUPPLER", image: "https://Linkpnagharbanao.in:4000/uploads/36540-1695382506110.jpg", description: "Standard couplers for industrial pipe connections" },
        { name: "DAMY CUPPLER", image: "https://m.media-amazon.com/images/I/71Rfxz07AhL._AC_UF1000,1000_QL80_.jpg", description: "Specialized dummy couplers for testing applications" },
        { name: "SEELK CUPPLER", image: "https://5.imimg.com/data5/SELLER/Default/2024/3/404967322/BD/EV/CA/9164815/screenshot-2024-03-28-at-16-24-59-500x500.png", description: "High-pressure sealing couplers for critical environments" },
        { name: "CHARGING CUPPLER TCC", image: "https://5.imimg.com/data5/SELLER/Default/2023/8/338624146/UL/KD/SL/5507355/tcc-series-1-1692182358585-500x500.jpeg", description: "TCC charging couplers for specialized applications" },
        { name: "ALL PIPE NEW CUPPLER", image: "https://m.media-amazon.com/images/I/61ssCiJKvwL.jpg", description: "Universal pipe couplers for various diameters" }
      ]
    }
  ];

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