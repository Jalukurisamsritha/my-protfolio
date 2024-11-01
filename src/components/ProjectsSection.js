import React from 'react';
import { Row } from 'react-bootstrap'; // Make sure to import Row from react-bootstrap
import ProjectCard from './ProjectCard'; // Ensure you are importing the ProjectCard component

// Define your projects array here
const projects = [
  {
    title: "Medical Visual Question Answering System",
    description: "A system integrating ViT for image analysis and BERT for question processing to aid in medical diagnostics.",
    imgUrl: "path/to/your/image1.jpg" // Update with the actual image path
  },
  {
    title: "Weather Detection and Forecasting AI",
    description: "A CNN model developed to detect and classify various weather conditions from images.",
    imgUrl: "path/to/your/image2.jpg" // Update with the actual image path
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <div className="projects-container">
      <Row>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} /> // Use the ProjectCard component
        ))}
      </Row>
    </div>
  );
};

export default ProjectsSection;
