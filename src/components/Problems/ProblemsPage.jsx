import { useState } from 'react';
import { easyCodeData } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleRight, FaSearch } from "react-icons/fa";

const levelStyles = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const ExplorePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleItemClick = (id) => {
    navigate(`/code-problems/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter problems based on search query in both title and description
  const filteredProblems = easyCodeData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Highlight matched text
  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-200 dark:bg-yellow-600">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-3 mt-[8rem]">
      <h1 className="text-3xl font-bold mb-4 text-center secondary-font">Explore All JavaScript Problems</h1>

      {/* Search Bar */}
      <div className="relative w-full mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search your problems"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#161b24] dark:text-white focus:outline-none focus:border-blue-500 pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      </div>

      {/* No Results Message */}
      {filteredProblems.length === 0 && (
        <h2 className="text-center text-xl text-gray-700 dark:text-gray-300 mt-10">
          Oops! Don’t think we have that
        </h2>
      )}

      {/* Problems Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 main-font">
        {filteredProblems.map((item, index) => (
          <motion.div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className="bg-white dark:bg-[#161b24] border border-[#0000002f] dark:border-[#ffffff28] rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#342E37] dark:text-white">
                {getHighlightedText(item.title, searchQuery)}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {getHighlightedText(item.description, searchQuery)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center space-x-2 ${levelStyles[item.level]}`}
              >
                <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                {item.level}
              </span>
              <button className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white text-xs font-medium px-4 py-2 rounded-full flex items-center justify-center">
                View Problem
                <span className="pl-2"><FaAngleRight /></span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
