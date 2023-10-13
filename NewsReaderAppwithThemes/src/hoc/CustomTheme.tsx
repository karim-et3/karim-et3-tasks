import React from 'react';
import {FONTS, SIZES} from '../styles';

function CustomTheme<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    const theme = {FONTS, SIZES};
    return <WrappedComponent {...props} theme={theme} />;
  };
}

export default CustomTheme;
