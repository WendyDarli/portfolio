import './AboutSection.css';

function AboutSection(){

    return(
        <section id="about" className='section-container'>
            <div>
                <p className='shadow-text'>Know me better &lt;3</p>
            </div>

            <div className='about-container'>
                <img className='fading-line' src='src\assets\images\fading-line.png'></img>              
                <div className='vertical-about-container'>
                    <div className='small-about-contianer'>
                        <p className='dark-gray-text'>01</p>
                        <div>
                            <p className='start-text'>Education</p>
                            <p>Software Engineer</p>
                            <p className='end-text'>Jan 2023 - Dec 2026</p>
                        </div>

                    </div>
                  
                    <div className='small-about-contianer'>
                        <p className='dark-gray-text'>02</p>
                        <div>
                            <p className='start-text'>Role</p>
                            <p>Back-end Developer</p>
                        </div>                 
                    </div>

                    <div className='small-about-contianer'>
                        <p className='dark-gray-text'>03</p>
                        <div>
                            <p className='start-text'>Status</p>
                            <p>Avaliable for Hiring / Intership</p>
                        </div>                 
                    </div>

                    <div className='small-about-contianer'>
                        <p className='dark-gray-text'>04</p>
                        <div>
                            <p className='start-text'>Passion</p>
                            <p>Passionate about clean, maintainable coder</p>
                        </div>                 
                    </div>

                </div>
                <div className='main-about-container'>
                    <img className='top-corner-decoration' src='src\assets\images\corner-decoration.png'></img>
                    <img className='bottom-corner-decoration' src='src\assets\images\corner-decoration.png'></img>  
                    <p className='dark-gray-text'>Hi, Call me Wendy</p>
                    <p>I’m a final-year Computer Science student currently looking for a software development internship. Over the past few years I’ve been learning and building projects focused on web development, working with technologies such as React, JavaScript, Node.js, and RESTful APIs.</p>
                    <p>Most of what I’ve learned has come from building things, breaking them, and figuring out how to fix them. I enjoy the process of turning ideas into working interfaces and improving my code as I learn better patterns and tools.</p>
                    <p>Right now I’m focused on strengthening my practical development skills and gaining real-world experience by working with a team, contributing to projects, and continuing to grow as a developer.</p>
                </div>
            </div>


        </section>


    );
};

export default AboutSection;

