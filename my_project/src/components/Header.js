import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './Header.css'; // For custom styles

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname.startsWith('/dashboard');

  const handleLogoClick = () => {
    console.log('isDashboard:', isDashboard);
    if (isDashboard) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  const mainLinks = (
    <>
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
      <LinkContainer to="/signup">
        <Button variant="success" className="cta-button-header">Sign Up</Button>
      </LinkContainer>
    </>
  );

  const dashboardLinks = (
    <>
      <LinkContainer to="/dashboard">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/dashboard/profile">
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/dashboard/settings">
        <Nav.Link>Settings</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/">
        <Button variant="outline-success">Logout</Button>
      </LinkContainer>
    </>
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className="header-navbar">
      <Container>
        <Navbar.Brand onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {isDashboard ? dashboardLinks : mainLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
