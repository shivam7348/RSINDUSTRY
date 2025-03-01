import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Toggle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/products", label: "PRODUCTS" },
    { path: "/work-with", label: "WORK WITH" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT US" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
    className={`w-full bg-gray-800 text-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "shadow-sm py-2" : "py-4"
    }`}
  >
    <div className="container mx-auto px-4 flex justify-center items-center relative">
      
      {/* Hamburger Menu Button (Right Corner) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 hover:bg-gray-700 transition-colors duration-200"
        aria-expanded={isMenuOpen}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>
  
      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } fixed lg:static top-0 left-0 h-full lg:h-auto w-4/5 max-w-sm lg:w-auto 
          bg-gray-800 lg:bg-transparent shadow-xl lg:shadow-none z-50 
          transition-transform duration-300 ease-in-out lg:transition-none
          flex flex-col lg:flex-row items-center`}
      >
        <ul
          className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5
            text-white font-medium text-md p-4 lg:p-0 w-full lg:w-auto mx-auto"
        >
          {navLinks.map((link) => (
            <li key={link.path} className="w-full lg:w-auto text-center">
              <Link
                to={link.path}
                className={`relative group inline-block py-2 w-full lg:w-auto whitespace-nowrap
                  ${
                    isActive(link.path)
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-white 
                    transition-all duration-300 origin-left
                    ${
                      isActive(link.path)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
  
  
  
  );
};

export default Header;