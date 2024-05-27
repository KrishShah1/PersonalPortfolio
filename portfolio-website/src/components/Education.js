import React from 'react';
import { Container } from 'react-bootstrap';

const Education = () => {
  return (
    <Container className="my-5" id="education">
      <h2 className="text-center">Education</h2>
      <div>
        <h4>Bachelor of Science: Computer Engineering</h4>
        <p>University of California, Riverside - Riverside, CA</p>
        <p>UCR Honors Program</p>
        <p>Chancellor's and Dean's Honor Roll</p>
        <p>National Engineering Honor Society - Tau Beta Pi</p>
        <p>Completing Masters in Computer Engineering by 2025</p>
      </div>

      <div>
        <h4>High School Diploma</h4>
        <p>Ruben S Ayala High School - Chino Hills, CA</p>
        <p>Graduated as an AP Scholar and with Honors</p>
        <p>Member of the National Honor Society</p>
      </div>
    </Container>
  );
}

export default Education;
