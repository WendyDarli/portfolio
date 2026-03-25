import './ProjectsSection.css';
import {projectsCardInfo as cardInfo} from '.././../database/projectsCardInfo';

function ProjectsSection(){

    const items = [
        'React',' ','JavaScript',' ','JWT',' ','Node.js',' ',
        'Express',' ','Restful APIs', ' ' ,'ORMs',' ','Docker',' ','Caching',' '
    ];

    return(
        <section id='projects' className='section-container'>      
            <div className='tech-carousel'>
                <div className='track'>              
                    {[...items].map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
                <div className='track'>              
                    {[...items].map((text, index) => (
                        <p key={index + '#'}>{text}</p>
                    ))}
                </div>
            </div>


            <div className='projects-container'>
                <h1 className='title'>Projects</h1>
                {cardInfo.map((project) =>(
                    <div key={project.title} className='project'>
                        <img className='project-deco-card' src='src/assets/images/project-deco-card.png'/>
                        <div>
                            <img className='project-icon' src={project.icon} alt='project-icon'/>
                            <p className='project-title'>{project.title}</p>
                            <hr className='fade-line'/>
                        </div>

                        <p className='project-description'>{project.description}</p>
                        <div className='project-tags-container'>
                            {project.tags.map((tag, index) => (
                                <p key={index} className='project-tag'>{tag}</p>
                            ))}
                        </div>

                        <button className='open-project-button'>see more</button>
                    </div>
                ))}



            </div>

        </section>

    );
};

export default ProjectsSection;

