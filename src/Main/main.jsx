import "./main.css";

import Home from "../Home/home";
import About from "../About/about";
import Project from "../Project/project";
import Resume from "../Resume/resume";
import Contact from "../Contact/contact";
// import SideNav from "./components/sideNav/sideNav";
// import { Routes, Route } from "react-router-dom";
// import { routes } from "./routes";
import React, { useRef, useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

function Main() {
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [linkHome, setlinkHome] = useState(false);
  const [linkAbout, setlinkAbout] = useState(false);
  const [linkProject, setlinkProject] = useState(false);
  const [linkResume, setlinkResume] = useState(false);
  const [linkContact, setlinkContact] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      console.log(home.current.offsetTop);
      console.log(about.current.offsetTop);
      if (
        window.pageYOffset >= home.current.offsetTop &&
        window.pageYOffset < about.current.offsetTop
      ) {
        setlinkHome(true);
      } else {
        setlinkHome(false);
      }
      if (
        window.pageYOffset >= about.current.offsetTop &&
        window.pageYOffset < project.current.offsetTop
      ) {
        setlinkAbout(true);
      } else {
        setlinkAbout(false);
      }
      if (
        window.pageYOffset >= project.current.offsetTop &&
        window.pageYOffset < resume.current.offsetTop
      ) {
        setlinkProject(true);
      } else {
        setlinkProject(false);
      }

      if (
        window.pageYOffset >= resume.current.offsetTop &&
        window.pageYOffset < contact.current.offsetTop
      ) {
        setlinkResume(true);
      } else {
        setlinkResume(false);
      }

      if (window.pageYOffset >= contact.current.offsetTop) {
        setlinkContact(true);
      } else {
        setlinkContact(false);
      }

      if (window.pageYOffset > 700) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  return (
    <div className="Main">
      {showScrollTopButton && (
        <FaAngleDoubleUp className="top-btn-position" onClick={scrollTop} />
      )}

      <div className="side-nav">
        <ul>
          <li
            className={linkHome ? "link-active" : "link"}
            onClick={() => scrollToSection(home)}
          >
            Home
          </li>
          <li
            className={linkAbout ? "link-active" : "link"}
            onClick={() => scrollToSection(about)}
          >
            About
          </li>
          <li
            className={linkProject ? "link-active" : "link"}
            onClick={() => scrollToSection(project)}
          >
            Project
          </li>
          <li
            className={linkResume ? "link-active" : "link"}
            onClick={() => scrollToSection(resume)}
          >
            Resume
          </li>
          <li
            className={linkContact ? "link-active" : "link"}
            onClick={() => scrollToSection(contact)}
          >
            Contact
          </li>
        </ul>
      </div>
      <div id="home" ref={home}>
        <Home />
        <p class="linking" onClick={() => scrollToSection(about)}>
          About me <AiOutlineArrowRight className="arrow"/>
        </p>
      </div>
      <div id="about" ref={about}>
        <About />
        <p class="linking" onClick={() => scrollToSection(project)}>
          Have a look at my projects <AiOutlineArrowRight className="arrow"/>
        </p>
      </div>
      <div id="project" ref={project}>
        <Project />

        <p class="linking" onClick={() => scrollToSection(resume)}>
          Go through my resume <AiOutlineArrowRight className="arrow" />
        </p>
      </div>
      <div id="resume" ref={resume}>
        <Resume />
        <p class="linking" onClick={() => scrollToSection(contact)}>
          {" "}
          Lets get in touch <AiOutlineArrowRight className="arrow"/>
        </p>
      </div>
      <div id="contact" ref={contact}>
        <Contact />
        <p class="linking" onClick={() => scrollToSection(home)}>
          {" "}
          Go Back <AiOutlineArrowRight className="arrow" />
        </p>
      </div>
      {/* <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.project} element={<Project />} />
        <Route path={routes.resume} element={<Resume />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default Main;
