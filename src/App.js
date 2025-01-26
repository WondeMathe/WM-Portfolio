import { Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import pageNotFound from "./components/PageNotFound"
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectCard />} />
        <Route path="/experience" element={<SkillCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<pageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
