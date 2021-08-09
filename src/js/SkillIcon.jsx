import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import CodeSnippet from './CodeSnippet';

const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string
};

const TIME_TO_COMPLETE = 2000;

const SkillIcon = ({ label, icon }) => {
  const [displayLabel, setDisplayLabel] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const { length } = displayLabel;
    const timeout = TIME_TO_COMPLETE / label.length;

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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const snippet = (
    <code>
      {`SkillIcon.jsx
...
useEffect(() => {
  const { length } = displayLabel;
  const timeout = TIME_TO_COMPLETE / label.length;

  setTimeout(() => {
    if (length !== label.length) {
      const newLabel = displayLabel + label.slice(length, length + 1);
      // Every (timeout) milliseconds, concatenate one more character to the displayLabel.
      setDisplayLabel(newLabel);
    }
  }, timeout);
});`}
    </code>
  );

  return (
    <li className="skill-icon">
      <Modal
        isVisible={isModalVisible}
        closeModal={toggleModal}
      >
        <CodeSnippet snippet={snippet} />
      </Modal>
      <i className={`devicon-${icon}`} onClick={toggleModal} title="SkillIcon" />
      <span onMouseEnter={resetDisplayLabel}>{displayLabel}</span>
    </li>
  );
};

SkillIcon.propTypes = propTypes;

export default SkillIcon;