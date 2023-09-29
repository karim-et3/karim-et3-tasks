import {Text, TouchableHighlight} from 'react-native';
import React from 'react';
import themeStore from '../../mobx/Theme';
import {observer} from 'mobx-react-lite';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

const SearchTab = ({navigation, navigationState}: MaterialTopTabBarProps) => {
  return (
    <TouchableHighlight
      underlayColor={themeStore.colors.highlight}
      onPress={() => {
        navigation.navigate('search');
      }}
      style={{
        backgroundColor: themeStore.colors.white,
        borderBottomWidth: navigationState.index === 1 ? 1.5 : 0,
        borderColor: themeStore.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          color:
            navigationState.index === 1
              ? themeStore.colors.black
              : themeStore.colors.grey,
        }}>
        Search
      </Text>
    </TouchableHighlight>
  );
};

export default observer(SearchTab);
