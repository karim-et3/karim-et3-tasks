import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
