import React from 'react';

function Resume() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--light-pink), var(--light-blue))',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        maxWidth: '800px',
        width: '100%',
      }}>
        <h2 style={{ 
          color: 'var(--primary-pink)', 
          marginBottom: '30px',
          fontSize: '2.5em',
          textAlign: 'center',
        }}>Resume</h2>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}>
          <a href="/resume.pdf" download style={{
            backgroundColor: 'var(--primary-blue)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '50px',
            fontSize: '1.2em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
          }}>Download Resume</a>
        </div>

        <h3 style={{ 
          color: 'var(--primary-blue)', 
          marginBottom: '20px',
          fontSize: '1.8em',
        }}>Proficiencies</h3>
        
        <ul style={{
          color: 'var(--dark-blue)',
          fontSize: '1.2em',
          lineHeight: '1.6',
          paddingLeft: '20px',
        }}>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          {/* Add more proficiencies */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;