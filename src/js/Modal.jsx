import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

const Modal = ({ children, isVisible, closeModal }) => {
  if (isVisible) {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  }

  return null;
};

Modal.propTypes = propTypes;

export default Modal;