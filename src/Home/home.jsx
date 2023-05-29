import "./home.css";
// import About from "../About/about";
import React from "react";
// import { Link } from "react-router-dom";
// import { routes } from "../routes";
// import { useLocation } from "react-router-dom";
// import { useRef } from "react";
function Home() {
  // const location = useLocation();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>I'm Priyadharshini S</h1>
        <p style={{ color: "#6C6B6B" }}>Frontend Developer</p>
        <br></br>
        <p>
        As a front-end developer, coding is my passion and I'm dedicated to continually expanding my knowledge and skills. During my free time, I love exploring new concepts and experimenting with different coding techniques to level up my craft. From building websites to creating custom user interfaces, I thrive on the challenge of pushing boundaries and delivering high-quality work that leaves a lasting impact.
        </p>
        <br></br>

        <p>
          Have a look at my <span>Projects</span> , <span>resume </span> to know
          more about me. Send a email to{" "}
          <span>priyadharshinism2001@gmail.com</span> to get touch with me.
        </p>
        <br></br>
        <br></br>
        {/* <Link to="#about" style={{ textDecoration: "none" }}>
          <p style={{ fontSize: "15px", color: "white" }}>About me -></p>
        </Link> */}
      </div>
    </div>
  );
}

export default Home;
