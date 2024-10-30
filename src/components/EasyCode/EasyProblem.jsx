import { useParams } from "react-router-dom";
import { useState } from "react";
import { easyCodeData } from "../../data/data";
import Editor from "@monaco-editor/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaPlay } from "react-icons/fa";
import { SiAnswer } from "react-icons/si";
import SolutionModal from '../Solution/SolutionModal';

const EasyProblem = () => {
  const { id } = useParams();
  const problem = easyCodeData.find((q) => q.id === id);

  const [code, setCode] = useState("//answer the question with your code");
  const [output, setOutput] = useState([]);
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);

  const handleRunCode = () => {
    setOutput([]);
    const logCapture = [];
    const customConsole = {
      log: (...args) => {
        const formattedArgs = args.map(arg =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        );
        logCapture.push(formattedArgs.join(" "));
      },
    };

    try {
      new Function('console', code)(customConsole);
      setOutput(logCapture);
    } catch (error) {
      setOutput([`Error: ${error.message}`]);
    }
  };

  const toggleSolutionModal = () => {
    setIsSolutionModalOpen(!isSolutionModalOpen);
  };

  if (!problem) return <p className="text-center">Problem not found!</p>;

  return (
    <>
      {isSolutionModalOpen && (
        <SolutionModal
          codeSnippetSolution={problem.codeSnippetSolution}
          onClose={toggleSolutionModal}
        />
      )}

      <div className="p-6 mt-[7rem] bg-[#f7f7f7] border-[2px] border-[#00000026] rounded-2xl shadow-lg relative">
        {/* Theory Badge */}
        {problem.theory && (
          <span className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
            Theory
          </span>
        )}

        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">{problem.title}</h1>

        {/* Explanation Section */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-700">{problem.description} Explanation</h2>
          <p className="text-gray-600">{problem.explanation}</p>
        </div>
      </div>

      {/* Problem and Code Editor Section */}
      <div className="p-6 mt-6 bg-[#f7f7f7] border-[2px] border-[#00000026] rounded-2xl shadow-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Code Out &#60;<span className="text-green-500">/</span>&#62;	</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Main Problem Content */}
          <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200 overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Problem Description</h2>
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${problem.level === 'Easy' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {problem.level}
              </span>
            </div>
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
              <div className="flex justify-between items-center pb-3">
                <h2 className="text-xl font-semibold text-gray-700">Code Editor</h2>
                <div className="flex space-x-4">
                  <button
                    onClick={handleRunCode}
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-4 py-2 rounded shadow"
                    title="Run Code"
                  >
                    <FaPlay />
                  </button>
                  <button
                    onClick={toggleSolutionModal}
                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-all duration-200 text-white px-4 py-2 rounded shadow"
                    title="See Answer"
                  >
                    <SiAnswer />
                  </button>
                </div>
              </div>
              <Editor
                height="30vh"
                language="javascript"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || "")}
                className="rounded-lg"
              />
            </div>

            {/* Console Output */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200 overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Console Output</h2>
              <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-800 font-mono">
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
    </>
  );
};

export default EasyProblem;
