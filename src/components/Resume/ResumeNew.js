import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF.js worker setup


// Images and PDFs
import figmaImg from "../../Assets/Resume/figma-resume.png";
import modernImg from "../../Assets/Resume/modern-resume.png";
import simpleImg from "../../Assets/Resume/simple-resume.png";

import simplePDF from "../../Assets/Resume/Dhruvesh_Shyara_simple_resume.pdf";
import modernPDF from "../../Assets/Resume/Dhruvesh_Shyara_morden_Resume.pdf";
import figmaPDF from "../../Assets/Resume/Dhruvesh_Shyara_figma_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeGallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resumes = [
    {
      title: "Figma Resume",
      image: figmaImg,
      pdf: figmaPDF,
      description: "A modern resume designed in Figma with creative layouts.",
    },
    {
      title: "Modern Resume",
      image: modernImg,
      pdf: modernPDF,
      description: "A contemporary resume with a clean design.",
    },
    {
      title: "Simple Resume",
      image: simpleImg,
      pdf: simplePDF,
      description: "A minimalist resume focusing on clarity.",
    },
  ];

  const openModal = (resume) => {
    setSelectedResume(resume);
    setShowModal(true);
  };

  const handleDownload = (e, pdfFile) => {
    e.stopPropagation();
    window.open(pdfFile, "_blank");
  };

  return (
    <Container className="resume-section">
      <h2 className="project-heading">
        My <strong className="purple">Resumes</strong>
      </h2>
      <p style={{ color: "white", marginBottom: "2rem" }}>
        Click any resume to preview and download
      </p>

      <Row className="justify-content-center">
        {resumes.map((resume, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="resume-card">
            <div
              className="resume-box"
              onClick={() => openModal(resume)}
              style={{
                backgroundColor: "#1d1d1d",
                borderRadius: "10px",
                padding: "15px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
                  aspectRatio: "1/1.4",
                }}
              />
              <h3
                style={{ color: "white", fontSize: "1rem", textAlign: "center" }}
              >
                {resume.title}
              </h3>
              <p
                style={{
                  color: "#b8b8b8",
                  fontSize: "0.8rem",
                  textAlign: "center",
                }}
              >
                {resume.description}
              </p>
              <Button
                variant="outline-primary"
                onClick={(e) => handleDownload(e, resume.pdf)}
                style={{ marginTop: "auto", fontSize: "0.8rem", padding: "5px 10px" }}
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
        size="xl"
        centered
        className="resume-modal"
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#1d1d1d", borderBottom: "none" }}
        >
          <Modal.Title style={{ color: "white" }}>{selectedResume?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1d1d1d", padding: "0" }}>
          {selectedResume && (
            <>
              <div className="d-flex justify-content-center p-3">
                <Document file={selectedResume.pdf}>
                  <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
                </Document>
              </div>
              <div style={{ textAlign: "center", padding: "10px 0 20px" }}>
                <Button
                  variant="primary"
                  onClick={(e) => handleDownload(e, selectedResume.pdf)}
                  style={{
                    backgroundColor: "#c770f0",
                    borderColor: "#c770f0",
                    padding: "10px 20px",
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

export default ResumeGallery;
