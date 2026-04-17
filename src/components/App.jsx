import './App.css';
import { useState, useEffect, useRef } from 'react';

// Components
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import AboutSection from './AboutSection/AboutSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ContactSection from './ContactSection/ContactSection';
import SideBar from './SideBar/SideBar';


function App() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  //effect to hightlight active section in sidebar
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

  //effect to scroll 
  // Important otherwise sidebar wont show up
useEffect(() => {
  const container = containerRef.current;

  const handleScroll = () => {
    setShowHeader(
      container.scrollTop > container.clientHeight * 0.95
    );
  };

  container.addEventListener("scroll", handleScroll);

  return () => container.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      <div id='app' className='main-container app hidden' ref={containerRef}>
        <Header />
        <MainPage />
        
        {showHeader && <SideBar activeSection={activeSection}/>}
        <AboutSection isActive={activeSection === 'about'}/>
        <SkillsSection />
        <ProjectsSection />

        <ContactSection />
        <footer>© 2026  Made with ♡ by Wendy Darli.</footer>
      </div>

    </>
  );
};

export default App;