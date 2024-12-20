import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EasyCodeGrid from "../EasyCode/EasyCodeGrid";

// Tab Data
const difficultyTabs = [
  { id: "easy", label: "Basic Code", shortLabel: "Basic" },
  { id: "normal", label: "Standard Code", shortLabel: "Standard" },
  { id: "hard", label: "Hard Code", shortLabel: "Hard" },
  { id: "complicated", label: "Complicated", shortLabel: "Complicated" },
];

function GridJs() {
  // Initialize activeTab from localStorage or default to 'easy'
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "easy");

  // Update localStorage whenever activeTab changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <>
      <div className="bg-white dark:bg-[#000] dark:backdrop-blur-lg	 p-3 rounded-full shadow-md mt-10">
        {/* Tabs */}
        <div className="flex md:space-x-4 overflow-x-auto space-x-2">
          {difficultyTabs.map((tab) => (
            <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative w-full md:w-full px-4 py-3 text-sm font-semibold transition-colors duration-300 rounded-full ${
              activeTab === tab.id
                ? "text-white bg-[#1A202C] dark:bg-white/20 dark:backdrop-blur-md" // Glassy white bg in dark mode
                : "text-gray-700 dark:text-gray-300 hover:bg-[#E2E8F0] dark:hover:bg-gray-700/30"
            }`}
            style={{
              WebkitTapHighlightColor: "transparent",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-[#342E37] dark:bg-white/10 mix-blend-difference rounded-full backdrop-blur-lg" // Adjust background in dark mode
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">
              <span className="hidden md:inline">{tab.label}</span>
              <span className="md:hidden">{tab.shortLabel}</span>
            </span>
          </button>
          
          ))}
        </div>
      </div>

      {/* Conditional Content Rendering */}
      <div className="mt-6">
        {activeTab === "easy" && <EasyCodeGrid level="Easy" />}
        {activeTab === "normal" && <EasyCodeGrid level="Medium" />}
        {activeTab !== "easy" && activeTab !== "normal" && (
          <div className="text-center text-gray-600 text-lg mt-8">
            {activeTab === "hard" && <p>Hard Code Content Coming Soon!</p>}
            {activeTab === "complicated" && (
              <p>Complicated Problems Content Coming Soon!</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default GridJs;
