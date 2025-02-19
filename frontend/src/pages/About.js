import React from "react";
import "../css/About.css";

function About() {
  const Skills = [
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "React", url: "https://react.dev/" },
    {
      name: "C#",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/",
    },
    { name: "MySQL", url: "https://www.mysql.com/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Node", url: "https://nodejs.org/" },
    { name: "Express", url: "https://expressjs.com/" },
    { name: "SASS", url: "https://sass-lang.com/" },
    { name: "Bootstrap", url: "https://getbootstrap.com/" },
  ];
  return (
    <section id="about">
      <div className="about container">
        <h2>About Me</h2>
        <hr className="rounded" />
        <div className="about-container">
          <section className="about-sec">
            <input id="check" type="checkbox" />
            <h3>Who I Am</h3>
            <p>
              I am a Full-Stack Web Developer with a Bachelor's Degree in Web
              Design & Development from Full Sail University. My passion for
              continuous learning drives me to expand my skills daily, ensuring
              I stay at the forefront of modern web technologies.
            </p>
            <h3>Technical Expertise</h3>
            <p>
              I have a strong foundation in frontend development, proficient in
              HTML, CSS, and JavaScript, with expertise in React and SASS. While
              I excel with frameworks like Bootstrap and Tailwind CSS, I also
              enjoy crafting custom CSS libraries for unique styling solutions.
            </p>
            <p>
              Beyond frontend, I have extensive experience in backend
              development, working with APIs and databases such as MongoDB,
              MySQL, and PostgreSQL. I take pride in building CRUD applications
              and developing RESTful APIs, ensuring seamless data management and
              efficient server-client interactions.
            </p>
            <div className="more-content">
              <h3>Beyond Coding</h3>
              <p>
                Outside of development, I have a deep passion for powerlifting
                and fitness, though I balance that with a love for pizza and
                tacos—which is evident in some of my projects! A personal
                milestone in my journey was achieving a 500-pound deadlift and a
                450-pound squat.
                <p>
                  I’ve also been a writer and musician since childhood. My love
                  for poetry began in elementary school, leading to my first
                  published poem in third grade. This passion later evolved into
                  songwriting and recording music as a Christian Hip-Hop (CHH)
                  artist in the late 2000s. While I no longer pursue music
                  professionally, I remain connected to the Atlanta CHH scene.
                </p>
                <h3>My Why</h3>
                <p>
                  Above all, my greatest inspiration is my family—my wife and
                  daughter. Becoming a father motivated me to pursue web
                  development as a career. My coding journey started in the
                  MySpace era, but it wasn’t until 2019 that I reignited my
                  passion through self-learning. Realizing I thrived in
                  structured environments, I enrolled at Full Sail University in
                  2020 to refine my skills.
                </p>
                <p>
                  Today, I continue to expand my knowledge through platforms
                  like LinkedIn Learning and Udemy, dedicating at least an hour
                  a day to professional growth—though I often get so immersed
                  that an hour turns into several!
                </p>
                <p>
                  I'm always eager to build, create, and innovate, whether it’s
                  crafting seamless user experiences, developing scalable
                  backend solutions, or diving into the next big challenge in
                  web development.
                </p>
              </p>
              <label for="check" className="btn btn-primary check">
                Show less
              </label>
            </div>
            <label for="check" className="btn btn-primary check">
              Read more
            </label>
          </section>
          <section className="skills-sec">
            <h3>My Skills</h3>
            <div className="skills-container">
              <ul className="skills-list">
                {Skills.map((skill, index) => (
                  <li className="skill btn" key={index}>
                    <a href={skill.url} target="_new">
                      {skill.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
