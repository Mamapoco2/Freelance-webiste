import projects from "../data/projects";
import { byId } from "../data/team";

export default function Work() {
  return (
    <section className="band band--cream" id="work">
      <div className="wrap">
        <div className="head">
          <h2>Selected work</h2>
          <p>
            {projects.length
              ? "Recent projects, the services they used, and who on the team built them."
              : "This is where finished projects will live — preview, scope, stack and who worked on what."}
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="work-empty">
            <h3>No case studies published yet</h3>
            <p className="sub measure-s">
              We are writing up recent projects for this page. In the meantime, tell us the
              kind of work you need and we will send relevant examples directly.
            </p>
            <a className="btn btn--solid" href="#contact">Ask for work samples</a>
            <div className="ghosts">
              <div className="ghost"><span>Project one</span></div>
              <div className="ghost"><span>Project two</span></div>
              <div className="ghost"><span>Project three</span></div>
            </div>
          </div>
        ) : (
          <div className="work-grid">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                {p.image && (
                  <div className="project__shot">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                )}
                <div className="project__body">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  {p.services?.length > 0 && (
                    <div className="taglist">
                      {p.services.map((s) => <span className="tag" key={s}>{s}</span>)}
                    </div>
                  )}
                  {p.tech?.length > 0 && (
                    <div className="project__tech">{p.tech.join(", ")}</div>
                  )}
                  {p.people?.length > 0 && (
                    <div className="byline">
                      <span className="dots">
                        {p.people.map((id) => <img src={byId[id].avatar} alt="" key={id} />)}
                      </span>
                      {p.people.map((id) => byId[id].first).join(", ")}
                    </div>
                  )}
                  {p.href && (
                    <a className="btn btn--ghost" href={p.href} target="_blank" rel="noopener noreferrer">
                      View project
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
