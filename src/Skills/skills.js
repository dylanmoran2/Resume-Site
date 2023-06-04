import React from "react";
import "./skills.css";
import "../variables.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";

function Skills() {
  return (
    <div className="Skills row animate-scroll">
      <h1 className="col-2"></h1>
      <h2 className="col-8">Skills I've Learned</h2>
      <h1 className="col-2"></h1>

      <div className="col-md-6 card">
        <h3 className="col-6 sub-title">Languages</h3>
        <ul>
          <li>Java</li>
          <li>C</li>
          <li>Swift</li>
          <li>MIPS Assembly</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div className="col-md-6 col-12 card">
        <h3 className="col-6  sub-title">Tools</h3>
        <ul>
          <li>GitHub</li>
          <li>Xcode</li>
          <li>Amazon Web Services</li>
          <li>Command Line</li>
          <li>ChatGPT</li>
          <li>UML Diagrams</li>
          <li>Latext Documents</li>
          <li>XMPP Protocol</li>
          <li>React</li>
          <li>React Native</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
