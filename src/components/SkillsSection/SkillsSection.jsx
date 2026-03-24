import './SkillsSection.css';

function SkillsSection(){

    return(
        <section id='skills' className='section-container'>      

                <p className='title'>Skills</p>
                <div className='skills-container'>
                    
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\javaScript.svg' />
                            <p>JavaScript</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\html.svg' />
                            <p>HTML</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\css.svg' />
                            <p>CSS</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\git.svg' />
                            <p>Git</p>
                        </div>                        
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\github.svg' />
                            <p>GitHub</p>
                        </div>                  
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\mySql.svg' />
                            <p>MySQL</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\mongoDb.svg' />
                            <p>MongoDB</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\postgreSql.svg' />
                            <p>PostgreSQL</p>
                        </div>   
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\nodeJs.svg' />
                            <p>Node.js</p>
                        </div>                        
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\express.svg' />
                            <p>Express</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src='src\assets\icons\react.svg' />
                            <p>React</p>
                        </div>
                                           
                </div>
        </section>

    );
};

export default SkillsSection;
