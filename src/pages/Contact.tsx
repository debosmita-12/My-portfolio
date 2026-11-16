
import { profile } from "../data/portfolio";

function Contact() {
  return (
    <div className="inner-page contact-page">
      <p className="eyebrow">CONTACT / COLLABORATION</p>

      <h1 className="page-title">
        HAVE A GOOD
        <br />
        <span>IDEA IN MIND?</span>
      </h1>

      <p className="page-lead">
        Interested in software engineering, AI research,
        internships, academic opportunities or collaboration?
        Let's connect.
      </p>

      <a
        className="button-primary contact-button"
        href={`mailto:${profile.email}`}
      >
        SEND ME AN EMAIL ↗
      </a>

      <div className="contact-details">
        <div>
          <span>EMAIL</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div>
          <span>GITHUB</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/debosmita-12 ↗
          </a>
        </div>
        <div>
          <span>LINKEDIN</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            CONNECT ON LINKEDIN ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
