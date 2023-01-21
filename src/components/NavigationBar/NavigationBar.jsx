import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../App";
import styles from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <Navbar
      sticky="top"
      expanded={expanded}
      variant="dark"
      expand="lg"
      style={{
        padding: "0.5em",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.5)",
        background: "rgba(36,36,36,1)",
      }}
    >
      <Container fluid>
        <Navbar.Brand style={{ color: "white", fontWeight: "500" }}>
          Sahil Gupta
        </Navbar.Brand>
        <Navbar.Toggle
          className="ms-auto"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={props.currentTab}
            onSelect={(key) => props.setCurrentTab(key)}
          >
            <Nav.Link
              eventKey="home"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="skills"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              eventKey="experience"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              eventKey="projects"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              eventKey="leadership"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Leadership
            </Nav.Link>
            <Nav.Link
              eventKey="achievements"
              className={styles.navLink}
              onClick={() => setExpanded(false)}
            >
              Achievements
            </Nav.Link>
            <div>
              {isDarkMode ? (
                <MdDarkMode color="#FEFCD7" size={25} onClick={toggleTheme} />
              ) : (
                <MdLightMode color="#FEFCD7" size={25} onClick={toggleTheme} />
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
