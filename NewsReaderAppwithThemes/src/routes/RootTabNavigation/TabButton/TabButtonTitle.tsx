import {Text} from 'react-native';
import React from 'react';
import themeStore from '../../../mobx/Theme';
import {TTabButtonTitle} from '../../../types';

const TabButtonTitle = ({
  navigationStateIndex,
  index,
  title,
}: TTabButtonTitle) => {
  return (
    <Text
      style={{
        color:
          navigationStateIndex === index
            ? themeStore.colors.black
            : themeStore.colors.grey,
      }}>
      {title}
    </Text>
  );
};

export default TabButtonTitle;
