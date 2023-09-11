import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import SecondPage from './components/SecondPage';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'Home page'}}
      />
      <Stack.Screen
        name="secondpage"
        component={SecondPage}
        options={{title: 'Second Page'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
