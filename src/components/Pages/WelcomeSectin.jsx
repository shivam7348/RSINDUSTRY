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

const images = [
  images1,
  images2,
  images3,
  images4,
  images5,
  images6,
  images7,
  images8,
  images9,
  images10,
  images11,
  images12,
  images13,
  images14,
  images15,
  images16,
];

const WelcomeSection = () => {
  return (
    <div className="p-4 text-center min-h-screen max-w-6xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 drop-shadow-md">
        Welcome to R.S. Industries
      </h1>
      <p className="text-lg sm:text-xl text-gray-800 mt-2 font-medium">
        Leading the way in quality and innovation
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold mt-5 text-gray-900">
        Our Products
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;
