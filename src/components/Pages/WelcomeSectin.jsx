import React from "react";
import { Factory, ShieldCheck, Gauge, PackageCheck, Settings, HardHat } from "lucide-react";

// Import all your images
import images1 from "../Header/images/Fig-48-Example-of-Rolling-an-Angle-Bar.jpg";
import images2 from "../Header/images/download (1).jpg";
import images3 from "../Header/images/images (1).jpg";
import images4 from "../Header/images/images (2).jpg";
import images5 from "../Header/images/images (3).jpg";
import images6 from "../Header/images/images (4).jpg";
import images7 from "../Header/images/Slitter-Roller-Guide-for-Hot-Rolling-Mill.avif";
import images8 from "../Header/images/round-metal-mill-rollers-765.jpg";
import images9 from "../Header/images/5jggim2cfty.webp";
import images10 from "../Header/images/4-250x250.webp";
import images11 from "../Header/images/round-metal-mill-rollers-765.jpg";
import images12 from "../Header/images/Slitter-Roller-Guide-for-Hot-Rolling-Mill.avif";
import images13 from "../Header/images/Spare-Parts-for-Pellet-Mill-Gear-Wheel-Shaft-Roller-Assembly-Bearing.avif";
import images14 from "../Header/images/spare-parts-for-steel-rolling-mills-roller-for-steel-rolling-mill.web.jpg";
import images15 from "../Header/images/spare_parts_for_steel_rolling_mill_logo.jpg";
import images16 from "../Header/images/special-metals-machined-components.jpg";

const productData = [
  {
    id: 1,
    name: "Angle Bar Rollers",
    title: "Precision Rolling Equipment",
    image: images1
  },
  {
    id: 2,
    name: "High-Speed Mill Drives",
    title: "Advanced Drive Systems",
    image: images2
  },
  {
    id: 3,
    name: "Carbon Steel Rollers",
    title: "Durable Steel Components",
    image: images3
  },
  {
    id: 4,
    name: "Cold Rolling Assembly",
    title: "Temperature-Controlled Rolling",
    image: images4
  },
  {
    id: 5,
    name: "Stainless Steel Mills",
    title: "Corrosion-Resistant Systems",
    image: images5
  },
  {
    id: 6,
    name: "Industrial Mill Stands",
    title: "Heavy-Duty Support Structures",
    image: images6
  },
  {
    id: 7,
    name: "Slitter Roller Guides",
    title: "Precision Cutting Equipment",
    image: images7
  },
  {
    id: 8,
    name: "Round Metal Mill Rollers",
    title: "Surface-Hardened Components",
    image: images8
  },
  {
    id: 9,
    name: "Specialized Bearings",
    title: "High-Performance Rotation Systems",
    image: images9
  },
  {
    id: 10,
    name: "Compact Mill Components",
    title: "Space-Efficient Solutions",
    image: images10
  },
  {
    id: 11,
    name: "Heavy-Duty Mill Rollers",
    title: "Industrial-Grade Processing",
    image: images11
  },
  {
    id: 12,
    name: "Hot Rolling Mill Guides",
    title: "Thermal-Resistant Equipment",
    image: images12
  },
  {
    id: 13,
    name: "Pellet Mill Assemblies",
    title: "Complete Gear and Shaft Solutions",
    image: images13
  },
  {
    id: 14,
    name: "Custom Steel Rollers",
    title: "Tailored Rolling Solutions",
    image: images14
  },
  {
    id: 15,
    name: "Rolling Mill Spare Parts",
    title: "OEM Compatible Components",
    image: images15
  },
  {
    id: 16,
    name: "Machined Metal Components",
    title: "Precision Engineered Parts",
    image: images16
  }
];

const WelcomeSection = () => {
  const features = [
    {
      icon: <Factory className="w-10 h-10 text-blue-600" />,
      title: "Modern Manufacturing",
      description: "20,000 sq ft facility with CNC machines"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Quality Assurance",
      description: "ISO certified quality processes"
    },
    {
      icon: <Gauge className="w-10 h-10 text-blue-600" />,
      title: "Precision Engineering",
      description: "±0.001mm tolerance standards"
    },
    {
      icon: <PackageCheck className="w-10 h-10 text-blue-600" />,
      title: "Timely Delivery",
      description: "98% on-time delivery record"
    },
    {
      icon: <Settings className="w-10 h-10 text-blue-600" />,
      title: "Custom Solutions",
      description: "Tailored to your specifications"
    },
    {
      icon: <HardHat className="w-10 h-10 text-blue-600" />,
      title: "Expert Team",
      description: "30+ years industry experience"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Welcome Text Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">R.S. Industries</span> Manufacturing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Precision engineered components for the metalworking industry since 1985
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We specialize in manufacturing high-quality rollers, mill components, and precision parts for the steel and metal processing industries. 
            Our commitment to excellence and customer satisfaction has made us a trusted partner for industries worldwide.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              High-quality components for industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.map((product) => (
              <div key={product.id} className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 hover:border-blue-300 transition-all">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;