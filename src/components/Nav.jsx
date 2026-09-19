import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  ["#services", "Services"],
  ["#team", "Team"],
  ["#process", "Process"],
  ["#work", "Work"],
  ["#faq", "FAQ"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav__in">
        <a className="brand" href="#top">
          <Logo />
          AcadStack
        </a>

        <nav className="nav__links" aria-label="Main">
          {LINKS.map(([href, label]) => (
            <a key={href} className="nav__link" href={href}>{label}</a>
          ))}
        </nav>

        <a className="btn btn--solid nav__cta" href="#contact">Start a project</a>

        <button
          className="nav__burger"
          aria-expanded={open}
          aria-controls="mobilenav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      <div id="mobilenav" className={`nav__panel${open ? " open" : ""}`}>
        <div className="wrap" onClick={(e) => e.target.tagName === "A" && setOpen(false)}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="btn btn--solid" href="#contact">Start a project</a>
        </div>
      </div>
    </header>
  );
}
