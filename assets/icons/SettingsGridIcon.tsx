import React from 'react';
import Svg, { Rect } from 'react-native-svg';

export const SettingsGridIcon = ({ width = 24, height = 24, color = '#FFFFFF' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Rect x="2" y="2" width="8" height="8" stroke={color} strokeWidth="1" />
      <Rect x="14" y="2" width="8" height="8" stroke={color} strokeWidth="1" />
      <Rect x="2" y="14" width="8" height="8" stroke={color} strokeWidth="1" />
      <Rect x="14" y="14" width="8" height="8" stroke={color} strokeWidth="1" />
    </Svg>
  );
};
