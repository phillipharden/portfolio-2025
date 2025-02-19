import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Form from "../components/Form";
import "../css/Home.css";
import HeroImage from "../images/logo.png";

function Home() {
  return (
    <Container className="margin-bottom-55px">
      <div className="home full-page">
        <div className="home-header">
          <h2 className="brand-font">Welcome</h2>
        </div>
        <div className="home-body">
          <p className="text-block">
            This will be my portfolio
          </p>
          <img
            src={HeroImage}
            alt="Image of a woman listening to music and exercising."
            className="hero-img"
          />
        </div>
      </div>
    </Container>
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
