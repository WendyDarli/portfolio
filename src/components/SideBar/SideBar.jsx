import './SideBar.css';

function SideBar({ activeSection }){
    return(
        <div className='side-header-container'>
            <a href='#contact' className={activeSection === 'contact' ? 'active' : ''}>contact</a>
            <a href='#projects' className={activeSection === 'projects' ? 'active' : ''}>projects</a>
            <a href='#skills' className={activeSection === 'skills' ? 'active' : ''}>skills</a>
            <a href='#about' className={activeSection === 'about' ? 'active' : ''}>about</a>
            <a href='#start' className={activeSection === 'start' ? 'active' : ''}>start</a>
        </div>
    );
}

export default SideBar;