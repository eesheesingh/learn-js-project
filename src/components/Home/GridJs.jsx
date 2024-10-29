// GridJs.js
import { motion } from "framer-motion";
import { useState } from "react";
import EasyCodeGrid from "../EasyCode/EasyCodeGrid";

const difficultyTabs = [
  { id: "easy", label: "Basic Code", shortLabel: "Basic" },
  { id: "normal", label: "Standard Code", shortLabel: "Standard" },
  { id: "hard", label: "Hard Code", shortLabel: "Hard" },
  { id: "complicated", label: "Complicated", shortLabel: "Complicated" },
];

function GridJs() {
  const [activeTab, setActiveTab] = useState(difficultyTabs[0].id);

  return (
    <>
    <div className="bg-white p-3 rounded-full shadow-md">
      {/* Tabs */}
      <div className="flex md:space-x-4 overflow-x-auto space-x-2">
        {difficultyTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative w-full md:w-full px-4 py-3 text-sm font-semibold transition-colors duration-300 rounded-full ${
              activeTab === tab.id
                ? "text-white bg-[#1A202C]"
                : "text-gray-700 hover:bg-[#E2E8F0]"
            }`}
            style={{
              WebkitTapHighlightColor: "transparent",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-[#342E37] mix-blend-difference rounded-full"
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
        {activeTab === "easy" && <EasyCodeGrid />} {/* Show EasyCodeGrid in Basic Code tab */}
        {activeTab !== "easy" && (
          <div className="text-center text-gray-600 text-lg mt-8">
            {activeTab === "normal" && <p>Standard Code Content Coming Soon!</p>}
            {activeTab === "hard" && <p>Hard Code Content Coming Soon!</p>}
            {activeTab === "complicated" && <p>Complicated Problems Content Coming Soon!</p>}
          </div>
        )}
      </div>
    </>
  );
}

export default GridJs;
