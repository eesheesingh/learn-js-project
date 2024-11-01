// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar/Navbar";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import EasyProblem from "./components/EasyCode/EasyProblem";
import ProblemsPage from "./components/Problems/ProblemsPage";
import Contact from "./components/Contact/Contact";
import ThemeToggle from "./components/LightDarkMode/ThemeToggle";
import AvatarIcon from "./components/MyAvatar/AvatarIcon"; // Import AvatarIcon

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar remains globally accessible */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-[4rem]">
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Hero />} />
          <Route path="/code-problems" element={<ProblemsPage />} />
          <Route path="/code-problems/:id" element={<EasyProblem />} />
          <Route path="/your-code-editor" element={<CodeEditor />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </div>

      {/* Theme toggle and avatar button */}
      <ThemeToggle />
      <AvatarIcon />
    </Router>
  );
};

export default App;
