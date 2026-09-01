import {useState} from 'react';
import {Modal} from 'react-bootstrap';
import parse from 'html-react-parser';
import LightBoxWrapper from '../../components/light-box/LightBoxWrapper';
import {data} from './project-data';

interface ProjectDetailProps {
    show: boolean;
    card: string;
    closeAction: () => void;
}

export default function ProjectDetail({show, card, closeAction}: ProjectDetailProps) {
    const [showLightBox, setShowLightBox] = useState(false);
    const [srcIndex, setSrcIndex] = useState(0);
    const detail = data[card];

    if (!detail) return null;

    const images = detail.imgs ?? [];
    const videos = detail.vids ?? [];
    const mobileVideos = detail.mobileVids ?? [];
    const hasMedia = images.length + videos.length + mobileVideos.length > 0;

    const openLightbox = (index: number) => {
        setSrcIndex(index);
        setShowLightBox(true);
    };

    return (
        <Modal show={show} onHide={closeAction} className="case-modal" fullscreen animation>
            <Modal.Header className="case-nav">
                <button className="case-close" type="button" onClick={closeAction} aria-label="Close case study">
                    <span aria-hidden="true">←</span> Back to work
                </button>
                <span>Case study · {String(card).padStart(2, '0')}</span>
            </Modal.Header>

            <Modal.Body className="case-body">
                <header className="case-hero">
                    <div className="page-width case-hero-inner">
                        <p className="eyebrow light">Selected work</p>
                        <h1>{detail.cardTitle}</h1>
                        <div className="case-summary">
                            <p>{parse(detail.cardText)}</p>
                            <div className="case-actions">
                                {detail.buttonCode && <a className="button button-primary" href={detail.buttonCode} target="_blank" rel="noopener noreferrer">View code ↗</a>}
                                {detail.buttonWebsite && <a className="text-link light" href={detail.buttonWebsite} target="_blank" rel="noopener noreferrer">Visit website <span>↗</span></a>}
                                {detail.buttonAffiliate && <a className="text-link light" href={detail.buttonAffiliate} target="_blank" rel="noopener noreferrer">Affiliate website <span>↗</span></a>}
                            </div>
                        </div>
                    </div>
                </header>

                <section className="case-media page-width" aria-label="Project media">
                    {!hasMedia && (
                        <div className="case-placeholder healthcare-visual" aria-label="Healthcare, code and secure connectivity">
                            <span>Care</span><span>Code</span><span>Connect</span>
                        </div>
                    )}

                    {videos.map((src, index) => (
                        <figure className="case-media-item case-video" key={src}>
                            <video poster={detail.poster?.[index]} controls preload="metadata">
                                <source src={src}/>
                                Your browser does not support the video tag.
                            </video>
                            <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{detail.vidTitle?.[index] ?? 'Product walkthrough'}</figcaption>
                        </figure>
                    ))}

                    {images.map((src, index) => (
                        <button className="case-media-item case-image" type="button" key={src} onClick={() => openLightbox(index)}>
                            <img src={src} alt={detail.imgTitle?.[index] ?? `${detail.cardTitle} interface ${index + 1}`} loading="lazy"/>
                            <span className="case-image-label"><i>{String(index + 1).padStart(2, '0')}</i> {detail.imgTitle?.[index] ?? 'View image'} <b>↗</b></span>
                        </button>
                    ))}

                    {mobileVideos.map((src, index) => (
                        <figure className="case-media-item case-video case-mobile-video" key={src}>
                            <video poster={detail.poster?.[index]} controls preload="metadata">
                                <source src={src}/>
                                Your browser does not support the video tag.
                            </video>
                            <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{detail.vidTitle?.[index] ?? 'Mobile experience'}</figcaption>
                        </figure>
                    ))}
                </section>

                <footer className="case-footer page-width">
                    <p>End of case study</p>
                    <button className="text-link" type="button" onClick={closeAction}>Back to selected work <span>↑</span></button>
                </footer>
            </Modal.Body>

            {showLightBox && <LightBoxWrapper isOpen srcIndex={srcIndex} card={detail} handleClose={() => setShowLightBox(false)}/>}
        </Modal>
    );
}
