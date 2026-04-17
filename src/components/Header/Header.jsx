import './Header.css';
import GithubIcon from '../GithubIcon';
import { useLanguage } from '../Language/languageContext';

function Header(){
    const { t } = useLanguage();
    return(

        <>
            <div className='mobile-header mobile-only'>
                <button>menu</button>
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
                    <a 
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