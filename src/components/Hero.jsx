import team from "../data/team";

export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__top">
        <h1>Four specialists.<br />One stack.</h1>
        <div>
          <p className="lead hero__lead">
            We build websites, web apps and databases — and write the technical and
            academic papers that go with them. One team, four skill sets, every project
            handled together.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid btn--wide" href="#contact">Start a project</a>
            <a className="btn btn--ghost btn--wide" href="#team">Meet the team</a>
          </div>
        </div>
      </div>

      <div className="stack" aria-label="The four members of AcadStack">
        {team.map((m) => (
          <div className="stack__col" key={m.id}>
            <img src={m.image} alt={m.name} />
            <span className="stack__name">{m.first}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
