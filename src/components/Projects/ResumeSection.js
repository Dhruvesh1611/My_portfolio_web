import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import figmaResume from "../../Assets/Resume/figma-resume.png";
import modernResume from "../../Assets/Resume/modern-resume.png";
import simpleResume from "../../Assets/Resume/simple-resume.png";
import professionalResume from "../../Assets/Resume/professional-resume.png";

function ResumeSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);

  const resumes = [
    {
      title: "Figma Resume",
      image: figmaResume,
      description: "A modern resume designed in Figma with creative layouts and visual elements",
      downloadLink: "#" // Add your actual resume download link here
    },
    {
      title: "Modern Resume",
      image: modernResume,
      description: "A contemporary resume template with clean design and professional layout",
      downloadLink: "#" // Add your actual resume download link here
    },
    {
      title: "Simple Resume",
      image: simpleResume,
      description: "A minimalist resume template focusing on content and readability",
      downloadLink: "#" // Add your actual resume download link here
    },
    {
      title: "Professional Resume",
      image: professionalResume,
      description: "A traditional resume format with professional styling and clear hierarchy",
      downloadLink: "#" // Add your actual resume download link here
    }
  ];

  const handleResumeClick = (resume) => {
    setSelectedResume(resume);
    setShowModal(true);
  };

  const handleDownload = (e, downloadLink) => {
    e.stopPropagation();
    window.open(downloadLink, '_blank');
  };

  return (
    <Container className="resume-section">
      <h2 className="project-heading">
        My <strong className="purple">Resumes</strong>
      </h2>
      <p style={{ color: "white", marginBottom: "2rem" }}>
        Choose from different resume styles to view or download
      </p>

      <Row className="justify-content-center">
        {resumes.map((resume, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="resume-card">
            <div 
              className="resume-box" 
              onClick={() => handleResumeClick(resume)}
              style={{
                borderRadius: "10px",
                padding: "15px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
            >
              <img 
                src={resume.image} 
                alt={resume.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  objectFit: "cover",
                  aspectRatio: "1/1.4"
                }}
              />
              <h3 style={{ 
                marginBottom: "8px",
                fontSize: "1rem",
                textAlign: "center"
              }}>
                {resume.title}
              </h3>
              <p style={{ 
                textAlign: "center", 
                marginBottom: "10px",
                fontSize: "0.8rem"
              }}>
                {resume.description}
              </p>
              <Button
                variant="outline-primary"
                onClick={(e) => handleDownload(e, resume.downloadLink)}
                style={{ 
                  marginTop: "auto",
                  fontSize: "0.8rem",
                  padding: "5px 10px"
                }}
              >
                <FaDownload style={{ marginRight: "4px" }} />
                Download
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="resume-modal"
      >
        <Modal.Header closeButton style={{ backgroundColor: "#1d1d1d", borderBottom: "none" }}>
          <Modal.Title style={{ color: "white" }}>{selectedResume?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1d1d1d", padding: "0" }}>
          {selectedResume && (
            <>
              <img
                src={selectedResume.image}
                alt={selectedResume.title}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "20px", textAlign: "center" }}>
                <Button
                  variant="primary"
                  onClick={(e) => handleDownload(e, selectedResume.downloadLink)}
                  style={{
                    backgroundColor: "#c770f0",
                    borderColor: "#c770f0",
                    padding: "10px 20px"
                  }}
                >
                  <FaDownload style={{ marginRight: "8px" }} />
                  Download Resume
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ResumeSection;
 