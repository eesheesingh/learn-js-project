// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GridJs from "./components/Home/GridJs";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar/Navbar";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import EasyProblem from "./components/EasyCode/EasyProblem";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Move Navbar outside of max-width container */}

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-[4rem]">
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Hero />} />
          <Route path="/code-problems" element={<GridJs />} />
          <Route path="/code-problems/:id" element={<EasyProblem />} />
          <Route path="/your-code-editor" element={<CodeEditor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
