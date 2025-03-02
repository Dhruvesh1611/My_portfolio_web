import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VideoComponent from "./VideoComponent";
import shyaraGoldImg from "../../Assets/Projects/shyaragold.png";
import eatClubImg from "../../Assets/Projects/eatclub.png";
import rollsRoyceImg from "../../Assets/Projects/rollsroyce.png";
import libasImg from "../../Assets/Projects/libas.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* Video Section */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={8} className="project-video">
            <h2 className="purple">Shyara Gold Demo</h2>
            <VideoComponent />
          </Col>
        </Row>

        {/* Project Cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shyaraGoldImg}
              isBlog={false}
              title="Shyara Gold"
              description="A jewelry e-commerce platform featuring best-selling jewelry, editorial content, and user-submitted designs. Built with the MERN stack for seamless performance."
              ghLink="https://github.com/codinggita/shyara_gold"
              demoLink="https://shyara-gold.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatClubImg}
              isBlog={false}
              title="EatClub Clone"
              description="A front-end clone of the EatClub website created to practice and perfect web design skills using HTML and CSS."
              ghLink="https://github.com/Dhruvesh1611/website1-Eat-club-"
              demoLink="https://eatclub-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rollsRoyceImg}
              isBlog={false}
              title="Rolls-Royce Clone"
              description="A front-end clone of the Rolls-Royce website created to practice and perfect web design skills using HTML and CSS."
              ghLink="https://github.com/Dhruvesh1611/website2-rolls-royce-"
              demoLink="https://rollsroyce-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={libasImg}
              isBlog={false}
              title="Libas Clone"
              description="A front-end clone of the Libas website created to practice and perfect web design skills using HTML and CSS."
              ghLink="https://github.com/Dhruvesh1611/website3-libas-"
              demoLink="https://libasclone.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
