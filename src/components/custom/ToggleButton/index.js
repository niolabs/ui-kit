import ToggleButton from 'react-toggle-button';
import React from 'react';

export default class ThemedComponent extends React.Component {
  render() {
    const { ...rest } = this.props;
    return (
      <ToggleButton
        containerStyle={{ display: 'block', width: '100px', margin: '0 auto', fontFamily: 'Lato' }}
        inactiveLabel={'yes'}
        activeLabel={'no'}
        activeLabelStyle={{ width: '50%', fontFamily: 'Lato', fontSize: '14px' }}
        inactiveLabelStyle={{ width: '50%', fontFamily: 'Lato', fontSize: '14px' }}
        thumbAnimateRange={[1, 68]}
        trackStyle={{ width: '100%', height: '34px' }}
        thumbStyle={{ position: 'absolute', width: '30px', height: '30px', boxShadow: '0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)' }}
        colors={{
          activeThumb: {
            base: '#FFF',
          },
          inactiveThumb: {
            base: '#FFF',
          },
          active: {
            base: '#37C0C9',
          },
          inactive: {
            base: '#9DAAB1',
          },
        }}
        {...rest}
      />
    );
  }
}

