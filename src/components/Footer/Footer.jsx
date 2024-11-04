// Footer.js

const Footer = () => {
  return (
    <footer className="mt-10 py-4 text-center text-gray-700 dark:text-gray-300 heading-font">
      <hr className="border-gray-300 dark:border-gray-600 mb-4 mx-4" />
      <p className="text-lg font-semibold">
        Made with ❣️ by 
        <a 
          href="https://www.instagram.com/eesheepal/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative inline-block ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-500"
        >
          @eesheepal
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 transform hover:w-full"></span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
