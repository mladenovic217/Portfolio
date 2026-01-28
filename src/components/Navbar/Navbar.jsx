import "./Navbar.scss";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Navbar() {
  const {active,isHero} = useActiveSection();

  return (
    <nav className={isHero ? "navbar navbar-hero" : "navbar"}>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a className={active === "home" ? "active" : ""} href="#home">
              Home
            </a>
          </li>
          <li>
            <a
              className={active === "projects" ? "active" : ""}
              href="#projects"
            >
              Projects
            </a>
          </li>

          <li>
            <a className={active === "about" ? "active" : ""} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className={active === "contact" ? "active" : ""} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
