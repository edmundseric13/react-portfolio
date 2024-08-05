import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      {['About', 'Portfolio', 'Contact', 'Resume'].map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;