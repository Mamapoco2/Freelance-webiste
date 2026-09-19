import { faqs } from "../data/site";

export default function Faq() {
  return (
    <section className="band" id="faq">
      <div className="wrap">
        <div className="head"><h2>Questions clients ask</h2></div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
