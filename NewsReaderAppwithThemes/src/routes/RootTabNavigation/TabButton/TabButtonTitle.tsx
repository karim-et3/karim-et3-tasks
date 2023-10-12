import {Text} from 'react-native';
import React from 'react';
import {TTabButtonTitle} from '../../../types';
import {withLiteObserver} from '../../../hoc';
import themeStore from '../../../mobx/Theme';

const TabButtonTitle = ({
  navigationStateIndex,
  index,
  title,
}: TTabButtonTitle) => {
  return (
    <Text
      style={{
        color:
          navigationStateIndex === index ? themeStore.black : themeStore.grey,
      }}>
      {title}
    </Text>
  );
};

export default withLiteObserver(TabButtonTitle);
