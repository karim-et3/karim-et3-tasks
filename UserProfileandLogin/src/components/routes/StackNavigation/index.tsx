import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../../EditProfile';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigation from '../DrawerNavigation';
import UserDetails from '../../UserDetails';
import ListDeleteUser from '../../ListDeleteUser';
import Logout from '../../Logout';
import langaugeStore from '../../../mobx/Language';

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
          options={{title: langaugeStore.translate('profile')}}
        />
        <Stack.Screen name="user-details" component={UserDetails} />
        <Stack.Screen
          name="delete-user"
          component={ListDeleteUser}
          options={{title: langaugeStore.translate('deleter')}}
        />
        <Stack.Screen
          name="logout"
          component={Logout}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
