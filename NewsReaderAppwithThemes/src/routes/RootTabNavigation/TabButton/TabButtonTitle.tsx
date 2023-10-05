import {Text} from 'react-native';
import React from 'react';
import {TTabButtonTitle} from '../../../types';
import {WithThemeAndLiteObserver} from '../../../components/hoc';

const TabButtonTitle = ({
  COLORS,
  navigationStateIndex,
  index,
  title,
}: TTabButtonTitle) => {
  return (
    <Text
      style={{
        color: navigationStateIndex === index ? COLORS.black : COLORS.grey,
      }}>
      {title}
    </Text>
  );
};

export default WithThemeAndLiteObserver(TabButtonTitle);
