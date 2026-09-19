import { Linkedin, Github } from "lucide-react";
import team from "../data/team";

export default function Team() {
  return (
    <section className="band band--cream" id="team">
      <div className="wrap">
        <div className="head">
          <h2>The four of us</h2>
          <p>
            A front-end and UX designer, a back-end developer, a full-stack developer and a
            project manager — and the line each of us works by.
          </p>
        </div>

        <div className="team">
          {team.map((m) => (
            <article className="member" key={m.id}>
              <div className="member__img"><img src={m.image} alt={m.name} /></div>
              <div className="member__body">
                <div className="member__name">{m.name}</div>
                <div className="member__role">{m.role}</div>
                <p className="member__quote">&ldquo;{m.quote}&rdquo;</p>
                <div className="member__links">
                  {m.socials.linkedin && (
                    <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer"
                       aria-label={`${m.first} on LinkedIn`}><Linkedin /></a>
                  )}
                  {m.socials.github && (
                    <a href={m.socials.github} target="_blank" rel="noopener noreferrer"
                       aria-label={`${m.first} on GitHub`}><Github /></a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
