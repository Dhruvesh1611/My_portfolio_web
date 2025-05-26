import React from "react";
import { Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <div className="technologies">
            {props.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#c770f0",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  margin: "2px",
                  display: "inline-block",
                  fontSize: "0.9em"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </Card.Text>
        {"\n"}
        {"\n"}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

// Usage Example with Dhruvesh's Projects
const projects = [
  {
    title: "Shyara Gold",
    description: "An e-commerce platform showcasing best-selling jewelry items, user-submitted designs, and editorial content. Built with the MERN stack.",
    ghLink: "https://github.com/codinggita/shyara_gold",
    demoLink: "https://shyara-gold.onrender.com/best_selling_items",
    imgPath: "/images/shyara-gold.png"
  },
  {
    title: "EatClub Clone",
    description: "A front-end clone of the EatClub website, created using HTML and CSS to practice pixel-perfect UI replication.",
    ghLink: "https://github.com/Dhruvesh1611/website1-Eat-club-",
    imgPath: "/images/eatclub-clone.png"
  },
  {
    title: "Rolls-Royce Clone",
    description: "A front-end clone of the Rolls-Royce website, focusing on high-quality UI design using HTML and CSS.",
    ghLink: "https://github.com/Dhruvesh1611/website2-rolls-royce-",
    imgPath: "/images/rolls-royce-clone.png"
  }
];

export function ProjectList() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}