import './SkillsSection.css';
import { useEffect, useRef } from 'react';

// Skill icons
import javaScriptIcon from '../../assets/icons/javaScript.svg';
import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css.svg';
import gitIcon from '../../assets/icons/git.svg';
import githubIcon from '../../assets/icons/github.svg';
import mySqlIcon from '../../assets/icons/mySql.svg';
import mongoDBIcon from '../../assets/icons/mongoDB.svg';
import postgreSqlIcon from '../../assets/icons/postgreSql.svg';
import nodeJsIcon from '../../assets/icons/nodeJs.svg';
import expressIcon from '../../assets/icons/express.svg';
import reactIcon from '../../assets/icons/react.svg';


function SkillsSection(){

    const skills = [
        { name: 'JavaScript', icon: javaScriptIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'Git', icon: gitIcon },
        { name: 'GitHub', icon: githubIcon },
        { name: 'MySQL', icon: mySqlIcon },
        { name: 'MongoDB', icon: mongoDBIcon },
        { name: 'PostgreSQL', icon: postgreSqlIcon },
        { name: 'Node.js', icon: nodeJsIcon },
        { name: 'Express', icon: expressIcon },
        { name: 'React', icon: reactIcon },
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
