import { facts, techStack } from "../data/site";

export default function Facts() {
  return (
    <section className="band band--tight band--cream">
      <div className="wrap facts">
        {facts.map((f) => (
          <div className="fact" key={f.label}>
            <span className="num">{f.n}</span>
            <span>{f.label}</span>
          </div>
        ))}
        <div className="chips">
          {techStack.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}
