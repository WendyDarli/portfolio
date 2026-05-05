import { useLanguage } from '../Language/languageContext';
import './ContactSection.css';
import emailIcon from '../../assets/icons/email.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

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
                            <img className="contact-icon" src={emailIcon} alt="email" />
                        </a>
                        <a href="https://www.linkedin.com/in/wendy-d-a558a32b1/" target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src={linkedinIcon} alt='linkedin'/>
                        </a>
                        <a href="https://wa.me/5541999889732" target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src={whatsappIcon} alt='whatsapp'/>
                        </a>
                    </div>                    
                </div>               

            </div>
        </section>


    );
};

export default ContactSection;

