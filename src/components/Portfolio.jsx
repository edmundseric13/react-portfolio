import React from 'react';

const projects = [
  { title: 'Project 1', image: '/path/to/image1.jpg', deployed: 'https://project1.com', github: 'https://github.com/your/project1' },
  // Add 5 more projects
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.deployed} target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;