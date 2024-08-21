import React from 'react';

const projects = [
  { title: 'Text Editor', deployed: 'https://text-editor-480k.onrender.com', github: 'https://github.com/edmundseric13/text-editor.git' },
  { title: 'Rig-Builder Pro', deployed: 'https://rig-builderpro-a6ui.onrender.com', github: 'https://github.com/pattyboyy/Rig-BuilderPro' },
  { title: 'Speak EZ', deployed: 'https://speak-ez.onrender.com', github: 'https://github.com/aionarae/speak-ez' },
  { title: 'National Park Explorer', deployed: 'https://sean-k-madigan.github.io/NationalParkExplorer', github: 'https://github.com/Sean-K-Madigan/NationalParkExplorer' },
  { title: 'Note Taker', deployed: 'https://note-taker-anj3.onrender.com', github: 'https://github.com/edmundseric13/note-taker.git' },
  { title: 'Tech Blog', deployed: 'https://tech-blog-m0y2.onrender.com', github: 'https://github.com/edmundseric13/tech-blog.git' },
];

function Portfolio() {
  return (
    <section style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, var(--light-pink), var(--light-blue))',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    }}>
      <h2 style={{ color: 'var(--dark-blue)', marginBottom: '20px' }}>Portfolio</h2>
      <div className="projects" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        justifyContent: 'center',
      }}>
        {projects.map((project, index) => (
          <div key={index} className="project" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <h3 style={{ color: 'var(--primary-pink)', marginBottom: '10px' }}>{project.title}</h3>
            <div>
              <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="bubbly-button" style={{
                backgroundColor: 'var(--primary-pink)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                margin: '5px',
                borderRadius: '50px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block',
              }}>Deployed App</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bubbly-button" style={{
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                margin: '5px',
                borderRadius: '50px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block',
              }}>GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;