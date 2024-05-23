import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Brief description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Brief description of the project.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

export default Projects;
