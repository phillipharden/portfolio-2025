import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import "../css/Home.css";
import BouncingText from "../components/BouncingText";


function Home() {
   const greeting = "Hi, I'm Phillip.".split("");
  return (
      <div className="container">
         

          <div className="header-content slide-in pre-animation">
            <h1 className="brand-font greeting">
              {greeting.map((letter, index) => {
                return <BouncingText key={index}>{letter}</BouncingText>;
              })}
            </h1>

            <p className="greeting-message">
              As a <span className="webdev">Web Developer</span>, I specialize
              in designing and building dynamic, user-friendly websites and web
              applications. With expertise in frontend and backend development,
              I create seamless digital experiences using modern technologies
              like React, JavaScript, HTML, CSS, and Node.js. My goal is to
              craft high-performing, visually engaging, and scalable solutions
              that leave a lasting impact.
            </p>

         
          </div>
    
      </div>
  );
}

export default Home;

// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
