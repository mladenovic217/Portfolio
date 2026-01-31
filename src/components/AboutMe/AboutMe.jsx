import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h1 className="active">About Me</h1>
        <div className="about-left">
          <div className="about-item" data-animate="fadeUp">
            <h3>School</h3>
            <p>
              I’m 21 years old and currently studying at the Faculty of Electronic Engineering in
              Niš, majoring in Computer Science and Informatics (RI).
            </p>
            <p>
              I completed my high school education in the IT program, where I
              developed a strong foundation in programming and technology.
            </p>
          </div>
          <div className="about-item" data-animate="fadeUp">
            <h3>What I'm Looking For</h3>
            <p>
              I’m looking for opportunities to grow as a frontend developer,
              work on real-world projects, and collaborate with experienced
              teams where I can continue learning.
            </p>
          </div>

          <div className="about-item" data-animate="fadeUp">
            <h3>My Skills</h3>
            <p>
              I work mainly with JavaScript and React, and I’m also comfortable
              with:
            </p>
            <ul className="skills-grid">
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React"
                />
                React
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JS"
                />
                JavaScript
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind"
                />
                Tailwind
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                  alt="Sass"
                />
                Sass
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  alt="SQL"
                />
                SQL
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                  alt="C++"
                />
                C++
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right" data-animate="fadeRight">
          <img src="/assets/MeImg.png"/>
        </div>
      </div>
    </section>
  );
}
