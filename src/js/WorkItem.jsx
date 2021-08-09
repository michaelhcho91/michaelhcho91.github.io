import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import IconLabel from './IconLabel';
import KeyPoint from './KeyPoint';

const propTypes = {
  item: PropTypes.shape({
    company: PropTypes.string,
    logo: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    location: PropTypes.string,
    position: PropTypes.string,
    keyPoints: PropTypes.arrayOf(PropTypes.string)
  })
};

const WorkItem = ({ item }) => {
  const { company, logo, start, end, location, position, keyPoints } = item;
  const dateLabel = (end) ? (`${start} - ${end}`) : (`${start} - Present`);

  return (
    <li className="work item">
      <Logo logo={logo} alt={company} />

      <div className="details">
        <IconLabel icon="user" label={position} mark />
        <IconLabel icon="building" label={company} />
        <IconLabel icon="map-marker" label={location} />
        <IconLabel icon="calendar" label={dateLabel} />
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

WorkItem.propTypes = propTypes;

export default WorkItem;