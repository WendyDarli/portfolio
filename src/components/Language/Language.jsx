import './Language.css';
import { useLanguage } from './languageContext';
function Language(){
    const { language, setLanguage, t } = useLanguage();

    return(
        <div className='language-container'>
            <p className='border-bottom-text'>A-01</p>
            <p className='white-bg-text'>{t('language.language')}</p>
            <div className='language-options-container'>
                <button 
                className={`language-bttn ${language === 'en' ? 'activeLanguage' : ''}`}
                onClick={() => {setLanguage('en')}}> 
                    ENGLISH 
                </button>

                <button 
                className={`language-bttn ${language === 'pt' ? 'activeLanguage' : ''}`} 
                onClick={() => {setLanguage('pt')}}> 
                    PORTUGUESE 
                </button>
            </div>
        </div>
    )
}

export default Language;