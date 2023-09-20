import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AllUsers from '../../ListDisplayUsers';
import Home from '../../Home';
import AddUser from '../../AddUser';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS} from '../../../constants';

const Tab = createMaterialBottomTabNavigator();
const RootTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home-tab"
      activeColor={COLORS.white}
      inactiveColor={COLORS.test_primary3}
      shifting={true}
      barStyle={{backgroundColor: COLORS.primary, height: 75}}>
      <Tab.Screen
        name="all-users"
        component={AllUsers}
        options={{
          tabBarLabel: 'All Users',
          tabBarIcon: props => (
            <FontAwesomeIcon
              icon="user-gear"
              size={22}
              color={props.focused ? COLORS.primary : COLORS.test_primary3}
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
              color={props.focused ? COLORS.primary : COLORS.test_primary3}
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
              color={props.focused ? COLORS.primary : COLORS.test_primary3}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigation;
