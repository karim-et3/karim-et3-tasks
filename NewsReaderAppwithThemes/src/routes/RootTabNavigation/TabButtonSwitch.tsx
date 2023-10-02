import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import themeStore from '../../mobx/Theme';

const TabButtonSwitch = ({navigationStateIndex}) => {
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
        color={themeStore.colors.primary}
      />
      <Text
        style={{
          color:
            navigationStateIndex === 2
              ? themeStore.colors.black
              : themeStore.colors.grey,
        }}>
        {themeStore.isLight ? 'Light' : 'Dark'}
      </Text>
    </View>
  );
};

export default TabButtonSwitch;
