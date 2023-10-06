import React from 'react';
// import {Tprops} from '../../types';
// import themeStore from '../../mobx/Theme';
import {FONTS, SIZES} from '../../styles';

function CustomTheme<T>(WrappedComponent: React.ComponentType<T>) {
  return (
    props: T,
    //  & Tprops
  ) => {
    return (
      <WrappedComponent
        {...props}
        // COLORS={themeStore.colors}
        // isLight={themeStore.isLight}
        SIZES={SIZES}
        FONTS={FONTS}
      />
    );
  };
}

export default CustomTheme;
