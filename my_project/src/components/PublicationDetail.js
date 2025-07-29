import React from 'react';
import { useParams } from 'react-router-dom';
import './PublicationDetail.css';
import publicationData from './publicationData';

const PublicationDetail = () => {
  const { slug } = useParams();
  let publication;

  for (const category in publicationData) {
    publication = publicationData[category].find(pub => pub.slug === slug);
    if (publication) break;
  }

  if (!publication) {
    return <div>Publication not found</div>;
  }

  return (
    <div className="publication-detail-container">
      <h2>{publication.title}</h2>
      <img src={publication.image} alt={publication.title} className="publication-detail-image" />
      <p><strong>Author:</strong> {publication.author}</p>
      <p>{publication.content}</p>
    </div>
  );
};

export default PublicationDetail;
