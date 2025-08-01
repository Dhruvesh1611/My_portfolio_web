import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCard";

// Import certificate images
import cssCert from "../../Assets/certificate/CSS (Basic).png";
import reactCert from "../../Assets/certificate/Frontend Developer (React).png";
import nodeCert from "../../Assets/certificate/Node (Basic).png";
import psCert from "../../Assets/certificate/Problem Solving (Basic).png";
import azureCert from "../../Assets/certificate/Introduction to the Basics of Azure Services.png";
import docDBCert from "../../Assets/certificate/Getting Started with Amazon DocumentDB.png";
import glbCert from "../../Assets/certificate/gateway load balancer.png";

function Certificates() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "CSS Basic",
      issuer: "HackerRank",
      date: "2024",
      certificateLink: "https://www.hackerrank.com/certificates/e72e9d42799c",
      hasIframe: false,
      image: cssCert
    },
    {
      title: "React Basic",
      issuer: "HackerRank",
      date: "2024",
      certificateLink: "https://www.hackerrank.com/certificates/065ed799b22f",
      hasIframe: false,
      image: reactCert
    },
    {
      title: "Node Basic",
      issuer: "HackerRank",
      date: "2024",
      certificateLink: "https://www.hackerrank.com/certificates/ceb3ab163e6d",
      hasIframe: false,
      image: nodeCert
    },
    {
      title: "Frontend Developer",
      issuer: "HackerRank",
      date: "2024",
      certificateLink: "https://www.hackerrank.com/certificates/cc7dcbd6558a",
      hasIframe: false,
      image: reactCert
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "2024",
      certificateLink: "https://www.hackerrank.com/certificates/0625153f0783",
      hasIframe: false,
      image: psCert
    },
    {
      title: "Azure Services (Basics)",
      issuer: "SimpliLearn",
      date: "2024",
      certificateLink: "https://simpli-web.app.link/e/N5LenkEbDTb",
      hasIframe: false,
      image: azureCert
    },
    {
      title: "Getting Started with Amazon DocumentDB",
      issuer: "SimpliLearn",
      date: "2024",
      certificateLink: "https://simpli-web.app.link/e/uPhDpKxwETb",
      hasIframe: false,
      image: docDBCert
    },
    {
      title: "Getting Started with Gateway Load Balancer",
      issuer: "SimpliLearn",
      date: "2024",
      certificateLink: "https://simpli-web.app.link/e/sq0S9jMwETb",
      hasIframe: false,
      image: glbCert
    }
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  return (
    <Container fluid className="certificate-section" style={{ paddingTop: "100px", minHeight: "calc(100vh - 70px)" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "40px" }}>
          Here are some of my professional certifications.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {certificates.map((certificate, index) => (
            <Col md={4} className="certificate-card" key={index} style={{ marginBottom: "30px", height: "100%" }}>
              <CertificateCard
                title={certificate.title}
                issuer={certificate.issuer}
                date={certificate.date}
                hasIframe={certificate.hasIframe}
                certificateLink={certificate.certificateLink}
                image={certificate.image}
                onClick={() => handleCertificateClick(certificate)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="certificate-modal"
      >
        <Modal.Header closeButton style={{ backgroundColor: "#1d1d1d", borderBottom: "none" }}>
          <Modal.Title style={{ color: "white" }}>{selectedCertificate?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1d1d1d", padding: "20px", textAlign: "center" }}>
          <p style={{ color: "white", marginBottom: "20px" }}>
            Click the button below to view the certificate.
          </p>
          <a
            href={selectedCertificate?.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              backgroundColor: "#c770f0",
              borderColor: "#c770f0",
              padding: "10px 20px"
            }}
          >
            View Certificate
          </a>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certificates; 