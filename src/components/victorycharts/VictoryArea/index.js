import { VictoryArea as ImportedComponent } from 'victory';
import React from 'react';
import theme from '../theme';

export default class ThemedComponent extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <ImportedComponent theme={theme} {...rest} />
    );
  }
}
