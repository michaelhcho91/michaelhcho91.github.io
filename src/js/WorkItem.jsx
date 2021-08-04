import React from 'react';
import PropTypes from 'prop-types';
import { getLogoPath } from './utils';

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

  const renderIconLabel = (icon, label) => {
    return (
      <div className="detail-item">
        <i className={`fa fa-${icon}`} />
        <span>{label}</span>
      </div>
    );
  };

  const dateLabel = (end) ? (`${start} - ${end}`) : (`${start} - Present`);

  return (
    <li className="work-item">
      <img className="logo" loading="lazy" src={getLogoPath(logo)} alt={company} />

      <div className="work-details">
        {renderIconLabel('user', position)}
        {renderIconLabel('building', company)}
        {renderIconLabel('map-marker', location)}
        {renderIconLabel('calendar', dateLabel)}
      </div>

      <ul className="key-points">
        {keyPoints.map((point, idx) => {
          return (
            <li key={idx + point[0]}>{point}</li>
          );
        })}
      </ul>
    </li>
  );
};

WorkItem.propTypes = propTypes;

export default WorkItem;