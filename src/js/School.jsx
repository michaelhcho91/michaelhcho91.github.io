import React from 'react';
import PropTypes from 'prop-types';
import { getLogoPath } from './utils';

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

  const renderIconLabel = (icon, label) => {
    return (
      <div className="detail-item">
        <i className={`fa fa-${icon}`} />
        <span>{label}</span>
      </div>
    );
  };

  return (
    <li className="school">
      <img className="logo" loading="lazy" src={getLogoPath(logo)} alt={school} />

      <div className="school-details">
        {renderIconLabel('university', school)}
        {renderIconLabel('graduation-cap', graduated)}
        {renderIconLabel('certificate', description)}
      </div>

      {/* {description} */}
    </li>
  );
};

School.propTypes = propTypes;

export default School;