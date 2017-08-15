import React from 'react';
import PropTypes from 'prop-types';
import './_styles.scss';

export default class ThemedComponent extends React.Component {
  render() {
    const { color } = this.props;

    return (
      <div className="loader">
        <div className={`outer ${color}`} />
        <div className={`middle ${color}`} />
        <div className={`inner ${color}`} />
      </div>
    );
  }
}

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