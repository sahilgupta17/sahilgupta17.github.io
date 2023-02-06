import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import { ThemeContext } from "../../App";
import styles from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  const navigationLinks = [
    "home",
    "skills",
    "experience",
    "projects",
    // "leadership",
    // "achievements",
  ];

  return (
    <Navbar
      fixed="top"
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
            {navigationLinks.map((link) => {
              return (
                <Nav.Link
                  eventKey={link}
                  href={`#${link}`}
                  className={styles.navLink}
                  onClick={() => setExpanded(false)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Nav.Link>
              );
            })}

            <div>
              {isDarkMode ? (
                <MdOutlineDarkMode
                  color="rgba(255, 255, 255, 0.6)"
                  size={25}
                  onClick={toggleTheme}
                />
              ) : (
                <MdOutlineLightMode
                  color="rgba(255, 255, 255, 0.6)"
                  size={25}
                  onClick={toggleTheme}
                />
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
