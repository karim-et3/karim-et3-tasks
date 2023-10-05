import {View, StyleSheet} from 'react-native';
import React from 'react';
import {SHADOWS} from '../../styles';
import SwitchThemeTab from './SwitchThemeTab';
import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import {TCustomNavigationTab} from '../../types';
import {WithThemeAndLiteObserver} from '../../components/hoc';

const CustomNavigationTab = ({
  COLORS,
  navigationStateIndex,
  navigation,
}: TCustomNavigationTab) => {
  return (
    <View
      style={[
        SHADOWS.medium,
        {
          borderColor: COLORS.grey,
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

export default WithThemeAndLiteObserver(CustomNavigationTab);
