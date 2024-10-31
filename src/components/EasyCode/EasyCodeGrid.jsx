import { easyCodeData } from "../../data/data";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const levelStyles = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const EasyCodeGrid = () => {
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/code-problems/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-3">
      <h1 className="text-3xl font-bold mb-8 text-center secondary-font">JavaScript Tutorials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 main-font">
        {easyCodeData.map((item, index) => (
          <motion.div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#342E37]">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center space-x-2 ${levelStyles[item.level]}`}
              >
                <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                {item.level}
              </span>
              <button className="bg-blue-100 text-blue-800 text-xs font-medium font-semibold px-4 py-2 rounded-full flex items-center justify-center">
                Theory
                <span className="pl-2">
                  <FaAngleRight />
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EasyCodeGrid;
