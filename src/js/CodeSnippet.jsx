import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  snippet: PropTypes.node
};

const CodeSnippet = ({ snippet }) => {
  return (
    <pre className="code-snippet">
      {snippet}
    </pre>
  );
};

CodeSnippet.propTypes = propTypes;

export default CodeSnippet;