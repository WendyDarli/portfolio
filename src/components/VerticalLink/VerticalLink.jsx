import './VerticalLink.css';
import githubUnderlineLink from '../../assets/images/github_underline_link.png';

function VerticalLink(){
    return(
        <div className='vertical-github-container desktop-only'>
            <a className='github-link-text' href='https://github.com/WendyDarli'>https://github.com/WendyDarli</a>
            <img src={githubUnderlineLink} alt="github underline" />
        </div>
    );
};

export default VerticalLink;