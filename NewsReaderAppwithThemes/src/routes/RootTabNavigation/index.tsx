import React from 'react';
import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import Home from '../../components/Home';
import Search from '../../components/Search';
import CustomNavigationTab from './CustomNavigationTab';
import {withLiteObserver} from '../../components/hoc';

const Tab = createMaterialTopTabNavigator();
const RootTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBar={({navigation, navigationState}: MaterialTopTabBarProps) => (
        <CustomNavigationTab
          navigation={navigation}
          navigationStateIndex={navigationState.index}
        />
      )}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
    </Tab.Navigator>
  );
};

export default withLiteObserver(RootTabNavigation);
