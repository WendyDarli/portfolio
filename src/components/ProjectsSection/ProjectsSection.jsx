import './ProjectsSection.css';

function ProjectsSection(){

    const items = [
        'React','➢','JavaScript','➢','JWT','➢','Node.js','➢',
        'Express','➢','Restful APIs','➢','ORMs','➢','Docker','➢','Caching','➢'
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
            <p className='shadow-text'>Projects &lt;3</p>
        </section>

    );
};

export default ProjectsSection;

