// export function withTheme<T extends WithThemeProps = WithThemeProps>(
//   WrappedComponent: React.ComponentType<T>
// ) {
//   // Try to create a nice displayName for React Dev Tools.
//   const displayName =
//     WrappedComponent.displayName || WrappedComponent.name || "Component";

//   // Creating the inner component. The calculated Props type here is the where the magic happens.
//   const ComponentWithTheme = (props: Omit<T, keyof WithThemeProps>) => {
//     // Fetch the props you want to inject. This could be done with context instead.
//     const themeProps = useTheme();

//     // props comes afterwards so the can override the default ones.
//     return <WrappedComponent {...themeProps} {...(props as T)} />;
//   };

//   ComponentWithTheme.displayName = `withTheme(${displayName})`;

//   return ComponentWithTheme;
// }

// import React from 'react';
// import {COLORS, FONTS, SHADOWS, SIZES} from '../constants';
// export interface IMessageProps {
//   COLORS: {
//     primary: string;
//     primary_faded: string;
//     secondary: string;
//     background: string;
//     black: string;
//     placeholder: string;
//     white: string;
//     grey: string;
//     disabledbBackground: string;
//     disabledBorder: string;
//     disabledText: string;
//     border: string;
//     error: string;
//     test_primary: string;
//     test_primary1: string;
//     test_primary2: string;
//     test_primary3: string;
//     test_white: string;
//     test_grey: string;
//   };
// }

// const message =
//   <P extends IMessageProps>(
//     Component: React.ComponentType<P>,
//   ): React.FC<Pick<P, Exclude<keyof P, keyof IMessageProps>>> =>
//   (props: Pick<P, Exclude<keyof P, keyof IMessageProps>>) => {
//     return (
//       <Component
//         {...props}
//         COLORS={COLORS}
//         FONTS={FONTS}
//         SIZES={SIZES}
//         SHADOWS={SHADOWS}
//       />
//     );
//   };

// export default message;

// import React from 'react';
// import {COLORS, SHADOWS, SIZES, FONTS} from '../constants';
// import {TCOLORS} from '../types';

// function CustomTheme<T>(Component: React.ComponentType<T>) {
//   // return (props: T & Tprops) => (
//   return (props: Omit<T, keyof TCOLORS>) => (
//     <Component
//       {...COLORS}
//       FONTS={FONTS}
//       SIZES={SIZES}
//       SHADOWS={SHADOWS}
//       {...props}
//     />
//   );
// }

// export default CustomTheme;

import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../constants';

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
