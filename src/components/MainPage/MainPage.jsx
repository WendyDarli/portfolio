import './MainPage.css';
import { useEffect, useRef } from 'react';

// Components
import Language from '../Language/Language';
import StarIcon from "../StarIcon";
import VerticalLink from '../VerticalLink/VerticalLink';
import runScramble from '../../utils/scrambleText';
import { useLanguage } from '../Language/languageContext';

// Images
import ellipse from '../../assets/images/ellipse.svg';
import unicornGirl from '../../assets/images/unicorn-girl.png';
import unicornGirlGlitch1 from '../../assets/images/unicorn-girl-glitch-1.png';
import unicornGirlGlitch2 from '../../assets/images/unicorn-girl-glitch-2.png';
import unicornGirlGlitch3 from '../../assets/images/unicorn-girl-glitch-3.png';

function MainPage(){

  const { t } = useLanguage();

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
      <section id='start' className='section-container main-page-background'>
        {/* mobile elements */}
        <div className='mobile-elements-container mobile-only'>
          <p className='code-text' > &lt;title&gt; </p>
          <h1 className='big-title'> {t('main-page.hello')},</h1>
          <h1 className='big-title'> {t('main-page.intro-name')} </h1>
          <h3 className='small-title'> {t('main-page.role')} </h3>
        </div>



        <img className='elipse desktop-only' src={ellipse} alt="background ellipse" />

        <StarIcon id={'star-1'} />
        <StarIcon id={'star-2'} />
        <StarIcon id={'star-3'} />
        <StarIcon id={'star-4'} />

        <div className='portfolio-text-container desktop-only'>
          <p className='portfolio-text'>PORTFOLIO</p>
        </div>

        {/* Unicorn girl images */}
        <img className='unicorn-girl desktop-only' src={unicornGirl} alt="unicorn" />
        <img className='unicorn-girl-glitch-1 unicorn-girl desktop-only' src={unicornGirlGlitch1} alt="" />
        <img className='unicorn-girl-glitch-2 unicorn-girl desktop-only' src={unicornGirlGlitch2} alt="" />
        <img className='unicorn-girl-glitch-3 unicorn-girl desktop-only' src={unicornGirlGlitch3} alt="" />

        <div className='development-text-container desktop-only'>
          <p className='development-text' ref={textRef1}></p>
          <p className='development-text' id='dev-text' ref={textRef2}></p>
        </div>

        <VerticalLink />
        <Language/>
        
      </section>
    );
};

export default MainPage;