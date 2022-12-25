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
            <Nav.Link eventKey="home" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link eventKey="skills" className={styles.navLink}>
              Skills
            </Nav.Link>
            <Nav.Link eventKey="experience" className={styles.navLink}>
              Experience
            </Nav.Link>
            <Nav.Link eventKey="projects" className={styles.navLink}>
              Projects
            </Nav.Link>
            <Nav.Link eventKey="leadership" className={styles.navLink}>
              Leadership
            </Nav.Link>
            <Nav.Link eventKey="achievements" className={styles.navLink}>
              Achievements
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
