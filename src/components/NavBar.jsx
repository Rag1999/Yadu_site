import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import logoBrain from "../assets/img/logo_brain.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon8 from "../assets/img/ResearchGate_noBackground.png";
import navIcon5 from "../assets/img/OSF logo.jpg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logoBrain} className="brain" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#educations"
                className={
                  activeLink === "educations"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("educations")}
              >
                Education
              </Nav.Link>

              <Nav.Link
                href="#teachings"
                className={
                  activeLink === "teachings"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("teachings")}
              >
                Teaching
              </Nav.Link>

              <Nav.Link
                href="#publications"
                className={
                  activeLink === "publications"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Publications
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/yadurshana-sivashankar-phd-883213158/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="linked" src={navIcon1} alt="" />
                </a>
              </div>

              <div className="social-icon">
                <a
                  href="https://osf.io/xu7aq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="osf" src={navIcon5} alt="" />
                </a>
              </div>

              <div className="social-icon">
                <a
                  href="https://www.researchgate.net/profile/Yadurshana-Sivashankar-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="research" src={navIcon8} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
export default NavBar;
