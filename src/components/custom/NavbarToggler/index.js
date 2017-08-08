import React from 'react';
import PropTypes from 'prop-types';
import './_styles.scss';

export default class ThemedComponent extends React.Component {
  render() {
    const { isOpen, onClick, right, left } = this.props;
    return (
      <a onClick={() => onClick()} className={`navbar-toggler ${isOpen && 'navbar-toggler-open'} ${right && 'navbar-toggler-right'} ${left && 'navbar-toggler-left'}`}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </a>
    );
  }
}

ThemedComponent.propTypes = {
  right: PropTypes.bool,
  left: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};
