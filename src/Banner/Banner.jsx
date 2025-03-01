import React from 'react';

const Banner = ({ title, breadcrumb }) => {
  return (
    <div className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
          {title}
        </h1>
        <nav className="mt-2 text-lg text-gray-200">
          <span className="hover:text-blue-300 transition-colors duration-300">
            <a href="/">Home</a>
          </span>
          {breadcrumb && (
            <>
              <span className="mx-2">/</span>
              <span className="text-blue-300">{breadcrumb}</span>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Banner;