import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruvesh Shyara </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            <br />
            <FaGraduationCap className="purple" /> <strong>Education:</strong>
            <br />
            • B.Tech in Computer Science - Rai University - CodingGita
            <br />
            • Full Stack Development 
            <br />
            <br />
            I am passionate about full-stack development and always eager to learn new technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket/badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Stock Market Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistency and curiosity drive innovation!" 
          </p>
          <footer className="blockquote-footer">Dhruvesh Shyara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
