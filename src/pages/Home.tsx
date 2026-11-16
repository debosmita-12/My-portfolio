
import { Link } from "react-router-dom";
import TypingText from "../components/TypingText";

function Home() {
  return (
    <section className="home-page">
      <div className="home-topline">
        <span>PORTFOLIO / 2026–27</span>
        <span>COMPUTER SCIENCE & ENGINEERING</span>
      </div>

      <div className="home-main">
        <div className="home-left">
          <p className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1 className="home-title">
            DEBOSMITA
            <br />
            <span>MUKHOPADHYAY.</span>
          </h1>

          <div className="home-intro">
            <h2><TypingText /></h2>

            <p>
              Computer Science undergraduate specializing in
              Artificial Intelligence and Machine Learning.
              Interested in building useful software, exploring
              intelligent systems and solving meaningful problems.
            </p>
          </div>

          <div className="hero-actions">
            <Link className="button-primary" to="/work">
              EXPLORE MY WORK <span>↗</span>
            </Link>

            <Link className="button-secondary" to="/about">
              MORE ABOUT ME <span>↗</span>
            </Link>
          </div>
        </div>

        <aside className="home-right">
          <div className="hero-index">
            <span>01</span>
            <span>PROFILE OVERVIEW</span>
          </div>

          <div className="hero-stat">
            <strong>9.03</strong>
            <span>CGPA / 10</span>
          </div>

          <div className="hero-stat">
            <strong>2028</strong>
            <span>EXPECTED GRADUATION</span>
          </div>

          <div className="hero-stat">
            <strong>AI / ML</strong>
            <span>AREA OF SPECIALIZATION</span>
          </div>

          <div className="hero-location">
            <span>ACADEMIC BASE</span>
            <strong>SRM UNIVERSITY AP</strong>
            <span>INTERNATIONAL EXPERIENCE</span>
            <strong>SKKU · SOUTH KOREA</strong>
          </div>

          <Link to="/about" className="hero-more">
            DISCOVER MY JOURNEY ↗
          </Link>
        </aside>
      </div>

      <div className="home-bottomline">
        <span>SOFTWARE ENGINEERING</span>
        <span>ARTIFICIAL INTELLIGENCE</span>
        <span>RESEARCH & DEVELOPMENT</span>
      </div>
    </section>
  );
}

export default Home;
