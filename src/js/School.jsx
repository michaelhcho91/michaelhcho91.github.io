import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import IconLabel from './IconLabel';

const propTypes = {
  item: PropTypes.shape({
    school: PropTypes.string,
    graduated: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
    attended: PropTypes.string
  })
};

const School = ({ item }) => {
  const { school, graduated, description, logo, attended } = item;

  return (
    <li className="school item">
      <Logo logo={logo} alt={school} />

      <div className="details">
        <IconLabel icon="university" label={school} mark />
        {graduated && <IconLabel icon="graduation-cap" label={graduated} />}
        {attended && <IconLabel icon="pencil" label={attended} />}
        {description && <IconLabel icon="certificate" label={description} />}
      </div>
    </li>
  );
};

School.propTypes = propTypes;

export default School;