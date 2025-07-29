import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { blogData } from './blogData';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-section py-5">
      <Container>
        <h2 className="text-center mb-5 section-title-3">From Our Blog</h2>
        <Row>
          {blogData.map(post => (
            <Col key={post.id} md={4} className="mb-4">
              <Card className="h-100 blog-card">
                <Card.Img variant="top" src={post.image} />
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
  );
};

export default Blog;
