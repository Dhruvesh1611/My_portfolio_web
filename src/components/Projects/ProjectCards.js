import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, description, ghLink, demoLink, isBlog, imgPath }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
        </Button>
        {!isBlog && demoLink && (
          <Button variant="primary" href={demoLink} target="_blank" style={{ marginLeft: "10px" }}>
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

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
        <ProjectCards key={index} {...project} />
      ))}
    </div>
  );
}