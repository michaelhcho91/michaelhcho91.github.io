import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import IconLabel from './IconLabel';

const propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    school: PropTypes.string,
    logo: PropTypes.string,
    duration: PropTypes.string,
    position: PropTypes.string,
    keyPoints: PropTypes.arrayOf(PropTypes.string)
  })
};

const Extra = ({ item }) => {
  const { name, school, logo } = item;

  return (
    <li className="extra item">
      <Logo logo={logo} alt={name} />

      <div className="details">
        <IconLabel icon="university" label={school} />
      </div>
    </li>
  );
};

Extra.propTypes = propTypes;

export default Extra;