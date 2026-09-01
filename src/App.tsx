import "./App.css";
import { useState } from "react";
import Home from "./Home";
import AboutMe from "./pages/about-me/AboutMe";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a
            className="wordmark"
            href="#home"
            onClick={closeMenu}
            aria-label="Priska Kohnen, home"
          >
            Priska Kohnen
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span />
            <span />
          </button>
          <div
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
            id="main-menu"
          >
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>
        </nav>
      </header>
      <main id="main-content">
        <Home />
        <Projects />
        <Experience />
        <AboutMe />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Priska Kohnen</p>
        <p>Designed &amp; built with React and TypeScript.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
