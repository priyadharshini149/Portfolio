import "./App.css";
import React from "react";
import Home from "./Home/home";
import About from "./About/about";
import Project from "./Project/project";
import Resume from "./Resume/resume";
import Contact from "./Contact/contact";
import SideNav from "./components/sideNav/sideNav";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
function App() {
  return (
    <div className="App">
      <SideNav></SideNav>

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.project} element={<Project />} />
        <Route path={routes.resume} element={<Resume />} />
        <Route path={routes.contact} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
