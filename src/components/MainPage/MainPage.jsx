import './MainPage.css';
import { useEffect, useRef } from 'react';

// Components
import Language from '../Language/Language';
import StarIcon from "../StarIcon";
import VerticalLink from '../VerticalLink/VerticalLink';
import runScramble from '../../utils/scrambleText';

function MainPage(){

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  
  useEffect(() => {
      runScramble(textRef1, 'Back-end', 'xyz01!@#$%^&_+?><', 10, 8, 0);
      runScramble(textRef2, 'Development', 'xyz01!@#$%^&_+?><', 10, 8, 500); 


    const cleanup1 = runScramble(textRef1, 'Back-end', 'xyz01!@#$%^&_+?><', 10, 8, 0);
    const cleanup2 = runScramble(textRef2, 'Development', 'xyz01!@#$%^&_+?><', 10, 8, 500); 

    return () => {
      cleanup1();
      cleanup2();
    };
  }, []);


    return(
      <div className='main-page-background'>
        <img className='elipse' src='src/assets/images/ellipse.svg' alt="background ellipse" />

        <StarIcon id={'star-1'} />
        <StarIcon id={'star-2'} />
        <StarIcon id={'star-3'} />
        <StarIcon id={'star-4'} />

        <div className='portfolio-text-container'>
          <p className='portfolio-text'>PORTFOLIO</p>
        </div>

        {/* Unicorn girl images */}
        <img className='unicorn-girl' src='src/assets/images/unicorn-girl.png' alt="unicorn" />
        <img className='unicorn-girl-glitch-1 unicorn-girl' src='src/assets/images/unicorn-girl-glitch-1.png' alt="" />
        <img className='unicorn-girl-glitch-2 unicorn-girl' src='src/assets/images/unicorn-girl-glitch-2.png' alt="" />
        <img className='unicorn-girl-glitch-3 unicorn-girl' src='src/assets/images/unicorn-girl-glitch-3.png' alt="" />

        <div className='development-text-container'>
          <p className='development-text' ref={textRef1}></p>
          <p className='development-text' id='dev-text' ref={textRef2}></p>
        </div>

        <VerticalLink />
        <Language />
        
      </div>
    );
};

export default MainPage;