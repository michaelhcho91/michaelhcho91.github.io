import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isVisible: PropTypes.bool,
  content: PropTypes.node
};

const HoverSnippet = ({ isVisible, content }) => {
  if (isVisible) {
    return (
      <div className="hover-snippet">
        <pre>
          <code>
            {content}
          </code>
        </pre>
      </div>
    );
  }

  return null;
};

HoverSnippet.propTypes = propTypes;

export default HoverSnippet;