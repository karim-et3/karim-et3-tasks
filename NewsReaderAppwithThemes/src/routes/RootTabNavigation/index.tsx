import {View, StyleSheet} from 'react-native';
import React from 'react';
import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import Home from '../../components/Home';
import Search from '../../components/Search';
import {SHADOWS} from '../../styles';
import themeStore from '../../mobx/Theme';
import {observer} from 'mobx-react-lite';
import SearchTab from './SearchTab';
import HomeTab from './HomeTab';
import SwitchThemeTab from './SwitchThemeTab';

const Tab = createMaterialTopTabNavigator();
const RootTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={({navigation, navigationState}: MaterialTopTabBarProps) => (
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
          <SwitchThemeTab navigationState={navigationState} />
          <HomeTab navigation={navigation} navigationState={navigationState} />
          <SearchTab
            navigation={navigation}
            navigationState={navigationState}
          />
        </View>
      )}
      initialRouteName="home">
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
    </Tab.Navigator>
  );
};

export default observer(RootTabNavigation);
