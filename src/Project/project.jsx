import "./project.css";
import React from "react";
// import { Link } from "react-router-dom";
// import { routes } from "../routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Button from 'react-bootstrap/Button';

function project() {
  return (
    <div className="project-container">
      <div className="project-content">
        <h1>Projects</h1>
        <br></br>
        <br></br>
        <Row lg={12}>
          <Col lg={8}>
            <img
              src="/assets/image/discord.png"
              alt="discord"
              className="discord"
            ></img>
          </Col>
          <Col lg={4}>
            <h3> Discord Clone</h3>
            <p>
              <span>React Js</span> <span>Boostrap</span>
              <br></br>
              Cloned the Discord website and their web application by using
              React and Bootstrap.
              <br></br>
              <a href="https://snowpack.netlify.app/">Check out</a>
            </p>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row lg={12}>
          <Col lg={8}>
            <h3> Quiz Application</h3>
            <p>
              <span>HTML</span> <span>CSS</span> <span>Javascript</span>
              <br></br>
              Created and Developed a quiz application to assess users'
              knowledge of coding fundamentals.
              <br></br>
              <a href="https://quiz-tym.netlify.app/index.html">Check out</a>
            </p>
          </Col>
          <Col lg={4}>
            <img src="/assets/image/quiz.png" alt="quiz" className="quiz"></img>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row lg={12}>
          <Col lg={8}>
            <img
              src="/assets/image/studmang.png"
              alt="studmang"
              className="studmang"
            ></img>
          </Col>
          <Col lg={4}>
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
          </Col>
        </Row>
        <br></br>
        {/* <Link to={routes.resume} style={{ textDecoration: "none" }}>
          <p style={{ fontSize: "15px", color: "white" }}>Go through my resume -></p>
        </Link> */}
      </div>
    </div>
  );
}

export default project;
