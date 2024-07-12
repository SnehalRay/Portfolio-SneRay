import React from "react";
import { Container } from "react-bootstrap";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import Tools from "./Tools";

function TechStackContainer() {
  return (
    <Container>
      <h1 className="project-heading">
        <strong className="purple">Languages</strong>
      </h1>
      <Languages />
      <h1 className="project-heading">
        <strong className="purple">Frameworks</strong>
      </h1>
      <Frameworks />
      <h1 className="project-heading">
        <strong className="purple">Databases</strong>
      </h1>
      <Databases />
      <h1 className="project-heading">
        <strong className="purple">Tools</strong>
      </h1>
      <Tools />
    </Container>
  );
}

export default TechStackContainer;
