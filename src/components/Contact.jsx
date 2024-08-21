import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    // Here you would typically send the form data to a server
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--light-pink), var(--light-blue))',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        maxWidth: '600px',
        width: '100%',
      }}>
        <h2 style={{ color: 'var(--primary-pink)', marginBottom: '30px', fontSize: '2.5em', textAlign: 'center' }}>Contact</h2>
        
        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--dark-blue)', marginBottom: '10px' }}>Get in touch</h3>
          <p style={{ fontSize: '1.1em', marginBottom: '5px' }}>
            Email: <a href="mailto:youremail@example.com" style={{ color: 'var(--primary-blue)' }}>ecedmunds08@gmail.com</a>
          </p>
          <p style={{ fontSize: '1.1em', marginBottom: '5px' }}>
            GitHub: <a href="https://github.com/edmundseric13" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)' }}>https://github.com/edmundseric13</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: 'var(--dark-blue)' }}>Name:</label>
            <input type="text" name="name" onBlur={handleChange} required style={inputStyle} />
          </div>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: 'var(--dark-blue)' }}>Email address:</label>
            <input type="email" name="email" onBlur={handleChange} required style={inputStyle} />
          </div>
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: 'var(--dark-blue)' }}>Message:</label>
            <textarea name="message" onBlur={handleChange} required style={{ ...inputStyle, minHeight: '100px' }} />
          </div>
          {errorMessage && (
            <div>
              <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
            </div>
          )}
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid var(--light-pink)',
  fontSize: '1em',
};

const buttonStyle = {
  backgroundColor: 'var(--primary-pink)',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '50px',
  fontSize: '1em',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  alignSelf: 'center',
};

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default Contact;