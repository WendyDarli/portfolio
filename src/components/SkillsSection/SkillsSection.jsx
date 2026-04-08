import './SkillsSection.css';
import { useEffect, useRef } from 'react';


function SkillsSection(){

    const skills = [
        { name: 'JavaScript', icon: '/src/assets/icons/javaScript.svg' },
        { name: 'HTML', icon: '/src/assets/icons/html.svg' },
        { name: 'CSS', icon: '/src/assets/icons/css.svg' },
        { name: 'Git', icon: '/src/assets/icons/git.svg' },
        { name: 'GitHub', icon: '/src/assets/icons/github.svg' },
        { name: 'MySQL', icon: '/src/assets/icons/mySql.svg' },
        { name: 'MongoDB', icon: '/src/assets/icons/mongoDb.svg' },
        { name: 'PostgreSQL', icon: '/src/assets/icons/postgreSql.svg' },
        { name: 'Node.js', icon: '/src/assets/icons/nodeJs.svg' },
        { name: 'Express', icon: '/src/assets/icons/express.svg' },
        { name: 'React', icon: '/src/assets/icons/react.svg' },
    ];

    const elementsRef = useRef([]);

    // Observer to trigger animation when skill icons come into view
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
          
            }
        });
        });

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    return(
        <section id='skills' className='section-container'>      

                <p className='title'>Skills</p>
                <div className='skills-container'>
                    
                    {skills.map((skill, i) => (
                        <div key={i}
                            className='skill-hidden'
                            ref={(el) => (elementsRef.current[i] = el)}
                        >
                            <img className='skill-icon' src={skill.icon} alt={skill.name}/>
                            <p>{skill.name}</p>
                        </div>
                    ))}                                          
                </div>
        </section>

    );
};

export default SkillsSection;
