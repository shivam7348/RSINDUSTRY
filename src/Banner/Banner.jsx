import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ title, breadcrumb, image }) => {
  return (
    <div
      className="relative h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay for better visibility */}
      <div className="absolute inset-6  bg-opacity-80"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-500 drop-shadow-md">
          {title}
        </h1>
        <nav className="mt-2 text-lg text-white">
          <span className="hover:text-gray-300 transition-colors duration-300">
            <Link to="/">Home</Link>
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
