import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../Footer/logo.png"; // Ensure the correct path to your logo

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
    { path: "/services", label: "SERVICES" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT US" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* MiddleHeader Section (Always Visible on Desktop) */}
      <div className="bg-white py-4 shadow-md hidden lg:block">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left px-4 lg:px-8">
          {/* Logo & Address Section */}
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <Link to="/"><img src={logo} alt="Company Logo" className="h-12 w-auto" />
</Link>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-600 text-xl" />
              <div className="flex flex-col">
                <p className="text-gray-600"> Ghaziabad Add:- Plot No.21, Prem Enclave, </p>
                <p className="text-gray-600">Opp, D.P.S, Near Kailash Hospital, Meerut Road, (U.P.) INDIA</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-gray-600 font-medium">Get in Touch</p>
                <p className="text-gray-800 font-semibold">
                  +9440406200, +9849059508
                </p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600 text-xl" />
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-gray-600 font-medium">E-mail Us</p>
                <p className="text-gray-800 font-semibold">rsindustries@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <header
        className={`w-full bg-gray-800 text-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-sm py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto my-1 px-4 flex justify-center items-center relative">
          {/* 🏆 Logo (Only Visible in Mobile View) */}
          <div className="block lg:hidden absolute left-4">
          <Link to="/"><img src={logo} alt="Company Logo" className="h-12 w-auto" />
          </Link>
          </div>

          {/* 📱 Hamburger Menu Button (Right Corner) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 hover:bg-gray-700 transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>

          {/* 🌍 Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            } fixed lg:static top-0 left-0 h-full lg:h-auto w-4/5 max-w-sm lg:w-auto 
              bg-gray-800 lg:bg-transparent shadow-xl lg:shadow-none z-50 
              transition-transform duration-300 ease-in-out lg:transition-none
              flex flex-col lg:flex-row items-center lg:justify-center`}
          >
            {/* 🏆 MiddleHeader Content (Only Visible in Mobile Menu) */}
            {isMenuOpen && (
              <div className="w-full p-4 bg-gray-700 lg:hidden">
                <div className="flex flex-col space-y-4">
                  {/* 🏠 Address Section */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-red-600 text-xl" />
                      <div className="flex flex-col text-center">
                        <p className="text-white">Ghaziabad Add:- Plot No.21, Prem Enclave,</p>
                        <p className="text-white">Opp, D.P.S, Near Kailash Hospital, Meerut Road, (U.P.) INDIA</p>
                      </div>
                    </div>
                  </div>

                  {/* 📞 Contact Section */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center space-x-2">
                      <FaPhoneAlt className="text-green-600 text-xl" />
                      <div className="flex flex-col items-center">
                        <p className="text-gray-300 font-medium">Get in Touch</p>
                        <p className="text-gray-100 font-semibold">
                          +9440406200, +9849059508
                        </p>
                      </div>
                    </div>

                    {/* ✉️ Email Section */}
                    <div className="flex items-center space-x-2">
                      <FaEnvelope className="text-blue-600 text-xl" />
                      <div className="flex flex-col items-center">
                        <p className="text-gray-300 font-medium">E-mail Us</p>
                        <p className="text-gray-100 font-semibold">rsindustries@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 🌍 Navigation Links */}
            <ul
              className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-8
    text-white font-medium text-md p-4 lg:p-0 w-full lg:w-auto 
    justify-center items-center mx-auto"
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
    </>
  );
};

export default Header;