import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AllUsers from './AllUsers';
import Home from './Home';
import AddUser from './AddUser';

const Tab = createMaterialBottomTabNavigator();
const RootTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="all-users" component={AllUsers} />
      <Tab.Screen name="home-tab" component={Home} />
      <Tab.Screen name="add-user" component={AddUser} />
    </Tab.Navigator>
  );
};

export default RootTabNavigation;
