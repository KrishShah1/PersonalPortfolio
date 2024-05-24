import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Extracurriculars = () => {
  return (
    <Container className="my-5" id="extracurriculars">
      <h2 className="text-center">Extracurricular Activities</h2>
      <Row>
        <Col md={6}>
          <h4>Hackathons</h4>
          <p>Participated in XYZ Hackathon...</p>
        </Col>
        <Col md={6}>
          <h4>Volunteer Work</h4>
          <p>Volunteer at ABC Organization...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Extracurriculars;
