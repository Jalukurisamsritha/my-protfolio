import React, { useState } from 'react'; // Ensure useState is imported
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"; // Ensure this component is created and imported properly
import projImg1 from "../assets/link_to_your_image1.jpg"; // Replace with your project image paths
import projImg2 from "../assets/link_to_your_image2.png"; // Replace with your project image paths
import colorSharp2 from "../assets/color-sharp2.png"; // Background image
import TrackVisibility from 'react-on-screen';
import ProjectModal from "./Modal"; // Import your modal component

export const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const projects = [
    {
      title: "Medical VQA",
      description: "Developed a Medical Visual Question Answering (VQA) model integrating ViT and BERT for diagnostic aid.",
      imgUrl: projImg1, // Replace with the actual image path for Medical VQA
    },
    {
      title: "Weather Forecasting AI",
      description: "Developed a CNN model for weather condition detection and classification.",
      imgUrl: projImg2, // Replace with the actual image path for Weather Forecasting AI
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore my significant projects that showcase my technical skills and problem-solving abilities.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">My Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {projects.map((project, index) => (
                            <Col md={6} key={index} className="mb-4">
                              <ProjectCard 
                                {...project} 
                                onClick={() => openModal(project)} // Add onClick to open modal
                              />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
      <ProjectModal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        imageUrl={currentProject.imgUrl} 
        title={currentProject.title} 
      />
    </section>
  );
}

export default Projects;
