import React from 'react';

const Social = () => {
    return (
      <div className="home__social animate-link">
        <a
          href="https://www.instagram.com/sumiyajakariya/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mosa-sumiya-akter/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-dribbble"></i>
        </a>
        <a
          href="https://github.com/SUMIYA7"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    );
};

export default Social;