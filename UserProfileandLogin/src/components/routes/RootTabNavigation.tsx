import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AllUsers from '../AllUsers';
import Home from '../Home';
import AddUser from '../AddUser';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS} from '../../constants';

const Tab = createMaterialBottomTabNavigator();
const RootTabNavigation = () => {
  return (
    <Tab.Navigator
      activeColor={COLORS.white}
      barStyle={{backgroundColor: COLORS.primary_faded}}>
      <Tab.Screen
        name="all-users"
        component={AllUsers}
        options={{
          tabBarLabel: 'All Users',
          tabBarIcon: props => (
            <FontAwesomeIcon
              icon="user-gear"
              size={22}
              color={props.focused ? COLORS.primary : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="home-tab"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: props => (
            <FontAwesomeIcon
              icon={'home'}
              size={22}
              color={props.focused ? COLORS.primary : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="add-user"
        component={AddUser}
        options={{
          tabBarLabel: 'Add User',
          tabBarIcon: props => (
            <FontAwesomeIcon
              icon="user-plus"
              size={22}
              color={props.focused ? COLORS.primary : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigation;
