import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import {Tprops} from '../../types';

function CustomColors<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T & Tprops) => {
    return (
      <WrappedComponent
        COLORS={COLORS}
        SIZES={SIZES}
        FONTS={FONTS}
        {...props}
      />
    );
  };
}

export default CustomColors;
