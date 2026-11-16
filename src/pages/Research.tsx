
import { research } from "../data/portfolio";

function Research() {
  return (
    <div className="inner-page">
      <p className="eyebrow">RESEARCH / CURRENT EXPLORATIONS</p>

      <h1 className="page-title">
        BEYOND THE
        <br />
        <span>APPLICATION LAYER.</span>
      </h1>

      <p className="page-lead">
        Exploring deep learning for biomedical signal classification
        and generative approaches to computer vision.
      </p>

      <div className="research-list">
        {research.map((item, index) => (
          <article className="research-entry" key={item.name}>
            <span>0{index + 1} / {item.field.toUpperCase()}</span>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <small>{item.status}</small>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Research;
