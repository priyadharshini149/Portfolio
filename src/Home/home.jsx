import "./home.css";

import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

function home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>I'm Priyadharshini S</h1>
        <p style={{ color: "#6C6B6B" }}>Frontend Developer</p>
        <br></br>
        <p>
          As a front-end developer, I am passionate about coding and committed
          to continually expanding my knowledge and skill set. During my free
          time, I enjoy exploring new concepts and experimenting with different
          coding techniques to improve my craft.
        </p>
        <br></br>
        <br></br>
        <p>
          Have a look at my <span>Projects</span> , <span>resume </span> to know
          more about me. Send a email to{" "}
          <span>priyadharshinism2001@gmail.com</span> to get touch with me.
        </p>
        <br></br>
        <br></br>
        <Link to={routes.about} style={{ textDecoration: "none" }}>
          <p style={{ fontSize: "15px", color: "white" }}>About me -></p>
        </Link>
      </div>
    </div>
  );
}

export default home;
