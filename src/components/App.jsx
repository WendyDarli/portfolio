import './App.css';
import { useState, useEffect } from 'react';

// Components
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import AboutSection from './AboutSection/AboutSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ContactSection from './ContactSection/ContactSection';
import SideBar from './SideBar/SideBar';

function App() {

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();

  }, []);


  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > window.innerHeight * 0.95);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <MainPage />
      
      {showHeader && <SideBar activeSection={activeSection}/>}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

    </>
  );
};

export default App;