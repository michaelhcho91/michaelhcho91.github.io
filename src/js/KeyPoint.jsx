import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  point: PropTypes.string.isRequired
};

const MARK = '<mark>';

const KeyPoint = ({ point }) => {
  let segments = null;
  if (point.includes(MARK)) {
    segments = point.split(MARK);
  }
  
  if (segments) {
    point = (
      <>
        {segments[0]}
        <mark>{segments[1]}</mark>
        {segments[2]}
      </>
    );
  }

  return (
    <li>
      {point}
    </li>
  );
};

KeyPoint.propTypes = propTypes;

export default KeyPoint;