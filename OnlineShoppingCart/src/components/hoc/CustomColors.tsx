import React from 'react';
import {COLORS} from '../../constants';

type TFunc = <P extends object>(
  Component: React.ComponentType<P>,
) => React.FunctionComponent<P>;

const CustomColors = props => () => {
  console.log('props.type', props);
  return (
    <props.type
      COLORS={COLORS}
      SIZES={{
        xSmall: 10,
        small: 12,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxLarge: 32,
      }}
      FONTS={{
        regular: '400',
        medium: '500',
        bold: '700',
      }}>
      {props.type}
    </props.type>
  );
};

export default CustomColors;
