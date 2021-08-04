import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import IconLabel from './IconLabel';

const propTypes = {
  item: PropTypes.shape({
    school: PropTypes.string,
    graduated: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string
  })
};

const School = ({ item }) => {
  const { school, graduated, description, logo } = item;

  return (
    <li className="school item">
      <Logo logo={logo} alt={school} />

      <div className="details">
        <IconLabel icon="university" label={school} />
        <IconLabel icon="graduation-cap" label={graduated} />
        <IconLabel icon="certificate" label={description} />
      </div>
    </li>
  );
};

School.propTypes = propTypes;

export default School;