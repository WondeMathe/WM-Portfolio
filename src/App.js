import { Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectCard />} />
        <Route path="/experience" element={<SkillCard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
