import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

export default function Navigationbar () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand className="big-font brand"><Link className="noLine" to="/">شریف پاب</Link></Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-end" style={{width: "100%"}}>
            <NavDropdown title="آرشیو" id="basic-nav-dropdown" className="medium-font">
              <NavDropdown.Item href="#action/3.1" className="medium-font center">نشریه ها</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="medium-font center">عکس ها</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="medium-font"><Link className="noLine" to="/">خانه</Link></Nav.Link>
            <Nav.Link className="medium-font"><Link className="noLine" to="/login">ورود</Link></Nav.Link>
            <Nav.Link className="medium-font"><Link className="noLine" to="/signup">ثبت نام</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
