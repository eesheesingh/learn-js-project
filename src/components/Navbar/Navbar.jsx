import { useState, useEffect } from 'react';
import { FaTimes, FaJsSquare, FaGithub } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
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

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/") {
      setActiveLink("Home");
    } else if (currentPath.startsWith("/code-problems")) {
      setActiveLink("Explore");
    } else if (currentPath === "/your-code-editor") {
      setActiveLink("PlayGround");
    } else if (currentPath === "/contact-me") {
      setActiveLink("Contact");
    } else {
      setActiveLink("");
    }
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-20 mt-4">
      <div className={`max-w-screen-xl mx-auto p-4 flex items-center justify-between transition-all duration-500 ease-in-out rounded-lg ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-[#fff] shadow-lg"
      }`}>
        {/* Brand Name with Icon */}
        <Link to="/" className="flex items-center space-x-1 p-2 text-gray-900 md:text-2xl font-semibold bg-[#000] rounded-md">
          <FaJsSquare className="text-yellow-500" />
          <span className="secondary-font text-[#fff] text-xl">HUB.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center md:space-x-10 lg:space-x-20">
          {["Home", "Explore", "PlayGround", "Contact"].map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : link === "Explore" ? "/code-problems" : link === "PlayGround" ? "/your-code-editor" : link === "Contact" ? "/contact-me" : "#"}
              onClick={() => setActiveLink(link)}
              className={`nav-link text-gray-900 transition duration-200 secondary-font ${
                activeLink === link ? "active" : ""
              }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* GitHub Button with Tooltip */}
        <div className="relative hidden md:flex items-center">
          <a
            href="https://github.com/eesheesingh" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center bg-gray-900 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-700"
          >
            <FaGithub className="mr-2" />
            <span>GitHub</span>
          </a>
          {/* Tooltip */}
          {isHovered && (
            <span className="absolute top-full mt-1 px-3 py-1 bg-black text-white text-xs rounded-md shadow-lg">
              My Projects !!!
            </span>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 text-2xl focus:outline-none transition duration-300"
        >
          {isOpen ? <FaTimes /> : <HiMiniBars3BottomRight />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-20 flex items-center justify-center">
          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-3/4 max-w-xs rounded-lg p-6 space-y-6"
          >
            {["Home", "Explore", "PlayGround", "Contact"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : link === "Explore" ? "/code-problems" : link === "PlayGround" ? "/your-code-editor" : link === "Contact" ? "/contact-me" : "#"}
                onClick={() => {
                  setActiveLink(link);
                  setIsOpen(false);
                }}
                className={`block text-gray-900 py-2 text-lg font-medium text-center rounded-md transition-colors duration-200 ${
                  activeLink === link ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`}
              >
                {link}
              </Link>
            ))}
            {/* GitHub Link */}
            <a
              href="https://github.com/eesheesingh" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900 text-white py-2 rounded-md text-center font-medium hover:bg-gray-700"
            >
              <FaGithub className="inline-block mr-2" />
              GitHub
            </a>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
