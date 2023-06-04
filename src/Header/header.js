import React from "react";
import "./header.css";
import "../variables.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <header className="header-container">
        <div>
          <div className="row">
            <h1 className="name col-12 fade-in">Dylan Moran</h1>
          </div>
          <div className="row">
            <h3 className="col-12 fade-in">Aspiring Software Engineer</h3>
          </div>
          <div className="row img-container fade-in">
            <img src="/dylan.png" className="dylan" alt="Ualbany logo"></img>
          </div>

          <div className="row fade-in socials">
            <h1 className="col-2"></h1>
            <div className="col-8 space-above">
              <div className="icon-wrapper git">
                <a href="https://github.com/dylanmoran2">
                  <FaGithub />
                </a>
              </div>
              <div className="icon-wrapper insta">
                <a href="https://www.instagram.com/dylan__moran/">
                  <FaInstagram />
                </a>
              </div>
              <div className="icon-wrapper twitter">
                <a href="https://twitter.com/dylan__moran">
                  <FaTwitter />
                </a>
              </div>
              <div className="icon-wrapper linked">
                <a
                  href="https://www.linkedin.com/in/dylan-moran-66248618b/"
                  className="linked-bg"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="row resume">
            <a href="/dylanMoranResume.pdf" download="dylanMoranResume.pdf">
              Download My Resume
            </a>
          </div>
        </div>
      </header>
    </CSSTransition>
  );
}

export default Header;
