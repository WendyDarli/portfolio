import { useLanguage } from '../Language/languageContext';
import './SideBar.css';

function SideBar({ activeSection }){
    const { t } = useLanguage();

    return(
        <div className='side-header-container'>
            <a href='#contact' className={activeSection === 'contact' ? 'active' : ''}>{t('header.contact')}</a>
            <a href='#projects' className={activeSection === 'projects' ? 'active' : ''}>{t('header.projects')}</a>
            <a href='#skills' className={activeSection === 'skills' ? 'active' : ''}>skills</a>
            <a href='#about' className={activeSection === 'about' ? 'active' : ''}>{t('header.about')}</a>
            <a href='#start' className={activeSection === 'start' ? 'active' : ''}>{t('header.start')}</a>
        </div>
    );
}

export default SideBar;