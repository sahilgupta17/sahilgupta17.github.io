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
          onClick={() => props.setCurrentTab("home")}
          style={{ color: "white", fontWeight: "500" }}
        >
          Sahil Gupta
        </Navbar.Brand>
        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={props.currentTab}
            onSelect={(key) => props.setCurrentTab(key)}
          >
            <Nav.Link eventKey="home">Home</Nav.Link>
            <Nav.Link eventKey="skills">Skills</Nav.Link>
            <Nav.Link eventKey="experience">Experience</Nav.Link>
            <Nav.Link eventKey="projects">Projects</Nav.Link>
            <Nav.Link eventKey="achievements">Achievements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
