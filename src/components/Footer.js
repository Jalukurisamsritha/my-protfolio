import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'; // Importing the CSS file

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <h2>Samsritha Jalukuri</h2>
            <p>Phone: <a href="tel:6305486022">6305486022</a></p>
            <p>Email: <a href="mailto:jalukurisamsritha1718@gmail.com">jalukurisamsritha1718@gmail.com</a></p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/samsritha-jalukuri-225058247/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LinkedIn Profile</a>
            </p>
            <p>
              GitHub: <a href="https://github.com/Jalukurisamsritha" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">GitHub Profile</a>
            </p>
            {/* Add more social media links here if desired */}
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;