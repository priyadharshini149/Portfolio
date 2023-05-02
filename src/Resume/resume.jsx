import "./resume.css";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { saveAs } from "file-saver";
function resume() {
  const handleClick = () => {
    let url = "/assets/image/resume.jpg";
    saveAs(url, "Resume");
  };
  return (
    <div className="resume-container">
      <div className="resume-content">
        <h1>Resume</h1>
        <br></br>
        <p>
          View or{" "}
          <button
            style={{ padding: "2px", borderRadius: "5px", border: "none" }}
            onClick={handleClick}
          >
            Download
          </button>{" "}
          resume
        </p>
        <br></br>
        <div className="resume-holder">
          <div className="resume">
            <img
              src="/assets/image/resume.jpg"
              alt="resume"
              className="res"
            ></img>
          </div>
        </div>
        <br></br>
        <Link to={routes.contact} style={{ textDecoration: "none" }}>
          <p style={{ fontSize: "15px", color: "white" }}>
            Lets get in touch ->
          </p>
        </Link>
      </div>
    </div>
  );
}

export default resume;
