import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

import "./Navbar.css";
import { useState } from "react";
import MainBtn from "../MainBtn/MainBtn";

const NavBar = ({ logo, links }) => {

  const [isActive, setIsActive] = useState(0);

  const handleClick = (index) => {
    setIsActive(index)
  }

  return (
    <div className="navbar shadow-1 bg-white py-0">
      <Container>
        <Navbar key="sm" expand="xl" className="w-100">
          <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="logo" loading="lazy" />
          </Navbar.Brand>
          <div className="nav-content d-flex justify-content-end flex-grow-1">
          <Navbar.Toggle className="border-0 shadow-none" aria-controls={`offcanvasNavbar-expand-${"xl"}`} />
            {/* Start Offcanvas */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"xl"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
              placement="end"
              data-bs-theme="dark"
            >
              {/* Start Header */}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"xl"}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              {/* End Header */}
              {/* Start Body */}
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 h-100">
                  {/* Links */}
                  {links.map((link, index) => {
                    return link.dropdown ? (
                      <NavDropdown
                        key={index}
                        title={link.text}
                        id={`offcanvasNavbarDropdown-expand-${"xl"}`}
                        className="fw-bold px-3 px-xl-0"
                      >
                        <NavDropdown.Item href="#action3">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <Nav.Link key={index} href={link.url} className={isActive == index? "active px-3 fw-bold" : "px-3 fw-bold"} onClick={() => handleClick(index)}>
                        {link.text}
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Offcanvas.Body>
              {/* End Body */}
            </Navbar.Offcanvas>
            {/* End Offcanvas */}
            <MainBtn />
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
