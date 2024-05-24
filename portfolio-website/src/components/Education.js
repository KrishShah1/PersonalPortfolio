import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Education = () => {
  return (
    <Container className="my-5" id="education">
      <h2 className="text-center">Education</h2>
      <Row>
        <Col md={6}>
          <h4>University Name</h4>
          <p>Bachelor of Science in Computer Science, 2024</p>
        </Col>
        <Col md={6}>
          <h4>Skills</h4>
          <p>JavaScript, React, Python, Java, HTML, CSS...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
