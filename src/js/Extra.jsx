import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import IconLabel from './IconLabel';
import KeyPoint from './KeyPoint';

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
  const { name, school, logo, duration, position, keyPoints } = item;

  return (
    <li className="extra item">
      <Logo logo={logo} alt={name} />

      <div className="details">
        <IconLabel icon="user" label={position} mark />
        <IconLabel icon="users" label={name} />
        <IconLabel icon="university" label={school} />
        <IconLabel icon="calendar" label={duration} />
      </div>

      <ul className="key-points">
        {keyPoints.map((point, idx) => {
          return (
            <KeyPoint
              key={idx + point[idx]}
              point={point}
            />
          );
        })}
      </ul>
    </li>
  );
};

Extra.propTypes = propTypes;

export default Extra;