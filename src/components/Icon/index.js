import React from 'react';
import './styles.css';

export default ({ name, color = 'dark', size = false, spin = false, rotate = false }) => <i className={`nio nio-${name} text-${color} ${size && `nio-${size}`} ${spin && 'nio-spin'} ${rotate && `nio-rotate-${rotate}`}`} />;
