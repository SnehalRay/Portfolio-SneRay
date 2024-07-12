import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello People, I am <span className="purple">Snehal Ray </span>
             residing in <span className="purple"> Edmonton, Canada.</span>
            <br />
            I am currently a bachelor's student at the University of Alberta.
            <br />
            I am in my 3rd year of pursuing this degree with honors.
            <br />
            <br />
            I have participated in several hackathons including NatHacks, UACS, ACPC at the University of Alberta, and the University of Hackathon.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Red Dead, Fifa)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching sports like soccer and F1
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling to different countries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "When life gives you lemon, just drink orange juice because it is the best"{" "}
          </p>
          <footer className="blockquote-footer">Snehal Ray</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
