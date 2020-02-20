import Slider from 'react-rangeslider';
import React from 'react';
import './styles.css';

export default ({ color, ...rest }) => <Slider className={color} {...rest} />;
