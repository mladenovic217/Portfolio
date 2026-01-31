import { useState } from "react";
import "./Hero.scss";
import useTypewriter from "../../hooks/useTypewriter";

export default function Hero() {
  const text = useTypewriter("Front-end Developer");

  const [activeText, setActiveText] = useState(null);

  const skills = [
    {
      id: 1,
      label: "Core",
      level: "med",
      details: [
        "ES6+ JavaScript",
        "DOM Manipulation",
        "Async Programming",
        "Debugging",
      ],
    },
    {
      id: 2,
      label: "Tech",
      level: "high",
      details: [
        "React (Hooks, Context API)",
        "State Management ",
        "UI Animations",
        "Responsive UI",
      ],
    },
    {
      id: 3,
      label: "Tools",
      level: "low",
      details: [
        "Git & GitHub Workflow",
        "Vite & NPM",
        "JSON / Fake APIs",
        "Browser DevTools",
      ],
    },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1 data-animate="fadeLeft">Veljko Mladenovic</h1>
        <h2 className="hero-p">
          {text} <span className="cursor">|</span>
        </h2>
        <p data-animate="fadeUp">
          I build clean, responsive web interfaces using React and modern CSS.
          I’m focused on writing maintainable code, improving performance, and
          growing fast in a team.
        </p>

        <div className="hero-buttons">
          <a className="btn primary" data-animate="FadeIn" href="#contact">
            Contact Me
          </a>
          <a className="btn secondary" data-animate="FadeIn" href="#projects">
            Projects
          </a>
        </div>
      </div>

      <div className="graph" data-animate="FadeImg">
        <div className="graph-container">
          <div className={`column-graph ${activeText ? "visible" : ""}`}>
            {activeText && (
              <div className="column-graph-text">
                <h3>{activeText.label} Expertise</h3>
                <ul>
                  {activeText.details.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="graph-info">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={`graph-bar bar-${skill.level} ${activeText?.id === skill.id ? "active" : ""}`}
                onMouseEnter={() => setActiveText(skill)}
                onMouseLeave={() => setActiveText(null)}
              >
                <span className="bar-label">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
