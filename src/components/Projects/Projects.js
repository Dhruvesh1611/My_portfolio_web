import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VideoComponent from "./VideoComponent";
import shyaraGoldImg from "../../Assets/Projects/shyaragold.png";
import eatClubImg from "../../Assets/Projects/eatclub.png";
import rollsRoyceImg from "../../Assets/Projects/rollsroyce.png";
import libasImg from "../../Assets/Projects/libas.png";
import gameImg from "../../Assets/Projects/game.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = useMemo(() => [
    {
      imgPath: shyaraGoldImg,
      isBlog: false,
      title: "Shyara Gold",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      ghLink: "https://github.com/codinggita/shyara_gold",
      demoLink: "https://shyara-gold.netlify.app/",
      category: ["mern", "react","api"]
    },
    {
      imgPath: eatClubImg,
      isBlog: false,
      title: "EatClub Clone",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      ghLink: "https://github.com/Dhruvesh1611/website1-Eat-club-",
      demoLink: "https://eatclubclonecg.netlify.app/",
      category: ["htmlcss"]
    },
    {
      imgPath: rollsRoyceImg,
      isBlog: false,
      title: "Rolls-Royce Clone",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      ghLink: "https://github.com/Dhruvesh1611/website2-rolls-royce-",
      demoLink: "https://rollsroyceclonecg.netlify.app/",
      category: ["htmlcss"]
    },
    {
      imgPath: libasImg,
      isBlog: false,
      title: "Libas Clone",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      ghLink: "https://github.com/Dhruvesh1611/website3-libas-",
      demoLink: "https://libas-web.netlify.app/",
      category: ["htmlcss"]
    },
    {
      imgPath: gameImg,
      isBlog: false,
      title: "Snake Game",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"],
      ghLink: "https://github.com/Dhruvesh1611/snake-game",
      demoLink: "https://snake-game-demo.netlify.app/",
      category: ["game"]
    },
    {
      imgPath: require("../../Assets/Projects/docscanx.png"), // Add your image to Assets/Projects and update the filename if needed
      isBlog: false,
      title: "DocScanX",
      technologies: ["UI/UX Design"],
      ghLink: "https://www.figma.com/design/nLO9RK2WTMH5gae7dKFh1A/Untitled?node-id=0-1&t=tLzv08ikjf1RfFbU-1",
      demoLink: "https://www.figma.com/design/nLO9RK2WTMH5gae7dKFh1A/Untitled?node-id=0-1&t=tLzv08ikjf1RfFbU-1",
      category: ["uiux"]
    }
  ], []); // Empty dependency array since these values are static

  // Get unique categories from all projects
  const categories = useMemo(() => {
    const uniqueCategories = new Set();
    projects.forEach(project => {
      project.category.forEach(cat => uniqueCategories.add(cat));
    });
    return Array.from(uniqueCategories);
  }, [projects]);

  // Remove 'react' from categories for filter buttons
  const filteredCategories = categories.filter(category => category !== 'react');

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  // Function to get button variant based on active filter
  const getButtonVariant = (category) => {
    return activeFilter === category ? "primary" : "outline-primary";
  };

  // Function to get display name for category
  const getCategoryDisplayName = (category) => {
    const displayNames = {
      mern: "MERN Projects",
      react: "React Projects",
      api: "API Projects",
      game: "Games",
      javascript: "JavaScript Projects",
      htmlcss: "HTML/CSS Projects"
    };
    return displayNames[category] || category.charAt(0).toUpperCase() + category.slice(1) + " Projects";
  };

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

        {/* Video Section - Always visible */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={8} className="project-video">
            <h2 className="purple">Shyara Gold Demo</h2>
            <VideoComponent />
          </Col>
        </Row>

        {/* Filter Buttons */}
        <div className="filter-buttons" style={{ marginBottom: "20px", textAlign: "center" }}>
          <Button
            variant={getButtonVariant("all")}
            onClick={() => setActiveFilter("all")}
            className="mx-2 mb-2"
            type="button"
            style={{
              backgroundColor: activeFilter === "all" ? "#c770f0" : "transparent",
              borderColor: "#c770f0",
              color: activeFilter === "all" ? "white" : "#c770f0",
              fontWeight: "bold",
              padding: "8px 20px"
            }}
          >
            All Projects
          </Button>
          {filteredCategories.map((category) => (
          <Button
              key={category}
              variant={getButtonVariant(category)}
              onClick={() => setActiveFilter(category)}
            className="mx-2 mb-2"
            type="button"
              style={{
                backgroundColor: activeFilter === category ? "#c770f0" : "transparent",
                borderColor: "#c770f0",
                color: activeFilter === category ? "white" : "#c770f0",
                padding: "8px 20px"
              }}
            >
              {getCategoryDisplayName(category)}
          </Button>
          ))}
        </div>

        {/* Project Cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="d-flex align-items-stretch">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  technologies={project.technologies}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p style={{ color: "white", textAlign: "center" }}>
                No projects found in this category.
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
