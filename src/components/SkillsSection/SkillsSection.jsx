import './SkillsSection.css';

function SkillsSection(){

    return(
        <section id='skills' className='section-container'>      

                <p className='title'>Skills</p>
                <div className='skills-container'>
                    
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\javaScript.svg' alt='javascript'/>
                            <p>JavaScript</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\html.svg' alt='html'/>
                            <p>HTML</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\css.svg' alt='css'/>
                            <p>CSS</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\git.svg' alt='git'/>
                            <p>Git</p>
                        </div>                        
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\github.svg' alt='github'/>
                            <p>GitHub</p>
                        </div>                  
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\mySql.svg' alt='mysql'/>
                            <p>MySQL</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\mongoDb.svg' alt='mongodb'/>
                            <p>MongoDB</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\postgreSql.svg' alt='postgresql'/>
                            <p>PostgreSQL</p>
                        </div>   
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\nodeJs.svg' alt='nodejs'/>
                            <p>Node.js</p>
                        </div>                        
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\express.svg' alt='express'/>
                            <p>Express</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\react.svg' alt='react'/>
                            <p>React</p>
                        </div>
                                           
                </div>
        </section>

    );
};

export default SkillsSection;
