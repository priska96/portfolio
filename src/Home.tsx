import me from "./images/me-transparent.png";

function HeroPortrait() {
  return (
    <figure className="hero-cutout">
      <div className="hero-cutout-shape" aria-hidden="true" />
      <img src={me} alt="Priska Kohnen" />
    </figure>
  );
}

function Home() {
  return (
    <div className="hero-options" id="home">
      <section
        id="hero-concept-leadership"
        className="hero hero-leadership"
        aria-labelledby="hero-leadership-title"
      >
        <div className="hero-content page-width">
          <HeroPortrait />
          <div className="hero-copy">
            <p className="eyebrow">Priska Kohnen · Senior Frontend Developer</p>
            <h1 id="hero-leadership-title" className="hero-statement">
              <span>Building products.</span>
              <span>Shaping systems.</span>
              <span>Leading teams.</span>
            </h1>
            <p className="hero-intro">
              Frontend Team Lead working across React, React Native and native
              mobile development to turn complex requirements into maintainable
              products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View selected work
              </a>
              <a className="text-link" href="#contact">
                Get in touch <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="hero-concept-terminal"
        className="hero hero-terminal"
        aria-labelledby="hero-terminal-title"
      >
        <div className="terminal-shell">
          <div className="terminal-chrome" aria-hidden="true">
            <div className="terminal-dots"><i /><i /><i /></div>
            <span>priska — portfolio</span>
          </div>
          <div className="terminal-layout">
            <div className="terminal-copy">
              <p className="terminal-command terminal-command-whoami">
                <span className="terminal-prompt">priska@portfolio:~$</span>{" "}
                <span className="terminal-typed">whoami</span>
              </p>
              <p className="terminal-identity terminal-output-identity">
                Priska Kohnen<br />
                <span>Senior Frontend Developer · Frontend Team Lead</span>
              </p>
              <p className="terminal-command terminal-command-mission">
                <span className="terminal-prompt">priska@portfolio:~$</span>{" "}
                <span className="terminal-typed">cat mission.txt</span>
              </p>
              <div className="terminal-output-mission">
                <h2
                  id="hero-terminal-title"
                  className="hero-statement terminal-statement"
                >
                  <span>Building products.</span>
                  <span>Shaping systems.</span>
                  <span>Leading teams.</span>
                </h2>
                <p className="hero-intro terminal-intro">
                  Frontend Team Lead working across React, React Native and native
                  mobile development to turn complex requirements into maintainable
                  products.
                </p>
                <div className="hero-actions terminal-actions">
                  <a className="button button-primary" href="#work">
                    View selected work
                  </a>
                  <a className="text-link light" href="#contact">
                    Get in touch <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
            <figure className="terminal-portrait terminal-output-portrait">
              <img src={me} alt="Priska Kohnen" />
              <figcaption>PORTRAIT.PNG · TRUE COLOR</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
