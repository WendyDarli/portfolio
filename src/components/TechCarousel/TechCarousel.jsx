import './TechCarousel.css';


function TechCarousel() {

    const items = [
        'React',' ','JavaScript',' ','JWT',' ','Node.js',' ',
        'Express',' ','Restful APIs', ' ' ,'ORMs',' ','Docker',' ','Caching',' '
    ];

    return(
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
    );
};

export default TechCarousel;