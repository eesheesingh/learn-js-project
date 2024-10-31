import { useEffect } from "react";
import { avatar } from "../../assets";
import { motion } from "framer-motion";
import GridJs from "./GridJs";

const Hero = () => {
  useEffect(() => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <section className="py-8">
        <div className="max-w-5xl mx-auto text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-[6rem] font-extrabold mb-4 leading-tight heading-font">
            Your Super Smart <br />
            <motion.span
              initial={{ rotate: 4 }} // Start rotation from 3 degrees
              animate={{ rotate: -2 }} // Animate to -3 degrees
              transition={{
                repeat: Infinity, // Repeat animation infinitely
                repeatType: "reverse", // Reverse direction to create back-and-forth motion
                duration: 0.6, // Duration of each rotation
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              className="bg-[#342E37] text-white md:text-[5rem] text-[2rem] px-10 py-1 rounded-full inline-block border-[2px] border-dashed border-[#FFD700]"
            >
              KNOWLEDGE
            </motion.span>
            Hub
          </h1>

          <p className="text-md md:text-xl mb-8 secondary-font">
            Discover the world of JavaScript with high-quality resources, insightful tutorials, and engaging projects tailored for all skill levels.
          </p>

          {/* Button with Image Inside and Framer Motion Hover Animation */}
          <a
            href="https://portfolio-2024-eeshee-singh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              initial={{ rotate: 4 }} // Initial slight rotation
              whileHover={{
                scale: 1.1,
                rotate: 0, // Rotate back to 0 on hover
                borderColor: "#FFD700", // Yellow border on hover
                backgroundColor: "#000",
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              className="animated-button bg-[#342E37] text-white font-semibold py-3 px-4 rounded-full shadow-lg inline-flex items-center space-x-3 border-2 border-transparent"
            >
              <img
                src={avatar} // Replace with actual image URL
                alt="Eeshee"
                className="w-10 h-10 rounded-full bg-[#F9F8F2]" // Image styling
              />
              <span className="main-font font-light">By Eeshee</span>
            </motion.button>
          </a>
        </div>
      </section>
      <div>
        <GridJs />
      </div>
    </motion.div>
  );
};

export default Hero;
