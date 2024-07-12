import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mypic.jpeg"; // Updated to the new image path
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="gold"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              Hey there! I'm an adventurous international Computer Science student 
              from the University of Alberta, currently navigating my 3rd year of 
              studies with honors. I've been on a thrilling coding journey for 
              the past 4 years and have fallen head over heels in love with the 
              world of programming.
              <br />
              <br />I am well-versed in an array of programming languages including
              <i>
                <b className="gold"> Python, C, C++, Java, and Javascript.</b>
              </i>
              <br />
              <br />
              Whether I'm diving into the depths of algorithms or crafting 
              sleek web applications, my passion for technology drives me to 
              continually learn and create. Let's connect and explore the 
              infinite possibilities of tech together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">

              <img src={myImg} className="img-fluid" alt="avatar" />
            
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="gold">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SnehalRay"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/snehal-ray-4b2aa9293/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/snehalray10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
