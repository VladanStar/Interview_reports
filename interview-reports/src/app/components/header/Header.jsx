import React from "react";
import { Container, Button } from "react-bootstrap";


const Header = () => {
  return (
    <Container fluid className="bg-primary py-2">
      <Container className="d-flex justify-content-between px-3">
        <h3 className="text-white">Interview Reports</h3>
        <Button className="text-primary bg-light">Candidates</Button>
      </Container>
    </Container>
  );
};

export default Header;