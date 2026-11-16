
import { projects } from "../data/portfolio";

function Work() {
  return (
    <div className="inner-page">
      <p className="eyebrow">SELECTED WORK / SOFTWARE & AI</p>

      <h1 className="page-title">
        IDEAS INTO
        <br />
        <span>ENGINEERED SYSTEMS.</span>
      </h1>

      <p className="page-lead">
        A selection of software engineering, AI, data analytics
        and research projects. Each project reflects a different
        area of exploration and technical practice.
      </p>

      <div className="project-list project-list-detailed">
        {projects.map((project) => (
          <article className="project-entry" key={project.number}>
            <div className="project-entry-top">
              <span>{project.number}</span>
              <span>{project.category}</span>
              <span>{project.status}</span>
            </div>

            <h2>{project.name}</h2>
            <h3>{project.subtitle}</h3>
            <p>{project.description}</p>

            <div className="technology-list">
              {project.stack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {project.link && (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                VIEW REPOSITORY <span>↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Work;
