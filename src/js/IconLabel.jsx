import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string
};

const IconLabel = ({ icon, label }) => {
  return (
    <div className="icon-label">
      <i className={`fa fa-${icon}`} />
      <span>{label}</span>
    </div>
  );
};

IconLabel.propTypes = propTypes;

export default IconLabel;