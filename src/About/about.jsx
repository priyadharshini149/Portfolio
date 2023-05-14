import "./about.css";
import React from "react";
// import { Link } from "react-router-dom";
// import { routes } from "../routes";
function about() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <br></br>
        <p>
          In addition to my technical skills, I have a strong passion for art
          and music.Whether it's creating my own artwork or listening to my
          favorite tunes, these hobbies provide a much- needed balance to my
          work as a professional in the tech industry.
        </p>
        <br></br>
        <h3>Work experience</h3>
        <br></br>
        <div className="work">
          <ul>
            <li data-date="2021">
              <p>
                Camaford <span> Front-end</span>
                <br></br>Designed and developed an landing website for an
                Photography Community based App by using figma and react Js.
                Hosted website in netlify.
              </p>
            </li>
            <br></br>
            <li data-date="2022">
              <p>
                Hoods <span>Front-end</span>
                <br></br>Hood is a tech startup that has the idea of creating a
                locality-based social media app. Designed and developed an
                landing website for an Social Media Application by using figma
                and react Js. Hosted website in netlify
              </p>
            </li>
          </ul>
          <br></br>
        </div>
        {/* <Link to={routes.project} style={{ textDecoration: "none" }}>
          <p style={{ fontSize: "15px", color: "white" }}>Have a look at my projects -></p>
        </Link> */}
       
      </div>
    </div>
  );
}

export default about;
