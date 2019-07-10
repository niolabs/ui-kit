import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ThemedComponent = ({ color }) => (
  <div className="loader">
    <div className={`outer ${color}`} />
    <div className={`middle ${color}`} />
    <div className={`inner ${color}`} />
  </div>
);

ThemedComponent.defaultProps = {
  color: 'primary',
};

ThemedComponent.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'danger',
  ]),
};

export default ThemedComponent;
