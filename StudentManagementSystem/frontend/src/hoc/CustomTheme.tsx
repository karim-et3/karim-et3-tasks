import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../styles';

function CustomTheme<T>(WrappedComponent: React.ComponentType<T>): React.FC<T> {
  const WithTheme: React.FC<T> = props => {
    return (
      <WrappedComponent
        {...props}
        COLORS={COLORS}
        FONTS={FONTS}
        SIZES={SIZES}
        SHADOWS={SHADOWS}
      />
    );
  };

  return WithTheme;
}

export default CustomTheme;
