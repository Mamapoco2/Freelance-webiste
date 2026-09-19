import Logo from "./Logo";
import { CONTACT_EMAIL } from "../data/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            <a className="brand" href="#top"><Logo />AcadStack</a>
            <p className="measure-s">
              A four-person freelance team building web projects and writing the papers that
              document them. Our vision is to be a partner recognised for excellence,
              reliability and impact on every project we deliver.
            </p>
          </div>
          <div className="foot__col">
            <h4>Sections</h4>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#process">Process</a>
            <a href="#work">Work</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="foot__col">
            <h4>Services</h4>
            <a href="#services">Web development</a>
            <a href="#services">UI/UX design</a>
            <a href="#services">Mobile development</a>
            <a href="#services">Database management</a>
            <a href="#services">Academic &amp; paperwork</a>
          </div>
        </div>
        <div className="foot__bar">
          <span>© {new Date().getFullYear()} AcadStack. All rights reserved.</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
