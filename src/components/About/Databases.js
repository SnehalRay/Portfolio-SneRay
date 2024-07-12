import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { SiFirebase, SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
      </Col>
    </Row>
  );
}

export default Databases;
