import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../../i18n';

const LanguageContext = createContext();

function LanguageProvider({children}) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('preferredLanguage') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
    }, [language]);


    const t = (key) =>
        key.split(".").reduce((obj, k) => obj?.[k], translations[language]) || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t,  }}>
            {children}
        </LanguageContext.Provider>
    )
}

const useLanguage = () => useContext(LanguageContext);
export { LanguageProvider, useLanguage };