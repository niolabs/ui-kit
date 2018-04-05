import { Tooltip as ImportedComponent } from 'reactstrap';
import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import componentTheme from './styles.css';

@themr('themedComponent', componentTheme)

export default class ThemedComponent extends React.Component {
  render() {
    const { theme, ...rest } = this.props;
    return (
      <ImportedComponent cssModule={theme} {...rest} />
    );
  }
}

ThemedComponent.propTypes = {
  theme: PropTypes.object,
};
