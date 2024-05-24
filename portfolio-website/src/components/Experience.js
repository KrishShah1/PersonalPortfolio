import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className="my-5" id="experience">
      <h2 className="text-center">Experience</h2>
      <Row>
        <Col md={6}>
          <h4>Company Name</h4>
          <p>Role: Software Developer</p>
          <p>Responsibilities: Developed web applications...</p>
        </Col>
        <Col md={6}>
          <h4>Projects</h4>
          <p>Project Name: Description...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
