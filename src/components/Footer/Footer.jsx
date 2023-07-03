import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title waviy">
            <span>S</span>
            <span>u</span>
            <span>m</span>
            <span>i</span>
            <span>y</span>
            <span>a</span>
          </h1>

          <ul className="footer__list animate-link">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/sumiya.jakariya.1/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/sumiyajakariya/"
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href=""
              className="footer__social-link"
              target="_blank"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </div>

          <span className="footer__copy animate-link">
            &#169; All rights reserved by Sumiya
          </span>
        </div>
      </footer>
    );
};

export default Footer;