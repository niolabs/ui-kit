import React from 'react';
import './styles.css';

export default ({ isOpen, onClick, right, left }) => (
  <a onClick={() => onClick()} className={`navbar-toggler ${isOpen && 'navbar-toggler-open'} ${right && 'navbar-toggler-right'} ${left && 'navbar-toggler-left'}`}>
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </a>
);
