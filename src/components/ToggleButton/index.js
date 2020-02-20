import React from 'react';
import ToggleButton from './react-toggle-button';

export default ({ width, height, mini, inactiveLabel, activeLabel, value, thumbIcon, ...rest }) => {
  const fontWidthMultiplier = 6;
  const componentHeight = mini ? 15 : height || 25;
  const thumbSize = mini ? 30 : componentHeight - 4;
  let adjustedWidth = false;
  let activeLabelWidth = '50%';
  let inactiveLabelWidth = '50%';

  if (inactiveLabel !== undefined || activeLabel !== undefined) {
    adjustedWidth = (Math.max(inactiveLabel.length, activeLabel.length) * fontWidthMultiplier) + thumbSize + 30;
    activeLabelWidth = value ? `${adjustedWidth - thumbSize}px` : `${thumbSize}px`;
    inactiveLabelWidth = value ? `${thumbSize}px` : `${adjustedWidth - thumbSize}px`;
  }

  const componentWidth = width || adjustedWidth || 70;
  const thumbRangeMin = mini ? -2 : 2;
  const thumbRangeMax = mini ? componentWidth - 28 : (componentWidth - thumbSize) - 2;

  return (
    <ToggleButton
      containerStyle={{ display: 'block', width: `${componentWidth}px`, margin: '0 auto', fontFamily: 'Lato' }}
      inactiveLabel={mini ? '' : inactiveLabel || 'off'}
      activeLabel={mini ? '' : activeLabel || 'on'}
      activeLabelStyle={{ width: activeLabelWidth, fontFamily: 'Lato', fontSize: '14px', height: '14px', lineHeight: 1, whiteSpace: 'nowrap' }}
      inactiveLabelStyle={{ width: inactiveLabelWidth, fontFamily: 'Lato', fontSize: '14px', height: '14px', lineHeight: 1, whiteSpace: 'nowrap' }}
      thumbAnimateRange={[thumbRangeMin, thumbRangeMax]}
      trackStyle={{ width: '100%', height: `${componentHeight}px` }}
      thumbStyle={{ position: 'absolute', width: `${thumbSize}px`, height: `${thumbSize}px`, boxShadow: '0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)' }}
      colors={{ activeThumb: { base: '#FFF' }, inactiveThumb: { base: '#FFF' }, active: { base: '#37C0C9' }, inactive: { base: '#9DAAB1' } }}
      thumbIcon={mini ? thumbIcon : false}
      {...rest}
    />
  );
};
