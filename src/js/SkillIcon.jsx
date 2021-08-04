import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string
};

const SkillIcon = ({ label, icon }) => {
  const [displayLabel, setDisplayLabel] = useState('');

  useEffect(() => {
    const { length } = displayLabel;
    const timeout = 2000 / label.length;

    setTimeout(() => {
      if (length !== label.length) {
        const newLabel = displayLabel + label.slice(length, length + 1);
        setDisplayLabel(newLabel);
      }
    }, timeout);
  });

  const resetDisplayLabel = () => {
    setDisplayLabel('');
  };

  return (
    <li className="skill-icon">
      <i className={`devicon-${icon}`} />
      <span onMouseEnter={resetDisplayLabel}>{displayLabel}</span>
    </li>
  );
};

SkillIcon.propTypes = propTypes;

export default SkillIcon;