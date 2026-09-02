// @ts-ignore CSS is bundled as a side-effect import by the build tool.
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Home";
import AboutMe from "./pages/about-me/AboutMe";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import ProjectDetail from "./pages/projects/ProjectDetail";
import {Link, Route, Routes, useLocation} from "react-router-dom";

function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!location.hash) return;
    window.requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView();
    });
  }, [location.hash]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link
            className="wordmark"
            to="/#home"
            onClick={closeMenu}
            aria-label="Priska Kohnen, home"
          >
            Priska Kohnen
          </Link>
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
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/work/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<PortfolioHome />} />
    </Routes>
  );
}

export default App;
