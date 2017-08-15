import { VictoryChart as ImportedComponent } from 'victory';
import React from 'react';
import theme from '../../../theme/theme';

export default class ThemedComponent extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <ImportedComponent theme={theme} {...rest} />
    );
  }
}