import React from 'react';
import './Skills.css';
import colorSharp from "../assets/color-sharp.png";

export const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C", "JavaScript"]
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "React"]
    },
    {
      category: "Machine Learning Libraries",
      items: ["TensorFlow", "PyTorch"]
    },
    {
      category: "Core Concepts",
      items: ["OOPs", "DBMS", "OS", "Data Structures", "Deep Learning", "Transformers"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Cloud & Tools",
      items: ["Git", "AWS", "Linux"]
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of my technical skills and expertise in the field of Computer Science:</p>
              <div className="skills-circle">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-group">
                    <h5>{skillGroup.category}</h5>
                    <ul className="skill-list">
                      {skillGroup.items.map((skill, idx) => (
                        <li key={idx} className="skill-item">{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}

export default Skills;
