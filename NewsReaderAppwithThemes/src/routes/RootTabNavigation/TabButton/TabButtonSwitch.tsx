import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {withLiteObserver} from '../../../hoc';
import {TTabButtonSwitch} from '../../../types';
import themeStore from '../../../mobx/Theme';

const TabButtonSwitch = ({navigationStateIndex}: TTabButtonSwitch) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
      }}>
      <FontAwesomeIcon
        icon={themeStore.isLight ? 'sun' : 'moon'}
        color={themeStore.primary}
      />
      <Text
        style={{
          color:
            navigationStateIndex === 2 ? themeStore.black : themeStore.grey,
        }}>
        {themeStore.isLight ? 'Light' : 'Dark'}
      </Text>
    </View>
  );
};

export default withLiteObserver(TabButtonSwitch);
