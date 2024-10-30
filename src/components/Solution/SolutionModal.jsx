import  { useState } from 'react';
import { FaTimes, FaCopy, FaCheck } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SolutionModal = ({ codeSnippetSolution, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippetSolution);
    setCopied(true);
    
    // Reset the icon back to copy after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>
        
        {/* Solution Code Snippet */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Solution</h2>
        <div className="relative">
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded flex items-center"
          >
            {copied ? <FaCheck size={16} className="text-green-600" /> : <FaCopy size={16} />}
          </button>
          <SyntaxHighlighter language="javascript" style={solarizedlight} customStyle={{
            borderRadius: "8px",
            padding: "1rem",
            backgroundColor: "#f9fafb",
            border: "1px solid #e2e8f0",
            maxHeight: "300px",
            overflowY: "auto"
          }}>
            {codeSnippetSolution}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
