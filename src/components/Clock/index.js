import { Clock as ImportedComponent } from 'react-clock/dist/entry.nostyle';
import React from 'react';
import './styles.css';

export default (props) => <div className="clock-container"><ImportedComponent {...props} /></div>;
