import { Clock as ImportedComponent } from 'react-clock/dist/entry.nostyle';
import React from 'react';
import './_styles.scss';

export default class Clock extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <div className="clock-container">
        <ImportedComponent {...rest} />
      </div>
    );
  }
}
