import './App.css';

// Components
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import AboutSection from './AboutSection/AboutSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ContactSection from './ContactSection/ContactSection';

function App() {

  return (
    <>
      <Header />
      <MainPage />
      
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

    </>
  );
};

export default App;