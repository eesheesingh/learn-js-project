// ThemeToggle.js
import { useState, useEffect } from 'react';
import { MdLightMode, MdNightlight } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 z-50 
                 backdrop-blur-lg bg-white/30 dark:bg-black/30
                 border border-gray-300 dark:border-gray-700
                 text-gray-800 dark:text-gray-200"
    >
      <div
        className={`transition-transform duration-300 ease-in-out ${
          theme === 'light' ? 'hover:rotate-180' : 'hover:rotate-360'
        }`}
      >
        {theme === 'light' ? <MdNightlight size={30} /> : <MdLightMode size={30} />}
      </div>
    </button>
  );
};

export default ThemeToggle;
