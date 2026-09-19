import { steps } from "../data/site";

export default function Process() {
  return (
    <section className="band" id="process">
      <div className="wrap">
        <div className="head">
          <h2>How a project runs</h2>
          <p>
            A streamlined approach that keeps quality high and collaboration stress-free,
            with a clear schedule agreed before the build starts.
          </p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step__n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
