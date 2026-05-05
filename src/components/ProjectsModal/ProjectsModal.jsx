import './ProjectsModal.css';
import { useState, useEffect } from 'react';
import rightArrow from '../../assets/icons/right-arrow.svg';

// Database
import { projectsModalContent as projects } from '../../database/projectsModalContent';
import { useLanguage } from '../Language/languageContext';

function ProjectsModal({ activeId, isOpen, closeModal }) {
    const { t } = useLanguage();
    const projectModal = projects.find(obj => obj.id === activeId) || null;
    

    //this is for images carousel in modal
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setIndex(0);
    }, [activeId]);

    const prev = () => {
        setIndex((i) => (i - 1 + projectModal.media.length) % projectModal.media.length);
    };

    const next = () => {
        setIndex((i) => (i + 1) % projectModal.media.length);
    };

    const toggleOpen = () => setOpen((o) => !o);

    if (!isOpen || !projectModal) return null;
    const desc = t(projectModal.description);

    return (
        isOpen && projectModal && (
            <div className='project-modal'>
                <div className='modal-content-container'>
                    <button onClick={closeModal} id='close-modal'>x</button>

                    <div>
                        <div className='modal-title'>
                            <img src={projectModal.icon} className='project-icon-modal' alt={projectModal.name} />
                            <h1>{projectModal.name}</h1>
                        </div>

                        <div className="modal-media">
                            <button className="arrow left" onClick={prev}> &#10094; </button>
                            <div className="slides-container">
                            {projectModal.media[index]?.path?.endsWith(".mp4") ? (

                                <video
                                    src={projectModal.media[index]?.path}
                                    className="preview"
                                    onClick={toggleOpen}
                                    controls
                                />
                            ) : (
                                <img
                                    src={projectModal.media[index]?.path}
                                    className="preview"
                                    onClick={toggleOpen}
                                    alt=""
                                />
                            )}

                            {open && projectModal?.media?.[index] && (() => {
                            const media = projectModal.media[index];

                            return (
                                <div className="overlay" onClick={toggleOpen}>
                                {media.path?.endsWith(".mp4") ? (
                                    <video src={media.path} controls />
                                ) : (
                                    <img src={media.path} alt="" />
                                )}
                                </div>
                            );
                            })()}
                            </div>
                            <button className="arrow right" onClick={next}> &#10095; </button>
                        </div>
                    </div>

                    <div className='modal-info-container'>
                        {desc.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                        <div className='modal-tags-contianer'>
                            {projectModal.techTags.map((tag, index) => (
                                <p key={index} className='project-tag'>{tag}</p>
                            ))}
                        </div>
                        <div className='modal-bttns-container'>
                            <button className="modal-bttn"
                                onClick={() => window.open(projectModal.gitHubLink, "_blank")}
                                disabled={!projectModal.isOngithub}>

                                <span className="modal-bttn-content">
                                    {t('projects-modal.buttons.github')}
                                    <img src={rightArrow} className="modal-bttn-arrow" alt="" />
                                </span>
                            </button>

                            <button className="modal-bttn"
                                onClick={() => window.open(projectModal.deployedLink, "_blank")}
                                disabled={!projectModal.isDeployed}>

                                <span className="modal-bttn-content">
                                    {t('projects-modal.buttons.deploy')}
                                    <img src={rightArrow} className="modal-bttn-arrow" alt="" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
);
};

export default ProjectsModal;