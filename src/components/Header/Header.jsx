import './Header.css';
import GithubIcon from '../GithubIcon';
function Header(){
    return(
        <div className='header-container'>
            <div className='header-sub-container'>
                <a>about</a>
                <a>projects</a>
                <a>skills</a>                
            </div>

            <div className='header-sub-container'>
                <a>contact</a>
                <a>resume</a>
                <a 
                    href='https://github.com/WendyDarli' 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <GithubIcon/>
                </a>
            </div>
        </div>
    )
}

export default Header;