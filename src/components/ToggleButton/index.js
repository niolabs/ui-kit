import React from 'react';
import Toggle from 'react-toggle';
import './styles.css';

export default ({ width = 75, ...rest }) => <div className="nio-toggle" style={{ width }}><Toggle {...rest} /></div>;
