import React from "react";
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

// Product data with unique names and titles
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
  return (
    <div className="p-4 text-center min-h-screen max-w-6xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <h1 className="text-3xl sm:text-5xl lg:text-10xl font-bold text-blue-700 drop-shadow-md">
        Welcome to R.S. Industries
      </h1>
      <p className="text-lg sm:text-xl text-gray-800 mt-2 font-medium">
        Leading the way in quality and innovation
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold mt-5 text-gray-900">
        Our Manufacturing Products
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productData.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-3 flex-1 flex flex-col bg-white">
              <h3 className="font-bold text-lg text-blue-700">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;