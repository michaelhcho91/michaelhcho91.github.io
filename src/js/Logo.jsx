import React from 'react';
import PropTypes from 'prop-types';
import { getLogoPath } from './utils';

const propTypes = {
  logo: PropTypes.string,
  alt: PropTypes.string
};

const Logo = ({ logo, alt }) => {
  const src = getLogoPath(logo);

  return (
    <img className="logo" loading="lazy" src={src} alt={alt} />
  );
};

Logo.propTypes = propTypes;

export default Logo;