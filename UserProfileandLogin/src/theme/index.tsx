import React from 'react';
import {COLORS, SHADOWS, SIZES, FONTS} from '../constants';
import {Tprops} from '../types';

function CustomTheme<T>(Component: React.ComponentType<T>) {
  return (props: T & Tprops) => (
    <Component
      COLORS={COLORS}
      FONTS={FONTS}
      SIZES={SIZES}
      SHADOWS={SHADOWS}
      {...props}
    />
  );
}

export default CustomTheme;
