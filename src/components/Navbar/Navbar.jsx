// Navbar.js
import { useState, useEffect } from 'react';
import { FaTimes, FaJsSquare } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Define activeLink state
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active link based on current route
  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/") {
      setActiveLink("Home");
    } else if (currentPath.startsWith("/code-problems")) {
      setActiveLink("About");
    } else if (currentPath === "/your-code-editor") {
      setActiveLink("Services");
    } else {
      setActiveLink("");
    }
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-20 mt-4">
      <div className={`max-w-screen-xl md:mx-auto lg:mx-auto mx-3 flex items-center justify-between p-4 transition-all duration-500 ease-in-out rounded-lg ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-[#fff] shadow-lg"
      }`}>
        {/* Brand Name with Icon */}
        <Link to="/" className="flex items-center space-x-1 p-2 text-gray-900 md:text-2xl font-semibold bg-[#000] rounded-md">
          <FaJsSquare className="text-yellow-500" />
          <span className="secondary-font text-[#fff] text-xl">HUB.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center md:space-x-10 lg:space-x-20">
          {["Home", "About", "Services", "Contact"].map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : link === "About" ? "/code-problems" : link === "Services" ? "/your-code-editor" : "#"}
              onClick={() => setActiveLink(link)}
              className={`nav-link text-gray-900 transition duration-200 secondary-font ${
                activeLink === link ? "active" : ""
              }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Get Started Button */}
        <button className="hidden md:block bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 text-2xl focus:outline-none transition duration-300"
        >
          {isOpen ? <FaTimes /> : <HiMiniBars3BottomRight />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: { opacity: 1, scale: 1 },
            closed: { opacity: 0, scale: 0.8 }
          }}
          className="absolute top-14 right-4 w-48 bg-white shadow-lg rounded-lg py-4 px-4 z-10"
        >
          {["Home", "About", "Services", "Contact"].map((link) => (
            <motion.a
              key={link}
              href="#"
              onClick={() => setActiveLink(link)}
              className={`block text-gray-900 py-2 text-lg secondary-font ${
                activeLink === link ? "bg-blue-600 text-white rounded-md px-2" : ""
              }`}
            >
              {link}
            </motion.a>
          ))}
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
