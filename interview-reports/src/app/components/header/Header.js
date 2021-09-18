import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Header.css";

const Header = ({ logOut }) => {
  return (
    <header>
      <Navbar className="navStyle" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Interview Book</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-end"
          >
            <Nav className="d-flex align-items-center">
              <Link to="/" className="float">
                Home
              </Link>
              <button onClick={logOut}>Logout</button>
              {/* <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
