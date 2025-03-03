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
<<<<<<< HEAD
        { name: "OIL AND GAS PLANT PART", image: "https://www.12eleven.com/hubfs/Oil%20and%20Gas%20Production%20and%20Process%20Equipment.jpg", description: "Specialized components for oil and gas processing facilities" },
=======
        { name: "OIL AND GAS PLANT PART", image: "/Linkpi/placeholder/300/200", description: "Specialized components for oil and gas processing facilities" },
>>>>>>> 7c40a12b278b7b4c25341738e4d97c3a457b44ca
        { name: "DIE, TOOLS, JIG FIXTURE", image: "https://5.imimg.com/data5/JQ/PK/CI/SELLER-2831548/dies-jigs-fixture-500x500.jpg", description: "Custom tooling solutions for industrial applications" }
      ]
    },
    {
      category: "Couplers & Connectors",
      items: [
<<<<<<< HEAD
        { name: "CUPPLER", image: "https://apnagharbanao.in:4000/uploads/25396-1695379575512.jpg", description: "Standard couplers for industrial pipe connections" },
=======
        { name: "CUPPLER", image: "https://Linkpnagharbanao.in:4000/uploads/36540-1695382506110.jpg", description: "Standard couplers for industrial pipe connections" },
>>>>>>> 7c40a12b278b7b4c25341738e4d97c3a457b44ca
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
      {/* Hero Section */}
      {/* <section className="relative bg-blue-800 dark:bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Linkpi/placeholder/1920/600" 
            alt="Manufacturing Background" 
            className="w-full h-full object-cover object-center opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              RS Manufacturing
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Precision Machining & Industrial Parts Manufacturing
            </p>
          
          </div>
        </div>
      </section> */}

      {/* Filter and Search Section */}
      <section className="max-w-6xl mx-auto p-6 mb-6 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 ">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Industrial Products</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full sm:w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div> */}
            
            <select 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
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
                    {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Request Info
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Form Section */}
    

      {/* Footer */}
<<<<<<< HEAD
 
=======
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">RS Manufacturing</h3>
              <p className="text-blue-200">Precision Machining & Industrial Parts</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/about" className="text-blue-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="products" className="text-blue-200 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="contact" className="text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300">
            <p>© 2025 RS Manufacturing. All rights reserved.</p>
          </div>
        </div>
      </footer>
>>>>>>> 7c40a12b278b7b4c25341738e4d97c3a457b44ca
    </div>
  );
};

export default ProductsPage;