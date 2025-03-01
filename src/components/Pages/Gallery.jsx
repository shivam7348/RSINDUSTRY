import React, { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedImage(images[currentIndex]);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(images[currentIndex]);
  };

  // ESC key se modal close karne ka feature
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Update selected image when currentIndex changes
  useEffect(() => {
    if (selectedImage) {
      setSelectedImage(images[currentIndex]);
    }
  }, [currentIndex]);

  return (
    <>
      <div className="container mx-auto p-4 max-w-6xl">
        {/* Heading */}
        <h1 className="text-3xl text-blue-700 font-bold text-center mb-8">Our Gallery</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer transform transition duration-500 hover:scale-105"
              onClick={() => handleImageClick(image, index)}
            >
              <img
                src={image}
                alt={`Gallery item ${index}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-lg z-10"
              >
                ✖
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-3 py-1 rounded-full text-lg z-10 hover:bg-opacity-80 transition-all"
              >
                ◀
              </button>

              {/* Selected Image */}
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
              />

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-3 py-1 rounded-full text-lg z-10 hover:bg-opacity-80 transition-all"
              >
                ▶
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;