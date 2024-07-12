import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiNodejs } from "react-icons/di";
import { SiDjango, SiExpress, SiNextdotjs, SiTailwindcss, SiSpringboot } from "react-icons/si";

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
    </Row>
  );
}

export default Frameworks;
