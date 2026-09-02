import {useEffect, useState} from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import parse from 'html-react-parser';
import LightBoxWrapper from '../../components/light-box/LightBoxWrapper';
import {data, projects} from './project-data';

export default function ProjectDetail() {
    const {slug} = useParams<{slug: string}>();
    const [showLightBox, setShowLightBox] = useState(false);
    const [srcIndex, setSrcIndex] = useState(0);
    const projectIndex = projects.findIndex((item) => item.slug === slug);
    const project = projectIndex >= 0 ? projects[projectIndex] : undefined;
    const detail = project ? data[project.key] : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!detail) return;
        document.title = `${detail.cardTitle} — Priska Kohnen`;
        const description = detail.cardText.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
        const openGraphDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
        const previousDescription = metaDescription?.content;
        const previousOpenGraphTitle = openGraphTitle?.content;
        const previousOpenGraphDescription = openGraphDescription?.content;
        if (metaDescription) metaDescription.content = description;
        if (openGraphTitle) openGraphTitle.content = `${detail.cardTitle} — Priska Kohnen`;
        if (openGraphDescription) openGraphDescription.content = description;
        return () => {
            document.title = 'Priska Kohnen — Senior Frontend Developer';
            if (metaDescription && previousDescription) metaDescription.content = previousDescription;
            if (openGraphTitle && previousOpenGraphTitle) openGraphTitle.content = previousOpenGraphTitle;
            if (openGraphDescription && previousOpenGraphDescription) openGraphDescription.content = previousOpenGraphDescription;
        };
    }, [detail]);

    if (!detail || !project) return <Navigate to="/" replace/>;

    const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(projectIndex + 1) % projects.length];

    const images = detail.imgs ?? [];
    const mobileImages = detail.mobileImgs ?? [];
    const videos = detail.vids ?? [];
    const mobileVideos = detail.mobileVids ?? [];
    const hasMedia = images.length + mobileImages.length + videos.length + mobileVideos.length > 0;
    const hasActions = Boolean(detail.buttonCode || detail.buttonWebsite || detail.buttonAffiliate);
    const hasMeta = Boolean(detail.period || detail.role || detail.focus?.length || detail.stack?.length);

    const imageTitle = (src: string, index: number) => {
        if (detail.imgTitle?.[index]) return detail.imgTitle[index];

        const filename = decodeURIComponent(src.split('/').pop() ?? '')
            .replace(/\.[a-f0-9]{8,}(?=\.)/i, '')
            .replace(/\.[^.]+$/, '')
            .replace(/[-_]+/g, ' ')
            .trim();
        return filename ? filename.replace(/^./, (letter) => letter.toUpperCase()) : `${detail.cardTitle} interface ${index + 1}`;
    };

    const openLightbox = (index: number) => {
        setSrcIndex(index);
        setShowLightBox(true);
    };

    return (
        <div className="case-page">
            <a className="skip-link" href="#main-content">Skip to case study</a>
            <header className="case-nav">
                <Link className="case-close" to="/#work" aria-label="Back to selected work">
                    <span aria-hidden="true">←</span> Back to work
                </Link>
                <span>Case study · {String(projectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
            </header>

            <main className="case-body" id="main-content">
                <header className="case-hero">
                    <div className="page-width case-hero-inner">
                        <p className="eyebrow light">Selected work</p>
                        <h1>{detail.cardTitle}</h1>
                        {hasMeta && <dl className="case-meta">
                            {detail.role && <div><dt>Role</dt><dd>{detail.role}</dd></div>}
                            {detail.focus?.length && <div><dt>Focus</dt><dd>{detail.focus.join(' · ')}</dd></div>}
                            {detail.stack?.length && <div><dt>Stack</dt><dd>{detail.stack.join(' · ')}</dd></div>}
                            {detail.period && <div><dt>Period</dt><dd>{detail.period}</dd></div>}
                        </dl>}
                        <div className={`case-summary ${hasActions ? 'has-actions' : ''}`}>
                            <p>{parse(detail.cardText)}</p>
                            {hasActions && <div className="case-actions">
                                {detail.buttonCode && <a className="button button-primary" href={detail.buttonCode} target="_blank" rel="noopener noreferrer">View code ↗</a>}
                                {detail.buttonWebsite && <a className="text-link light" href={detail.buttonWebsite} target="_blank" rel="noopener noreferrer">Visit website <span>↗</span></a>}
                                {detail.buttonAffiliate && <a className="text-link light" href={detail.buttonAffiliate} target="_blank" rel="noopener noreferrer">Affiliate website <span>↗</span></a>}
                            </div>}
                        </div>
                    </div>
                </header>

                {detail.sections?.length && <section className="case-story page-width" aria-label="Case study details">
                    {detail.sections.map((section, index) => (
                        <article className="case-story-section" key={`${section.title}-${index}`}>
                            <div className="case-story-heading">
                                <p className="eyebrow">{section.eyebrow}</p>
                                <h2>{section.title}</h2>
                            </div>
                            <div className="case-story-copy">
                                <p>{section.body}</p>
                                {section.points?.length && <ul>
                                    {section.points.map((point) => <li key={point}>{point}</li>)}
                                </ul>}
                            </div>
                        </article>
                    ))}
                </section>}

                <section className="case-media page-width" aria-label="Project media">
                    {!hasMedia && (
                        <div className="case-placeholder healthcare-visual" aria-label="Healthcare, code and secure connectivity">
                            <span>Care</span><span>Code</span><span>Connect</span>
                        </div>
                    )}

                    {videos.length > 0 && <div className="case-video-grid">
                    {videos.map((src, index) => (
                        <figure className="case-media-item case-video" key={src}>
                            <video poster={detail.poster?.[index]} controls preload="metadata">
                                <source src={src}/>
                                Your browser does not support the video tag.
                            </video>
                            <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{detail.vidTitle?.[index] ?? 'Product walkthrough'}</figcaption>
                        </figure>
                    ))}
                    </div>}

                    {images.length > 0 && <div className="case-image-grid">
                    {images.map((src, index) => (
                        <button className="case-media-item case-image" type="button" key={src} onClick={() => openLightbox(index)}>
                            <img src={src} alt={imageTitle(src, index)} loading="lazy"/>
                            <span className="case-image-label"><i>{String(index + 1).padStart(2, '0')}</i> {imageTitle(src, index)} <b>↗</b></span>
                        </button>
                    ))}
                    </div>}

                    {mobileImages.length > 0 && <div className="case-mobile-image-grid">
                    {mobileImages.map((src, index) => (
                        <button className="case-media-item case-image case-mobile-image" type="button" key={src} onClick={() => openLightbox(images.length + index)}>
                            <img src={src} alt={detail.mobileImgTitle?.[index] ?? imageTitle(src, index)} loading="lazy"/>
                            <span className="case-image-label"><i>{String(index + 1).padStart(2, '0')}</i> {detail.mobileImgTitle?.[index] ?? imageTitle(src, index)} <b>↗</b></span>
                        </button>
                    ))}
                    </div>}

                    {mobileVideos.length > 0 && <div className="case-mobile-video-grid">
                    {mobileVideos.map((src, index) => (
                        <figure className="case-media-item case-video case-mobile-video" key={src}>
                            <video poster={detail.poster?.[index]} controls preload="metadata">
                                <source src={src}/>
                                Your browser does not support the video tag.
                            </video>
                            <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{detail.vidTitle?.[index] ?? 'Mobile experience'}</figcaption>
                        </figure>
                    ))}
                    </div>}
                </section>

                <footer className="case-footer page-width">
                    <Link className="case-project-nav previous" to={`/work/${previousProject.slug}`}><span>← Previous</span><strong>{previousProject.title}</strong></Link>
                    <Link className="case-project-nav next" to={`/work/${nextProject.slug}`}><span>Next →</span><strong>{nextProject.title}</strong></Link>
                </footer>
            </main>

            {showLightBox && <LightBoxWrapper isOpen srcIndex={srcIndex} card={detail} handleClose={() => setShowLightBox(false)}/>}
        </div>
    );
}
