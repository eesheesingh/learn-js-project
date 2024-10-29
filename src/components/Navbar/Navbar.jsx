import { useState } from 'react';
import { FaBars, FaTimes, FaJsSquare } from 'react-icons/fa'; // Import JavaScript icon
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Framer Motion variants for menu animations
  const menuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <nav className="bg-[#fff] rounded-lg shadow-xl relative z-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Brand Name with Icon */}
        <Link to="/" className="flex items-center space-x-1 p-2 text-gray-900 md:text-2xl font-semibold bg-[#000] rounded-md">
          <FaJsSquare className="text-yellow-500" /> {/* JavaScript icon */}
          <span className="secondary-font text-[#fff] text-xl">HUB.</span>
        </Link>

        {/* Desktop Menu with Underline Animation */}
        <div className="hidden md:flex items-center md:space-x-10 lg:space-x-20 mx-auto">
          {["Home", "About", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setActiveLink(link)}
              className={`nav-link text-gray-900 transition duration-200 secondary-font ${
                activeLink === link ? "active" : ""
              }`}
            >
              {link}
            </a>
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
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Modal with Framer Motion */}
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="absolute top-14 right-4 w-48 bg-white shadow-lg rounded-lg py-4 px-4 z-10"
        >
          {["Home", "About", "Services", "Contact"].map((link) => (
            <motion.a
              key={link}
              href="#"
              onClick={() => setActiveLink(link)}
              whileHover={{ scale: 1.1, color: "#2563EB" }} // Hover animation with color and scale
              className={`block text-gray-900 py-2 text-lg transition duration-200 secondary-font ${
                activeLink === link ? "active bg-blue-600 text-white rounded-md px-2" : ""
              }`}
            >
              {link}
            </motion.a>
          ))}
          <button className="w-full mt-4 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
