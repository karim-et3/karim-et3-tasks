import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AllUsers from '../../components/DisplayUsers';
import Home from '../../components/Home';
import AddUser from '../../components/AddUser';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS} from '../../constants';
import {withObserverAndTheme} from '../../hoc';
import translationStore from '../../mobx/Translation';

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
          tabBarLabel: translationStore.get('all-users'),
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
          tabBarLabel: translationStore.get('home'),
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
          tabBarLabel: translationStore.get('add-user'),
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

export default withObserverAndTheme(RootTabNavigation);
