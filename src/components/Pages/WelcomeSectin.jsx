import React from "react";

import images1 from "../Header/images/Fig-48-Example-of-Rolling-an-Angle-Bar.jpg"
import images2 from "../Header/images/download (1).jpg"
import images3 from "../Header/images/images (1).jpg"
import images4 from "../Header/images/images (2).jpg"
import images5 from "../Header/images/images (3).jpg"
import images6 from "../Header/images/images (4).jpg"
import images7 from "../Header/images/Slitter-Roller-Guide-for-Hot-Rolling-Mill.avif"
import images8 from "../Header/images/round-metal-mill-rollers-765.jpg"
import images9 from "../Header/images/5jggim2cfty.webp"
import images10 from "../Header/images/4-250x250.webp"


// import images7 from "../Header/images/images (3).jpg"
// import images5 from "../Header/images/images (1).jpg"
// import images8 from "../Header/images/images.jpg"



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
];

const WelcomeSection = () => {
  return (
    <div className="p-6 text-center bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Our  RS Industries</h1>
      <p className="text-lg text-gray-700 mt-2">Leading the way in quality and innovation</p>
         
         <h2 className="text-4xl font-bold mt-3"> Our Product </h2>

         
      
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-fit transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;
