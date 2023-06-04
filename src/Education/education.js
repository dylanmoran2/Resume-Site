import React from "react";
import "./education.css";
import "../variables.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";
import Section from "../section.js";
import { FaBook } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

function Education() {
  return (
    <Section>
      <section id="education" className="Education animate-scroll ">
        <div className="">
          <div className="row">
            <h1 className="col-md-4 "></h1>
            <h2 className="col-md-4 col-12">Education</h2>
            <h1 className="col-md-4 "></h1>
          </div>
          <div className="row">
            <h1 className="col-1"></h1>
            <h3 className="col-10 sub-title">Collegiate</h3>
            <h1 className="col-1"></h1>
          </div>

          <div className="row">
            <h1 className="col-md-4 col-1"></h1>
            <img
              src="/ualbs.jpg"
              className="col-md-4 col-10"
              alt="Ualbany logo"
            ></img>
            <h1 className="col-md-4 "></h1>
          </div>

          <div className="row">
            <h1 className="col-md-3"></h1>
            <div className="col-12 col-md-6 centered-list card">
              <h4 className="card-title">
                College of Engineering and Applied Sciences
              </h4>
              <ul>
                <li>Computer Science, Bachelor of Arts</li>
                <li>GPA: 3.2</li>
              </ul>
            </div>
          </div>

          <div className="row centered-list card">
            <h1 className="col-md-4"></h1>
            <h4 className="col-12 col-md-4 card-title">
              Scholarships and Honors:
            </h4>
            <ul>
              <li>NYS STEM Scholarship</li>
              <li>Presidential Scholarship</li>
              <li>
                Dean's List:
                <ol>
                  <li>Fall 2019</li>
                  <li>Spring 2020</li>
                  <li>Fall 2022</li>
                </ol>
              </li>
            </ul>
          </div>

          <div className="row">
            <h1 className="col-2"></h1>
            <h3 className="col-8 sub-title">Courses Taken</h3>
            <h1 className="col-2"></h1>
          </div>

          <div className="row classes">
            <div className="col-md-6 card">
              <h4 className="col-7 col-md-7 card-title">Computer Science</h4>
              <ul>
                <li>
                  <FaLaptopCode className="icon" />
                  Introduction to Computer Science
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Data Structures
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Discrete Structures
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Principals of Programming Languages
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Societal and Ethical Implications of Computing
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Design and Analysis of Algorithms
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Programming at the Hardware Software Interface
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Assembly Programming and Computer Organization
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Software Engineering
                </li>
              </ul>
            </div>

            <div className="col-md-6 card">
              <h4 className="col-md-7 col-7 card-title">Mathematics</h4>
              <ul>
                <li>
                  <FaCalculator className="icon" />
                  Calculus I
                </li>
                <li>
                  <FaCalculator className="icon" />
                  Calculus II
                </li>
                <li>
                  <FaCalculator className="icon" />
                  Calculus III
                </li>
                <li>
                  <FaCalculator className="icon" />
                  Linear Algebra
                </li>
                <li>
                  <FaCalculator className="icon" />
                  Discrete Probability
                </li>
                <li>
                  <FaCalculator className="icon" />
                  Physics I
                </li>
              </ul>
            </div>
          </div>

          <div className="row classes card">
            <h1 className="col-md-3"></h1>
            <div className="col-md-6 col-8">
              <h4 className="col-md-12 card-title">Other Classes</h4>
              <ul>
                <li>
                  <FaLaptopCode className="icon" />
                  Cybersecurity Basics
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Cybersecurity
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Introduction to Web Technologies
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Introduction to Information Systems
                </li>
                <li>
                  <FaLaptopCode className="icon" />
                  Information Security in Business
                </li>
                <li>
                  <FaBook className="icon" />
                  Homeland Security
                </li>
                <li>
                  <FaBook className="icon" />
                  Emergency Preparedness
                </li>
                <li>
                  <FaBook className="icon" />
                  Human Trafficking
                </li>
                <li>
                  <FaBook className="icon" />
                  World in the 20th Century
                </li>
              </ul>
            </div>
            <h1 className="col-md-3"></h1>
          </div>
        </div>
      </section>
    </Section>
  );
}

export default Education;
