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
      <div className={`max-w-screen-xl md:mx-auto lg:mx-auto mx-3 flex items-center justify-between p-4 transition-all duration-500 ease-in-out rounded-lg ${
        isScrolled 
          ? "bg-white/10 dark:bg-black/40 backdrop-blur-md shadow-lg border dark:border-[#f9f8f248] border-[#0000003e]"
          : "bg-[#fff] dark:bg-black/40 backdrop-blur-md shadow-lg "
      }`}>
        {/* Brand Name with Icon */}
        <Link to="/" className="flex items-center space-x-1 p-2 text-gray-900 dark:text-[#F9F8F2] md:text-2xl font-semibold bg-[#000] rounded-md">
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
              className={`nav-link text-gray-900 dark:text-[#F9F8F2] transition duration-200 secondary-font ${
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
            <span>
              Github
            </span>
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
          className="md:hidden text-gray-900 dark:text-[#F9F8F2] text-2xl focus:outline-none transition duration-300"
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
          className="absolute top-14 right-4 w-48 bg-white dark:bg-black/60 backdrop-blur-md shadow-lg rounded-lg py-4 px-4 z-10"
        >
          {["Home", "Explore", "PlayGround", "Contact"].map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : link === "Explore" ? "/code-problems" : link === "PlayGround" ? "/your-code-editor" : link === "Contact" ? "/contact-me" : "#"}
              onClick={() => {
                setActiveLink(link);
                setIsOpen(false); // Close the menu when a link is clicked
              }}
              className={`block text-gray-900 dark:text-[#F9F8F2] py-2 text-lg secondary-font ${
                activeLink === link ? "bg-blue-600 text-white rounded-md px-2" : ""
              }`}
            >
              {link}
            </Link>
          ))}
          <a
            href="https://github.com/eesheesingh" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-gray-700"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
