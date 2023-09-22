import React from 'react';
import {COLORS, SHADOWS, SIZES, FONTS} from '../constants';
import {Tprops} from '../types';
// import {t} from '../assets/i18n';

function CustomTheme<T>(Component: React.ComponentType<T>) {
  return (props: T & Tprops) => (
    <Component
      COLORS={COLORS}
      FONTS={FONTS}
      SIZES={SIZES}
      SHADOWS={SHADOWS}
      // t={t}
      {...props}
    />
  );
}

export default CustomTheme;
