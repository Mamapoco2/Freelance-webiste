import services from "../data/services";
import { byId } from "../data/team";

function Card({ s, className = "" }) {
  const Icon = s.icon;
  return (
    <article className={`card ${s.tone === "gold" ? "card--gold " : ""}${className}`}>
      <div className="card__icon"><Icon /></div>
      <h3>{s.title}</h3>
      <p>{s.body}</p>

      {s.tags && (
        <div className="taglist">
          {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      )}

      {s.people && (
        <div className="byline">
          <span className="dots">
            {s.people.map((id) => <img src={byId[id].avatar} alt="" key={id} />)}
          </span>
          {s.credit}
        </div>
      )}

      {s.image && (
        <div className="card__shot">
          <img src={s.image} alt={s.imageAlt} loading="lazy" />
        </div>
      )}
    </article>
  );
}

export default function Services() {
  const by = Object.fromEntries(services.map((s) => [s.key, s]));

  return (
    <section className="band" id="services">
      <div className="wrap">
        <div className="head">
          <h2>What we take on</h2>
          <p>
            Five areas, one team. Because the skills sit side by side, a project can move
            through design, build and documentation without being handed to anyone outside
            the group.
          </p>
        </div>

        <div className="svc-grid">
          <Card s={by.web} className="svc--a" />
          <div className="svc-col">
            <Card s={by.uiux} />
            <Card s={by.mobile} />
          </div>
          <Card s={by.database} className="svc--d" />
          <Card s={by.academic} className="svc--e" />
        </div>

        <p className="svc-note">
          Most projects draw on more than one of these at once, and Sharmaine manages each
          one from the first brief through to handover — so you brief once and always know
          who to ask.
        </p>
      </div>
    </section>
  );
}
