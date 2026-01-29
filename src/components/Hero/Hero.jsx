import React from "react";
import meImg from "/assets/Me-removebg-preview.png";
import "./Hero.scss";
import useTypewriter from "../../hooks/useTypewriter";

export default function Hero() {
  const text = useTypewriter("Front-end Developer");

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

      <div className="hero-image" data-animate="FadeImg">
        <img id="hero-img" src={meImg} alt="Me" />
      </div>

      {/*<div className="hero-text-right">
        <h2>Eager to learn & contribute</h2>
        <p>
         I
          focus on readable code, fast performance, and growing in a team.
        </p>
      </div>*/}
    </section>
  );
}
