import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ThemedComponent = ({ isOpen, onClick, right, left }) => (
  <a onClick={() => onClick()} className={`navbar-toggler ${isOpen && 'navbar-toggler-open'} ${right && 'navbar-toggler-right'} ${left && 'navbar-toggler-left'}`}>
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </a>
);

ThemedComponent.propTypes = {
  right: PropTypes.bool,
  left: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ThemedComponent;
