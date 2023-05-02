import "./sideNav.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../../routes";
function SideNav() {
  const location = useLocation();
  return (
    <div>
      <div className="side-nav">
        <ul>
          <li>
            <a
              className={location.pathname === routes.home ? "link-active" : ""}
              href={routes.home}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={
                location.pathname === routes.about ? "link-active" : ""
              }
              href={routes.about}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={
                location.pathname === routes.project ? "link-active" : ""
              }
              href={routes.project}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={
                location.pathname === routes.resume ? "link-active" : ""
              }
              href={routes.resume}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className={
                location.pathname === routes.contact ? "link-active" : ""
              }
              href={routes.contact}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
