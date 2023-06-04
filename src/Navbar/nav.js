import React from "react";
import "./nav.css";
import "../variables.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";

function Nav() {
  return (
    <div className="nav-container col-12">
      <div className="row">
        <a className="link col-md-3 col-6" href="#education">
          EDUCATION
        </a>
        <a className="link col-md-3 col-6" href="#bio">
          BIOGRAPHY
        </a>
        <a className="link col-md-3 col-6" href="#interests">
          INTERESTS
        </a>
        <a className="link col-md-3 col-6" href="#contact">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default Nav;
