import './ProjectsSection.css';

// Database
import { projectsCardInfo as cardInfo } from '.././../database/projectsCardInfo';
import { projectsModalContent as projects } from '../../database/projectsModalContent';

// Hooks
import useModal from '../../hooks/useModal';

// Components
import TechCarousel from '../TechCarousel/TechCarousel';
import ProjectsModal from '../ProjectsModal/ProjectsModal';
import { useLanguage } from '../Language/languageContext';


function ProjectsSection(){
    const { t } = useLanguage();
    const { isOpen, openModal, closeModal, activeId } = useModal();

    return(
        <section id='projects' className='section-container'>      

            <TechCarousel />

            <div className='projects-container'>
                <h1 className='title'>{t('projects-modal.projects')}</h1>
                {cardInfo.map((project) => (
                    <div key={project.title} className='project'>
                        <img className='project-deco-card' src='src/assets/images/project-deco-card.png'/>
                        <div>
                            <img className='project-icon' src={project.icon} alt='project-icon'/>
                            <p className='project-title'>{project.title}</p>
                            <hr className='fade-line'/>
                        </div>

                        <p className='project-description'>{t(project.description)}</p>
                        <div className='project-tags-container'>
                            {project.tags.map((tag, index) => (
                                <p key={index} className='project-tag'>{tag}</p>
                            ))}
                        </div>

                        <button className='open-project-button' 
                            onClick={() => openModal(project.id)}
                        > {t('projects-card.more')} </button>
                    </div>
                ))}


            </div>

            <ProjectsModal isOpen={isOpen} closeModal={closeModal} activeId={activeId} />

        </section>

    );
};

export default ProjectsSection;

