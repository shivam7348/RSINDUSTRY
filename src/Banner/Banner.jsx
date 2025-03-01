import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ title, breadcrumb, image }) => {
  return (
    <div
      className="relative h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay for better visibility */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
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