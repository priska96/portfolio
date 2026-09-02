import {experience} from '../projects/project-data';

function Experience() {
  return (
    <section
      className="section section-dark"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow light">Experience</p>
            <h2 id="experience-title">
              From full stack to frontend leadership.
            </h2>
          </div>
          <p>
            My path began with Django and the terminal. It grew through
            autonomous systems, AI products and healthcare into architecture and
            team leadership.
          </p>
        </div>
        <div className="timeline">
          {experience.map((role, index) => (
            <article className="timeline-item" key={role.company}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-date">{role.period}</div>
              <div className="timeline-content">
                <p className="role-company">
                  {role.company} · {role.location}
                </p>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                {role.highlights && (
                  <ul>
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
