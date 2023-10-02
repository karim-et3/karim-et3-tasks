import {View, StyleSheet} from 'react-native';
import React from 'react';
import themeStore from '../../mobx/Theme';
import {SHADOWS} from '../../styles';
import SwitchThemeTab from './SwitchThemeTab';
import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import {TCustomNavigationTab} from '../../types';

const CustomNavigationTab = ({
  navigationStateIndex,
  navigation,
}: TCustomNavigationTab) => {
  return (
    <View
      style={[
        SHADOWS.medium,
        {
          borderColor: themeStore.colors.grey,
          borderBottomWidth: StyleSheet.hairlineWidth,
          height: 44,
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
      ]}>
      <SwitchThemeTab navigationStateIndex={navigationStateIndex} />
      <HomeTab
        navigation={navigation}
        navigationStateIndex={navigationStateIndex}
      />
      <SearchTab
        navigation={navigation}
        navigationStateIndex={navigationStateIndex}
      />
    </View>
  );
};

export default CustomNavigationTab;
