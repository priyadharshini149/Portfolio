import "./sideNav.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
function SideNav() {
  const location = useLocation();
  return (
    <div>
      <div className="side-nav">
        <ul>
          <li>
            <Link
              to={routes.home}
              className={location.pathname === routes.home ? "link-active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={routes.about}
              className={
                location.pathname === routes.about ? "link-active" : ""
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={routes.project}
              className={
                location.pathname === routes.project ? "link-active" : ""
              }
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to={routes.resume}
              className={
                location.pathname === routes.resume ? "link-active" : ""
              }
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to={routes.contact}
              className={
                location.pathname === routes.contact ? "link-active" : ""
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
