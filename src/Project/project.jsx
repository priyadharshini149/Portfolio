import "./project.css";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

function project() {
  return (
    <div className="project-container">
      <div className="project-content">
        <h1>Projects</h1>

        <div className="project">
          <div className="image">
            <img
              src="/assets/image/discord.png"
              alt="discord"
              className="discord"
            ></img>
          </div>
          <div className="desc">
            <h3> Discord Clone</h3>
            <p>
              <span>React Js</span> <span>Boostrap</span>
              <br></br>
              Cloned the Discord website and their web application by using
              React and Bootstrap.
              <br></br>
              <a href="https://snowpack.netlify.app/">Check out</a>
            </p>
          </div>
        </div>

        <div className="project">
          <div className="desc" style={{ marginRight: "7rem" }}>
            <h3> Quiz Application</h3>
            <p>
              <span>HTML</span> <span>CSS</span> <span>Javascript</span>
              <br></br>
              Created and Developed a quiz application to assess users'
              knowledge of coding fundamentals.
              <br></br>
              <a href="https://quiz-tym.netlify.app/index.html">Check out</a>
            </p>
          </div>
          <div className="image">
            <img src="/assets/image/quiz.png" alt="quiz" className="quiz"></img>
          </div>
        </div>

        <div className="project">
          <div className="image">
            <img
              src="/assets/image/studmang.png"
              alt="studmang"
              className="studmang"
            ></img>
          </div>
          <div className="desc">
            <h3> Student Management</h3>
            <p>
              <span>Node Js</span> <span>MongoDB</span>
              <br></br>
              Developed Student management application to keep track of student
              information.
              <br></br>
              <a href="https://github.com/priyadharshini149/StudentManagement">
                Check out
              </a>
            </p>
          </div>
        </div>
        <br></br>
        <Link to={routes.resume} style={{ textDecoration: "none" }}>
          <p style={{ fontSize: "15px", color: "white" }}>Go through my resume -></p>
        </Link>
      </div>
    </div>
  );
}

export default project;
