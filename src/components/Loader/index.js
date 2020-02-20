import React from 'react';
import './styles.css';

export default ({ color = 'primary' }) => (
  <div className="loader">
    <div className={`outer ${color}`} />
    <div className={`middle ${color}`} />
    <div className={`inner ${color}`} />
  </div>
);
