import React from 'react';
import PropTypes from 'prop-types';
import './_styles.scss';

export default class Icon extends React.Component {
  render() {
    const { name, color = 'dark', size = false, spin = false, rotate = false } = this.props;

    return (
      <i className={`nio nio-${name} text-${color} ${size && `nio-${size}`} ${spin && 'nio-spin'} ${rotate && `nio-rotate-${rotate}`}`} />
    );
  }
}

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  rotate: PropTypes.number,
  spin: PropTypes.bool,
};
