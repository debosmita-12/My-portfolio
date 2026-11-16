
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

// NAVIGATION BAR
function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label="Debosmita Mukhopadhyay - Home">
        <img src="/dm-logo-icon.png" alt="D.M. Logo" />
      </Link>

      <nav className="nav-links">
        <NavLink to="/" end>
          HOME
        </NavLink>

        <NavLink to="/about">
          ABOUT
        </NavLink>

        <NavLink to="/work">
          WORK
        </NavLink>

        <NavLink to="/research">
          RESEARCH
        </NavLink>

        <NavLink to="/contact">
          CONTACT
        </NavLink>
      </nav>

      <Link className="nav-cta" to="/contact">
        LET'S CONNECT <span>↗</span>
      </Link>
    </header>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 DEBOSMITA MUKHOPADHYAY</span>

      <span>DESIGNED & DEVELOPED WITH INTENTION.</span>

      <Link to="/">
        BACK TO HOME ↑
      </Link>
    </footer>
  );
}

// MAIN APP
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/work" element={<Work />} />

          <Route path="/research" element={<Research />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
