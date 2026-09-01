import me from "../../images/me.png";

const skillGroups = [
  {
    title: "Frontend, mobile & tooling",
    skills: [
      "React",
      "React Native",
      "Redux",
      "Expo",
      "TypeScript",
      "Next.js",
      "Vite",
    ],
  },
  {
    title: "Backend, architecture & data",
    skills: [
      "Node.js",
      "REST APIs",
      "Monorepos",
      "Shared libraries",
      "SQL (PostgreSQL, SQLite)",
      "NoSQL (Redis)",
    ],
  },
  {
    title: "Native & systems",
    skills: [
      "Swift",
      "Kotlin",
      "C++",
      "NFC",
      "PACE",
      "Python",
      "Django",
      "ROS",
    ],
  },
  {
    title: "Leadership",
    skills: [
      "Technical planning",
      "Code reviews",
      "Mentoring",
      "Prioritization",
      "Cross-functional work",
      "Cross-time-zone collaboration ",
    ],
  },
  {
    title: "Game development · learning",
    skills: ["Unity", "Unreal Engine", "Personal game projects"],
  },
];

function AboutMe() {
  return (
    <section
      className="section page-width about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-portrait">
        <img src={me} alt="Priska Kohnen" loading="lazy" />
        <span>Berlin ↔ Seoul</span>
      </div>
      <div className="about-content">
        <p className="eyebrow">About me</p>
        <h2 id="about-title">
          Curious by nature.
          <br />
          Structured by experience.
        </h2>
        <p className="about-lead">
          I’m a software engineer who likes moving between product thinking,
          visual detail and complex technical problems.
        </p>
        <p>
          I started with Python and Django and progressively specialized in
          frontend and mobile engineering. That foundation included a bachelor
          thesis in which I modeled personalized meal planning as a linear
          optimization problem and made it accessible through a Django
          application. Today I lead frontend work while still enjoying the
          details: a reusable component, a clean data layer, a difficult native
          integration or an interface that finally feels simple.
        </p>
        <p>
          Having lived and worked in Berlin and Seoul shaped how I communicate,
          collaborate and approach unfamiliar problems. Outside of work, drawing
          and painting are two of my favorite hobbies and continue to influence
          how I think about composition, detail and the visual side of digital
          products.
        </p>
        <p>
          I also keep learning through personal software projects. I’m currently
          exploring game development with Unity and Unreal Engine, combining my
          technical background with an interest in interactive worlds and visual
          storytelling.
        </p>
      </div>
      <div className="skills-panel">
        <div className="skills-intro">
          <p className="eyebrow">How I work</p>
          <h3>A broad foundation, with depth where products need it.</h3>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h4>{group.title}</h4>
              <p>{group.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
