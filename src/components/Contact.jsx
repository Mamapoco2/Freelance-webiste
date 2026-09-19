import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import team from "../data/team";
import { CONTACT_EMAIL, FORMSPREE_ID, enquiryTypes } from "../data/site";

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [type, setType] = useState("");

  return (
    <section className="band" id="contact" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>Have an idea? Let’s build it together.</h2>
            <p>
              Tell us what you are working on and what you need done. We will come back with
              a scope, a timeline and who on the team would handle it.
            </p>
            <div className="cta__row">
              <a className="btn btn--green btn--wide" href="#form">Start a project</a>
              <a className="btn btn--ghost btn--wide" href={`mailto:${CONTACT_EMAIL}`}>Email the team</a>
            </div>
          </div>
          <div className="cta__who">
            <div className="cta__faces" aria-hidden="true">
              {team.map((m) => <img src={m.avatar} alt="" key={m.id} />)}
            </div>
            <span>The four people who will read your message</span>
          </div>
        </div>

        <div className="contact" style={{ marginTop: "clamp(28px,3.5vw,48px)" }}>
          <form className="form" id="form" onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: 22 }}>Tell us about the project</h3>

            <div className="field">
              <label id="svclabel">What do you need?</label>
              <div className="pills" role="group" aria-labelledby="svclabel">
                {enquiryTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="pill"
                    aria-pressed={type === t}
                    onClick={() => setType((cur) => (cur === t ? "" : t))}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <input type="hidden" name="subject" value={type} />
            </div>

            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Juan dela Cruz" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="field">
              <label htmlFor="message">What are you building?</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="A short description of the project, what you already have, and when you need it."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button className="btn btn--solid btn--wide" type="submit" style={{ width: "100%" }} disabled={state.submitting}>
              {state.submitting ? "Sending…" : "Send message"}
            </button>

            <p className="form__note">
              We reply to every enquiry. If a message suits someone specific on the team, it
              goes straight to them.
            </p>

            {state.succeeded && (
              <div className="ok" role="status">
                Thanks for reaching out — we’ll get back to you soon.
              </div>
            )}
          </form>

          <aside className="side">
            <div className="side__box side__box--cream">
              <h4>Email us directly</h4>
              <a className="side__mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <p>We would love to hear from you — let’s build something great together.</p>
            </div>
            <div className="side__box">
              <h4>Or reach a member</h4>
              <div className="side__people">
                {team.map((m) => (
                  <div className="side__person" key={m.id}>
                    <img src={m.avatar} alt="" />
                    <div>
                      <div>{m.name}</div>
                      <a href={m.socials.github} target="_blank" rel="noopener noreferrer">
                        {m.socials.github.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
