import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Collapse } from "react-bootstrap";

function CourseCard(props) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      className="course-card-view"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        transition: "all 0.3s ease-in-out",
        transform: open ? "scale(1.02)" : "scale(1)",
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {props.courseNumber}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "1.2rem" }}>
          {props.courseName}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>
          {!open && props.description}
        </Card.Text>
        <Collapse in={open}>
          <div>
            <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>
              <strong>What I have done:</strong> <br />
              {props.whatIDone}
            </Card.Text>
            <Card.Text style={{ textAlign: "justify", marginTop: "10px" }}>
              <strong>What I have learnt:</strong> <br />
              {props.whatILearnt}
            </Card.Text>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
