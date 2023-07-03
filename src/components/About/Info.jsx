import React from 'react';

const Info = () => {
    return (
      <div className="about__info grid">
        <div className="about__box animate-link">
          <i className="bx bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">6 months Learning course about web development from beginning</span>
        </div>
        <div className="about__box animate-link">
          <i className="bx bx-briefcase-alt about__icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">12 Projects</span>
        </div>
        <div className="about__box animate-link">
          <i className="bx bx-support about__icon"></i>
          <h3 className="about__title">Support</h3>
          <span className="about__subtitle">Online</span>
        </div>
      </div>
    );
};

export default Info;