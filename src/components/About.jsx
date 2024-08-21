import React from 'react';

function About() {
  return (
    <div className="about" style={{ 
      textAlign: 'center', 
      padding: '40px',
      background: 'linear-gradient(135deg, var(--light-pink), var(--light-blue))',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
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
        }}>About Me</h2>
        <img 
          src="/profilepicture.jpg" 
          alt="Eric Edmunds" 
          className="profile-image" 
          style={{ 
            maxWidth: '250px', 
            width: '100%', 
            height: 'auto', 
            borderRadius: '50%',
            marginBottom: '30px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
          }} 
        />
        <p style={{
          color: 'var(--dark-blue)',
          fontSize: '1.2em',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Hello! My name is Eric Edmunds. I recently graduated from the U of U with my full stack web development certificate and am looking for an entry level position to further hone my skills. I am also going to go back to school for my CS degree as well.
        </p>
      </div>
    </div>
  );
}

export default About;