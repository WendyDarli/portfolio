import './Header.css';
import GithubIcon from '../GithubIcon';
function Header(){
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
                    <a href="#about">about</a>
                    <a href="#projects">projects</a>
                    <a href="#skills">skills</a>                
                </div>

                <div className='header-sub-container'>
                    <a href="#contact">contact</a>
                    <a href="#resume">resume</a>
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