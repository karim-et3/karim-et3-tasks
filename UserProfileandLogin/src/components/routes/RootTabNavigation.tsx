import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AllUsers from '../AllUsers';
import Home from '../Home';
import AddUser from '../AddUser';

const Tab = createMaterialBottomTabNavigator();
const RootTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="all-users"
        component={AllUsers}
        options={{tabBarLabel: 'All Users'}}
      />
      <Tab.Screen
        name="home-tab"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="add-user"
        component={AddUser}
        options={{tabBarLabel: 'Add User'}}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigation;
