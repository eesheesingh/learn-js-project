// AvatarIcon.js
import React, { useState } from 'react';
import { avatar } from '../../assets';

const AvatarIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://github.com/eesheesingh" // Add link to GitHub profile
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 w-14 h-14 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Avatar Icon */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600">
        <img
          src={avatar}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
        {/* Tooltip */}
        {isHovered && (
          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-semibold text-white bg-black/80 dark:bg-white/80 dark:text-gray-800 rounded-md shadow-md whitespace-nowrap">
            Hi, There!
          </span>
        )}
      </div>
    </a>
  );
};

export default AvatarIcon;
