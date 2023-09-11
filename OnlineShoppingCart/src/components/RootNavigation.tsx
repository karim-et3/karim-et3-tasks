import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Cart from './Cart';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import Profile from './Profile';
import HeaderTitle from './HeaderTitle';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={({navigation}) => ({
          title: 'Home',
          headerStyle: {
            backgroundColor: '#0ea5e9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerRight: () => <HeaderRight navigation={navigation} />,
          headerTitle: () => <HeaderTitle />,
        })}
      />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{
          title: 'Cart',
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
