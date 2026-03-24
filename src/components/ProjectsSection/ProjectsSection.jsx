import './ProjectsSection.css';

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
            <h1 className='title'>Projects</h1>
            <div className='project-container'>


                <div className='project'>
                    <h2 className='project-title'>Project 1</h2>
                    <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. 
                        Sed at ligula a enim efficitur commodo. Curabitur ac odio id nisl convallis tincidunt. 
                        Maecenas in felis sed enim efficitur fermentum.</p>
                </div>
            </div>

        </section>

    );
};

export default ProjectsSection;

