// EasyProblem.js
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { easyCodeData } from "../../data/data";
import Editor from "@monaco-editor/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const EasyProblem = () => {
  const { id } = useParams();
  const problem = easyCodeData.find((q) => q.id === id);

  const [code, setCode] = useState(problem?.codeSnippetSolution || "No Solution was provided");
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
      // Run code within eval and capture output
      eval(code);
    } catch (error) {
      setOutput((prevOutput) => [...prevOutput, `Error: ${error.message}`]);
    }
  };

  if (!problem) return <p className="text-center">Problem not found!</p>;

  return (
    <div className="p-6 mt-6 bg-[#f7f7f7] border-[2px] border-[#00000026] rounded-2xl shadow-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">{problem.title}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        
        {/* Main Problem Content */}
        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200 overflow-y-auto max-h-[70vh]">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Problem Description</h2>
          <p className="text-gray-600 mb-4">{problem.question}</p>
          
          <h3 className="text-md font-semibold text-gray-700">Example</h3>
          <pre className="text-gray-600 bg-gray-100 p-4 rounded-lg whitespace-pre-wrap mb-4">
            {problem.example}
          </pre>
          
          <SyntaxHighlighter language="javascript" style={solarizedlight} customStyle={{
            borderRadius: "8px",
            padding: "1rem",
            backgroundColor: "#f9fafb",
            border: "1px solid #e2e8f0",
          }}>
            {problem.codeSnippetExample}
          </SyntaxHighlighter>
        </div>

        {/* Right Containers */}
        <div className="grid grid-rows-2 gap-6">
          
          {/* Code Editor */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Code Editor</h2>
            <Editor
              height="30vh"
              language="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              className="rounded-lg"
            />
            <button
              onClick={handleRunCode}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
            >
              Run Code
            </button>
          </div>

          {/* Console Output */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Console Output</h2>
            <div className="bg-gray-100 p-3 rounded-lg overflow-y-auto h-40 text-sm text-gray-800 font-mono">
              {output.length === 0 ? (
                <pre className="text-gray-400">Output will appear here...</pre>
              ) : (
                output.map((line, index) => (
                  <pre key={index} className="mb-1">{line}</pre>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyProblem;
