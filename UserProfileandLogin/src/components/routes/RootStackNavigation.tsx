import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login';
import EditProfile from '../EditProfile';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigation from './RootDrawerNavigation';

const Stack = createStackNavigator();
const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home_stack"
          component={RootDrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="edit"
          component={EditProfile}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
