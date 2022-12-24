import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="lg"
      style={{
        padding: "0.5em",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.5)",
        background: "rgba(36,36,36,1)",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#home"
          style={{ color: "white", fontWeight: "500" }}
        >
          Sahil Gupta
        </Navbar.Brand>
        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
