import { useState, useEffect } from "react";
import logo from "../Footer/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MainHeader = () => {
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
    { path: "/", label: "Home" },
    { path: "/about", label: "AboutUs" },
    { path: "/products", label: "Product" },
    { path: "/contact", label: "Contact us" },
    {path:"/services",label:"Services"}
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm py-2" : "py-2"
      }`}
    >
      <div className="container  px-12 py-2 flex justify-between items-center">
        <div className="transition-transform duration-300 hover:scale-105">
          <Link to="/" aria-label="Home">
            <img
              src={logo}
              alt="Company Logo"
              className="h-12 lg:h-15 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none focus:ring-2 focus:black-pink-500 rounded-md p-2 hover:bg-gray-100 transition-colors duration-200"
          aria-expanded={isMenuOpen}
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Navigation Menu Overlay */}
        <div
          className={`${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } fixed lg:static top-0 left-0 h-full lg:h-auto w-4/5 max-w-sm lg:w-auto 
            bg-white lg:bg-transparent shadow-xl lg:shadow-none z-50 
            transition-transform duration-300 ease-in-out lg:transition-none
            flex flex-col lg:flex-row items-start lg:items-center`}
        >
          {/* Close Button */}
          <div className="w-full flex justify-between items-center p-4 lg:hidden">
            <div className="h-12">
              <img src={logo} alt="Company Logo" className="h-full" />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Menu Links */}
          <ul
            className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5
              text-gray-800 font-medium text-lg p-2 lg:p-0  w-full lg:w-auto mx-auto"
          >
            {navLinks.map((link) => (
              <li key={link.path} className="w-full lg:w-auto">
                <Link
                  to={link.path}
                  className={`relative group inline-block py-1 w-full lg:w-auto whitespace-nowrap
          ${
            isActive(link.path)
              ? "text-black-600 font-semibold"
              : "text-gray-700 hover:text-gray-900"
          }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-black-600 
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

export default MainHeader;