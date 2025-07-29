import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from './Logo';
import './Header.css'; // For custom styles

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className="header-navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/carbon-calculator">
              <Nav.Link>Carbon Calculator</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/habit-tracker">
              <Nav.Link>Habit Tracker</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/events">
              <Nav.Link>Green Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/publication">
              <Nav.Link>Publication</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/forum">
              <Nav.Link>Community Forum</Nav.Link>
            </LinkContainer>
            <Button variant="success" className="cta-button-header">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
