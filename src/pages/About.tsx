
import { education, internships, cohorts, leadership } from "../data/portfolio";

function About() {
  return (
    <div className="inner-page">
      <p className="eyebrow">ABOUT ME / ACADEMIC JOURNEY</p>

      <h1 className="page-title">
        CURIOUS BY NATURE.
        <br />
        <span>BUILT TO EXPLORE.</span>
      </h1>

      <div className="page-lead">
        <p>
          I am a Computer Science and Engineering undergraduate at
          SRM University AP, specializing in Artificial Intelligence
          and Machine Learning. My interests span software engineering,
          full-stack development, machine learning and computer vision.
        </p>
        <p>
          My academic journey includes a Semester Abroad Programme
          at Sungkyunkwan University in South Korea.
        </p>
      </div>

      <section className="content-section">
        <h2>EDUCATION</h2>
        {education.map((item) => (
          <article className="record-row" key={item.institution}>
            <div>
              <h3>{item.institution}</h3>
              <p>{item.qualification} · {item.field}</p>
            </div>
            <span>{item.result}</span>
          </article>
        ))}
      </section>

      <section className="content-section">
        <h2>INTERNSHIPS</h2>
        {internships.map((item) => (
          <article className="record-row" key={item.organization}>
            <h3>{item.organization}</h3>
            <span>{item.domain}</span>
          </article>
        ))}
      </section>

      <section className="content-section">
        <h2>COHORTS & PROGRAMMES</h2>
        {cohorts.map((item) => (
          <article className="record-row" key={item.program}>
            <h3>{item.organization}</h3>
            <span>{item.program}</span>
          </article>
        ))}
      </section>

      <section className="content-section">
        <h2>LEADERSHIP</h2>
        {leadership.map((item) => (
          <article className="record-row" key={item.role}>
            <h3>{item.organization}</h3>
            <span>{item.role}</span>
          </article>
        ))}
      </section>
    </div>
  );
}

export default About;
