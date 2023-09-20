import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../../EditProfile';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigation from '../DrawerNavigation';
import UserDetails from '../../UserDetails';

const Stack = createStackNavigator();
const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home-stack"
          component={RootDrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="edit"
          component={EditProfile}
          options={{title: 'Profile'}}
        />
        <Stack.Screen name="user-details" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
