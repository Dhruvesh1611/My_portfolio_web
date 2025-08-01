import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";

function CertificateCard(props) {
  return (
    <Card 
      className="certificate-card-view" 
      onClick={props.onClick} 
      style={{ 
        
        cursor: "pointer",
        height: "250px", // Fixed height for all cards
        width: "100%",   // Full width of container
        marginBottom: "40px",
        
      }}
    >
      <Card.Body 
        style={{ 
          display: "flex",
          alignItems: "center", 
          gap: "10px",
          height: "100%",
          padding: "20px"
        }}
      >
        <div style={{ 
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%"
        }}>
          <div>
            <Card.Title style={{ fontWeight: "bold", color: "#c770f0", marginBottom: "15px" }}>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              <div className="certificate-details">
                <p><strong>Issuer:</strong> {props.issuer}</p>
                <p><strong>Date:</strong> {props.date}</p>
              </div>
            </Card.Text>
          </div>
          <Button 
            variant="primary" 
            onClick={(e) => {
              e.stopPropagation();
              window.open(props.certificateLink, '_blank');
            }}
            style={{
              backgroundColor: "#c770f0",
              borderColor: "#c770f0",
              marginRight: "10px",
              width: "fit-content"
            }}
          >
            <FaCertificate /> &nbsp; View Certificate
          </Button>
        </div>
        <div style={{ 
          width: "175px",
          height: "170px",
          borderRadius: "10px",
          overflow: "hidden",
          flexShrink: 0,
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}>
          <img 
            src={props.image || "https://via.placeholder.com/150x150?text=Cert"} 
            alt={props.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "white"
            }}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard; 