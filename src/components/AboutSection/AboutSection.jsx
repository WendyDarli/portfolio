import './AboutSection.css';
import { useLanguage } from '../Language/languageContext';

function AboutSection() {
    const { t } = useLanguage();

    return(
        <section id="about" className='section-container'>
            <div className='about-container'>
                <div className='about-text'>
                    <h1 className='title desktop-only' > {t('about.about-me')} </h1>
                    <p className='code-text medium-text mobile-only'> &lt;{t('about.about_me')}&gt; </p>

                    <p className='about-desc'> {t('about.desc')} </p>
                </div>
            </div>
        </section>


    );
};

export default AboutSection;

