import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  mark: PropTypes.bool
};

const IconLabel = ({ icon, label, mark = false }) => {
  if (mark) {
    label = (
      <mark>{label}</mark>
    );
  }

  return (
    <div className="icon-label">
      <i className={`fa fa-${icon}`} />
      <span>{label}</span>
    </div>
  );
};

IconLabel.propTypes = propTypes;

export default IconLabel;