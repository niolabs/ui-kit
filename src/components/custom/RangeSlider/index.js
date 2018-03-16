import Slider from 'react-rangeslider';
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class RangeSlider extends React.Component {
  render() {
    const { color, ...rest } = this.props;
    return (
      <Slider className={color} {...rest} />
    );
  }
}

RangeSlider.propTypes = {
  color: PropTypes.string,
};
