// CodeEditor.js
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { FaPlay, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const CodeEditor = () => {
  const [code, setCode] = useState("// Type your JavaScript code here");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const originalLog = console.log;
    console.log = (message) => {
      setOutput((prevOutput) => [...prevOutput, message]);
      originalLog(message);
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  const handleRunCode = () => {
    setOutput([]);
    try {
      const result = eval(code);
      setOutput((prevOutput) => [...prevOutput, result]);
    } catch (error) {
      setOutput((prevOutput) => [...prevOutput, `Error: ${error.message}`]);
    }
  };

  const handleClearOutput = () => {
    setOutput([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="p-3 mx-auto bg-white dark:bg-[#161b24] rounded-lg shadow-md border-4 border-gray-300 dark:border-[#ffffff34] mt-[8rem]"
    >
      <h1 className="md:text-[2.5rem] text-2xl font-bold mb-4 text-center text-gray-800 dark:text-[#F9F8F2] retro-title heading-font">
        Go Nuts🥜 With Your Coding ❣️
      </h1>

      {/* Toolbar with Run and Clear Buttons */}
      <div className="flex justify-between items-center mb-4 px-2">
        <div className="flex space-x-2">
          <button
            onClick={handleRunCode}
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-4 py-2 rounded-md shadow-md flex items-center space-x-2 font-mono"
          >
            <FaPlay /> <span>Run Code</span>
          </button>
          <button
            onClick={handleClearOutput}
            className="bg-[#b0bec5] dark:bg-[#444] hover:bg-[#90a4ae] text-gray-800 dark:text-gray-300 px-4 py-2 rounded-md shadow-md flex items-center space-x-2 font-mono"
          >
            <FaTimes /> <span>Clear Output</span>
          </button>
        </div>
      </div>

      {/* Editor and Output in Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Code Editor Section */}
        <div className="bg-[#f4f4f4] dark:bg-[#2e2e2e] rounded-lg shadow p-4 border-2 border-gray-300 dark:border-[#444] retro-border">
          <Editor
            height="60vh"
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            className="rounded-md font-mono"
          />
        </div>

        {/* Console Output Section */}
        <div className="bg-[#f4f4f4] dark:bg-[#2e2e2e] rounded-lg shadow p-4 border-2 border-gray-300 dark:border-[#444] retro-border">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Console Output</h3>
          <div className="bg-[#000000] dark:bg-[#1e1e1e] p-3 rounded-lg overflow-y-auto h-60 text-sm text-[#00ff00] font-mono shadow-inner retro-console">
            {output.length === 0 ? (
              <pre className="text-[#808080]">Output will appear here...</pre>
            ) : (
              output.map((line, index) => (
                <pre key={index} className="mb-1">{line}</pre>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;
