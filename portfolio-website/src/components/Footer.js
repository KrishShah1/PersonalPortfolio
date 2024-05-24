import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3" id="contact">
      <Container>
        <Row>
          <Col>
            <p>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a> | 
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white"> GitHub</a> | 
              <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="text-white"> Email</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;