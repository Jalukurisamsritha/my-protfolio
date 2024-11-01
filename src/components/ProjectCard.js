import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <div className="project-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
