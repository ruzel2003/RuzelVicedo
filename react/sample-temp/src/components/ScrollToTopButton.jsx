import React from 'react';

const ScrollToTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button
        className="btn scroll-to-top text-white rounded-circle d-flex justify-content-center align-items-center bg-primary"
        onClick={handleScrollTop}
        aria-label="Scroll to top"
      >
        <span className="uil uil-angle-up"></span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
