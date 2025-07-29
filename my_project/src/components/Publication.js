import React from 'react';
import { Link } from 'react-router-dom';
import './Publication.css';
import publicationData from './publicationData';

const Publication = () => {
  const renderPublications = (pubs) => {
    return pubs.map(pub => (
      <div key={pub.id} className="publication-item">
        <img src={pub.image} alt={pub.title} />
        <div className="publication-item-content">
          <h3>{pub.title}</h3>
          <p><strong>by {pub.author}</strong></p>
          <p>{pub.content.substring(0, 100)}...</p>
          <Link to={`/publication/${pub.slug}`}>Read More</Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="publication-container">
      <h1 className="publication-title">Publications</h1>
      
      <h2 className="publication-subtitle">Standard Publications</h2>
      <div className="publication-list">
        {renderPublications(publicationData.standard)}
      </div>

      <h2 className="publication-subtitle">Popular Publications</h2>
      <div className="publication-list">
        {renderPublications(publicationData.popular)}
      </div>

      <h2 className="publication-subtitle">Latest Publications</h2>
      <div className="publication-list">
        {renderPublications(publicationData.latest)}
      </div>

      <h2 className="publication-subtitle">New Publications</h2>
      <div className="publication-list">
        {renderPublications(publicationData.new)}
      </div>
    </div>
  );
};

export default Publication;