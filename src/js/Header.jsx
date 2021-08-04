import React from 'react';
import { scrollToTop } from './utils';

const Header = () => {
  const renderLink = (href, label, icon) => {
    const attributes = {
      href,
      rel: 'noreferrer'
    };

    if (icon !== 'phone') {
      attributes.target = '_blank';
    }

    return (
      <a {...attributes}>
        {label}
        <i className={`fa fa-${icon}`} />
      </a>
    );
  };

  return (
    <header className="header-container">
      <div className="header auto-width">
        <div onClick={scrollToTop} className="name-and-title">
          <h1>Michael Cho</h1>
          <h2>Software Engineer</h2>
        </div>

        <div className="contact-and-pic">
          <div className="links">
            {renderLink('tel:7189860270', '718-986-0270', 'phone')}
            {renderLink('mailto: michaelhcho91@gmail.com', 'michaelhcho91@gmail.com', 'envelope')}
            {renderLink('https://www.linkedin.com/in/michaelhcho91', 'linkedin.com/in/michaelhcho91', 'linkedin')}
            {renderLink('https://github.com/michaelhcho91', 'github.com/michaelhcho91', 'github')}
          </div>

          <img className="pic-of-me hidden-md" src={`${process.env.PUBLIC_URL}/me.png`} alt="Michael Cho" />
        </div>
      </div>
    </header>
  );
};

export default Header;