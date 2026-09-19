import { why } from "../data/site";

export default function Why() {
  return (
    <section className="band band--ink" id="why">
      <div className="wrap">
        <div className="head">
          <h2>Why hire four people instead of one</h2>
          <p>
            Our mission is to provide high-quality academic and freelance solutions that let
            people achieve more with less stress. Here is what the team structure actually
            buys you.
          </p>
        </div>
        <div className="why">
          {why.map((w) => (
            <div className="why__item" key={w.title}>
              <h4>{w.title}</h4>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
