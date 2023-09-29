import {Text, TouchableHighlight} from 'react-native';
import React from 'react';
import themeStore from '../../mobx/Theme';
import {observer} from 'mobx-react-lite';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

const HomeTab = ({navigation, navigationState}: MaterialTopTabBarProps) => {
  return (
    <TouchableHighlight
      underlayColor={themeStore.colors.highlight}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('home')}
      style={{
        backgroundColor: themeStore.colors.white,
        borderBottomWidth: navigationState.index === 0 ? 1.5 : 0,
        borderColor: themeStore.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          color:
            navigationState.index === 0
              ? themeStore.colors.black
              : themeStore.colors.grey,
        }}>
        Home
      </Text>
    </TouchableHighlight>
  );
};

export default observer(HomeTab);
