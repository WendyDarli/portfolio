import './AboutSection.css';

function AboutSection() {


    return(
        <section id="about" className='section-container'>
            <div className='about-container'>
                <div className='about-text'>
                    <h1 className='title desktop-only' >About Me</h1>
                    <p className='code-text medium-text mobile-only'> &lt;about me&gt; </p>

                    <p>I’m a final-year Software Engineering student seeking a software development internship. 
                        I focus on web development, working with technologies such as React, JavaScript, Node.js, and RESTful APIs.

                        Most of my learning comes from building and iterating on projects, breaking things, fixing them, and improving the structure along the way. 
                        I’m particularly interested in backend systems, API design, and writing clean, maintainable code.
                    </p>
                </div>
                
            </div>
            




        </section>


    );
};

export default AboutSection;

