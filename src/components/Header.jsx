import React from 'react';

function Header({ children }) {
  return (
    <header>
      <h1>Your Name</h1>
      {children}
    </header>
  );
}

export default Header;