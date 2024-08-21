import React from 'react';

function Header({ children }) {
  return (
    <header>
      <h1>Eric Edmunds</h1>
      {children}
    </header>
  );
}

export default Header;