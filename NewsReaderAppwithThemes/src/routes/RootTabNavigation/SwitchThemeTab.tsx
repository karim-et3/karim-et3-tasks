import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import themeStore from '../../mobx/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

const SwitchThemeTab = ({navigationState}: MaterialTopTabBarProps) => {
  return (
    <TouchableHighlight
      underlayColor={themeStore.colors.highlight}
      onPress={() => {
        themeStore.changeTheme();
        themeStore.logTheme();
      }}
      style={{
        borderBottomWidth: navigationState.index === 2 ? 1.5 : 0,
        borderColor: themeStore.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeStore.colors.white,
        flex: 1,
      }}>
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
              navigationState.index === 2
                ? themeStore.colors.black
                : themeStore.colors.grey,
          }}>
          {themeStore.isLight ? 'Light' : 'Dark'}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default observer(SwitchThemeTab);
