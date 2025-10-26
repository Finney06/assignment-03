import React, { useState } from 'react';
import './Pagination.css';

function Pagination() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 4;

  const handlePageClick = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pagination">
      <button className="page-btn prev-btn" onClick={handlePrevious}>❮</button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          className={`page-btn ${activePage === i + 1 ? 'active' : ''}`}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button className="page-btn next-btn" onClick={handleNext}>❯</button>
    </div>
  );
}

export default Pagination;
