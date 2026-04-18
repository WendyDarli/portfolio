import './Header.css';
import GithubIcon from '../GithubIcon';
import { useState } from 'react';
import { useLanguage } from '../Language/languageContext';

function Header(){
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(

        <>
            <div className='mobile-header mobile-only'>
                <button 
                    className='overlay-bttn' 
                    aria-label="menu"
                    onClick={() => setIsMenuOpen(true)}>
                        
                    <img src='src\assets\icons\menu.svg'></img>

                </button>

                {isMenuOpen && (
                    <div className="overlay" onClick={() => setIsMenuOpen(false)}>
                    <nav className="overlay-nav" onClick={(e) => e.stopPropagation()}>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t('header.projects')}</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)}>skills</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</a>
                        <button className='close-overlay-nav' aria-label="close overlay nav" onClick={() => setIsMenuOpen(false)}> x </button>
                    </nav>
                    </div>
                )}
                <p> Wendy's portfolio</p>
                <a 
                    href='https://github.com/WendyDarli' 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <GithubIcon/>
                </a>
            </div>

            <div className='header-container desktop-only'>
                <div className='header-sub-container'>
                    <a href="#about"> {t('header.about')} </a>
                    <a href="#projects"> {t('header.projects')} </a>
                    <a href="#skills">skills</a>                
                </div>

                <div className='header-sub-container'>
                    <a href="#contact"> {t('header.contact')} </a>
                    <a href="#resume"> {t('header.resume')} </a>
                    <a aria-label="git hub"
                        href='https://github.com/WendyDarli' 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <GithubIcon/>
                    </a>
                </div>
            </div>
        </>

    )
}

export default Header;