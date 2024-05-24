import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5" id="about">
      <Row>
        <Col md={8} className="mx-auto text-center">
          <h2>About Me</h2>
          <p>Hi, I'm John Doe, a passionate Full Stack Developer...</p>
          <Button href="resume.pdf" target="_blank" variant="primary">View Resume</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
