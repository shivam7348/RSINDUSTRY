import React, { useState, useEffect } from 'react';
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
import { Banner } from '@/Banner/Banner';

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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // ESC key se modal close karne ka feature
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
   <>
   <Banner/>
     <div className="container mx-auto p-4 max-w-6xl">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Gallery item ${index}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div className="relative max-w-4xl w-full flex justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-lg z-10"
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
   </>
  );
};

export default Gallery;