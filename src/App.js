import "./App.css";
import React from "react";
import Main from "./Main/main";


// import SideNav from "./components/sideNav/sideNav";
// import { Routes, Route } from "react-router-dom";
// import { routes } from "./routes";
// import { useRef } from "react";
function App() {

  return (
    <div className="App">
      
     <Main/>
   
  
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

export default App;
