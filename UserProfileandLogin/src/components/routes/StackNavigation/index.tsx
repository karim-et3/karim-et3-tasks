import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../../EditProfile';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigation from '../DrawerNavigation';
import UserDetails from '../../UserDetails';
import ListDeleteUser from '../../ListDeleteUser';
import Logout from '../../Logout';
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();
const RootStackNavigation = () => {
  const {t} = useTranslation();
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
          options={{title: t('profile')}}
        />
        <Stack.Screen name="user-details" component={UserDetails} />
        <Stack.Screen
          name="delete-user"
          component={ListDeleteUser}
          options={{title: t('deleter')}}
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
