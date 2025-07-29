import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About GreenZen</h5>
            <p>
              GreenZen is a platform dedicated to promoting environmental consciousness and sustainable living. Join our community to make a positive impact on the planet.
            </p>
          </Col>
          <Col md={2} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/calculator" className="text-white">Carbon Calculator</a></li>
              <li><a href="/habits" className="text-white">Habit Tracker</a></li>
              <li><a href="/events" className="text-white">Green Events</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="#" className="text-white me-3"><FaInstagram size={24} /></a>
              <a href="#" className="text-white"><FaLinkedin size={24} /></a>
            </div>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Newsletter</h5>
            <p>Stay updated with our latest news and tips.</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="success" type="submit" className="mt-2">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 GreenZen. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;