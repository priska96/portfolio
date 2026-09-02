import {Link} from 'react-router-dom';
import {projects, type ProjectCardData} from './project-data';

function Projects() {
    const featured = projects.filter((project) => project.featured);
    const archive = projects.filter((project) => !project.featured);

    const renderProject = (project: ProjectCardData, index: number) => (
        <article className={`project-card ${!project.image ? 'project-card-text' : ''} ${project.mediaKind ? `project-card-${project.mediaKind}` : ''}`} key={project.key}>
            <div className="project-number">0{index + 1}</div>
            {project.image ? <img className={project.imageDisplay === 'contain' ? 'project-card-image-contain' : project.imageDisplay === 'contain-full' ? 'project-card-image-full' : undefined} src={project.image} alt="" loading="lazy"/> : <div className="healthcare-visual" aria-hidden="true">{(project.visualWords ?? ['Care', 'Code', 'Connect']).map((word) => <span key={word}>{word}</span>)}</div>}
            <div className="project-copy">
                <p className="eyebrow">{project.context}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-role">My role · {project.role}</p>
                <ul className="tag-list" aria-label="Technologies">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <Link className="text-link project-link" to={`/work/${project.slug}`}>View case study <span>↗</span></Link>
            </div>
        </article>
    );

    return (
        <section className="section page-width" id="work" aria-labelledby="work-title">
            <div className="section-heading">
                <div><p className="eyebrow">Selected work</p><h2 id="work-title">Products with purpose.</h2></div>
                <p>Each role moved me forward: ThorDrive became my stepping stone into React and React Native; at sciendis, I reached my biggest milestone so far through leadership, architecture, native Swift and Kotlin development, PACE and cryptography.</p>
            </div>
            <div className="featured-projects">{featured.map(renderProject)}</div>
            <div className="archive-heading"><p className="eyebrow">Earlier work</p><h3>Foundations that shaped how I build today.</h3></div>
            <div className="project-archive">{archive.map((project, index) => renderProject(project, index + featured.length))}</div>
        </section>
    );
}

export default Projects;
