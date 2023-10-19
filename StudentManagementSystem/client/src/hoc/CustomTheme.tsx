import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../styles';

function CustomTheme<T>(WrappedComponent: React.ComponentType<T>): React.FC<T> {
  const WithTheme: React.FC<T> = props => {
    const theme = {COLORS, FONTS, SIZES, SHADOWS};
    return <WrappedComponent {...props} theme={theme} />;
  };

  return WithTheme;
}

export default CustomTheme;
