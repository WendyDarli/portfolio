import { useLanguage } from '../Language/languageContext';
import './ContactSection.css';

function ContactSection(){
    const { t } = useLanguage();

    const subject = encodeURIComponent("Opportunity");
    const body = encodeURIComponent(
        "Hi, I came across your portfolio and wanted to reach out. I'd love to connect!"
    );
    
    const link = `https://mail.google.com/mail/?view=cm&fs=1&to=w.end.darli@gmail.com&su=${subject}&body=${body}`;

    return(
        <section id='contact' className='section-container'>
            <div>
                <p className='title'>{t('contact.contact')}</p>
                <p id='end-text'>A-01</p>
                <div className='contact-info-contianer'>
                    <div className='contact-text'>
                        <p>{t('contact.desc')}
                        </p>                 
                    </div>
                    <div>
                        <a
                        href={link}
                        target="_blank">
                            <img className="contact-icon" src="/src/assets/icons/email.svg" alt="email" />
                        </a>
                        <a href="https://www.linkedin.com/in/wendy-v-a558a32b1/" target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src='/src/assets/icons/linkedin.svg' alt='linkedin'/>
                        </a>
                        <a href="https://wa.me/your-phonenumber" target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src='/src/assets/icons/whatsapp.svg' alt='whatsapp'/>
                        </a>
                    </div>                    
                </div>               

            </div>
        </section>


    );
};

export default ContactSection;

