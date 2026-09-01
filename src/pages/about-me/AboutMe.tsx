import me from '../../images/me.png';

const skillGroups = [
    {title: 'Frontend & mobile', skills: ['React', 'React Native', 'Expo', 'TypeScript', 'Next.js']},
    {title: 'Architecture & data', skills: ['Monorepos', 'Shared libraries', 'REST APIs', 'SQLite', 'Kysely', 'Prisma']},
    {title: 'Native & systems', skills: ['Swift', 'Android', 'NFC', 'PACE', 'Python', 'Django', 'ROS']},
    {title: 'Leadership', skills: ['Technical planning', 'Code reviews', 'Mentoring', 'Prioritization', 'Cross-functional work']},
];

function AboutMe() {
    return (
        <section className="section page-width about-section" id="about" aria-labelledby="about-title">
            <div className="about-portrait"><img src={me} alt="Priska Kohnen" loading="lazy"/><span>Berlin ↔ Seoul</span></div>
            <div className="about-content">
                <p className="eyebrow">About me</p>
                <h2 id="about-title">Curious by nature.<br/>Structured by experience.</h2>
                <p className="about-lead">I’m a software engineer who likes moving between product thinking, visual detail and complex technical problems.</p>
                <p>I started with Python and Django and progressively specialized in frontend and mobile engineering. Today I lead frontend work while still enjoying the details: a reusable component, a clean data layer, a difficult native integration or an interface that finally feels simple.</p>
                <p>Having lived and worked in Berlin and Seoul shaped how I communicate, collaborate and approach unfamiliar problems. Drawing and painting still influence the visual side of my work.</p>
            </div>
            <div className="skills-panel">
                <div className="skills-intro"><p className="eyebrow">How I work</p><h3>A broad foundation, with depth where products need it.</h3></div>
                <div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.title}><h4>{group.title}</h4><p>{group.skills.join(' · ')}</p></div>)}</div>
            </div>
        </section>
    );
}

export default AboutMe;
