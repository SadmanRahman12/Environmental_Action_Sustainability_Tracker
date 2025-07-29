import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLeaf, FaCheckCircle, FaMapMarkerAlt, FaTree, FaSmog, FaTint } from 'react-icons/fa';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { blogData } from './blogData';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="hero-section-3">
        <div className="hero-overlay-3"></div>
        <Container className="hero-content-3 text-center text-white">
          <h1 className="display-3">Welcome to GreenZen</h1>
          <p className="lead">
            A new era of environmental consciousness starts with you.
          </p>
          <Button variant="success" size="lg" href="#">Join the Movement</Button>
        </Container>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-5 section-title-3">Our Community's Impact</h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="impact-card-3">
              <FaTree className="impact-icon-3 text-success" />
              <h3><CountUp end={12345} duration={3} /></h3>
              <p className="text-muted">Trees Planted</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="impact-card-3">
              <FaSmog className="impact-icon-3 text-primary" />
              <h3><CountUp end={6789} duration={3} /> kg</h3>
              <p className="text-muted">CO₂ Reduced</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="impact-card-3">
              <FaTint className="impact-icon-3 text-info" />
              <h3><CountUp end={98765} duration={3} /> L</h3>
              <p className="text-muted">Water Saved</p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="features-section-3 py-5">
        <Container>
          <h2 className="text-center mb-5 section-title-3 text-white">Everything You Need to Make a Difference</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center feature-card-3">
                <Card.Body>
                  <FaLeaf className="feature-icon-3 text-success" />
                  <Card.Title>Calculate Your Impact</Card.Title>
                  <Card.Text>
                    Our advanced calculator helps you understand your carbon footprint.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center feature-card-3">
                <Card.Body>
                  <FaCheckCircle className="feature-icon-3 text-success" />
                  <Card.Title>Track Your Habits</Card.Title>
                  <Card.Text>
                    Build sustainable habits with our dynamic tracking tools.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center feature-card-3">
                <Card.Body>
                  <FaMapMarkerAlt className="feature-icon-3 text-success" />
                  <Card.Title>Join Green Events</Card.Title>
                  <Card.Text>
                    Find and participate in local environmental initiatives.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="blog-section py-5">
        <Container>
          <h2 className="text-center mb-5 section-title-3">From Our Blog</h2>
          <Row>
            {blogData.slice(0, 3).map(post => (
              <Col key={post.id} md={4} className="mb-4">
                <Card className="h-100 blog-card">
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  {console.log('Image URL for ' + post.title + ': ' + post.image)}
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.excerpt}</Card.Text>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="success">Read More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="cta-section-3 text-center text-white py-5">
        <Container>
          <h2 className="display-4">Ready to Make a Change?</h2>
          <p className="lead">
            Join thousands of others on their journey to a more sustainable future.
          </p>
          <Button variant="outline-light" size="lg" href="#">Sign Up Now</Button>
        </Container>
      </div>
    </>
  );
};

export default Home;
