import "./resume.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";
import { Parallax } from "react-parallax";
import Nav from "./Navbar/nav.js";
import Header from "./Header/header.js";
import Education from "./Education/education.js";
import Section from "./section.js";
import Skills from "./Skills/skills.js";

function Resume() {
  return (
    <div className="col-12">
      <Nav />
      <Header />

      <Education />

      <Skills />
    </div>
  );
}

export default Resume;
