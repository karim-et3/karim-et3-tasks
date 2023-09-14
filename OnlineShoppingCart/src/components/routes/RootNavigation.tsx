import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../home/Home';
import Cart from '../cart/Cart';
import HomeHeaderRight from '../home/HomeHeaderRight';
import HomeHeaderLeft from '../home/HomeHeaderLeft';
import Profile from '../profile/Profile';
import HomeHeaderTitle from '../home/HomeHeaderTitle';
import {COLORS} from '../../constants';

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
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => <HomeHeaderLeft navigation={navigation} />,
          headerRight: () => <HomeHeaderRight navigation={navigation} />,
          headerTitle: () => <HomeHeaderTitle />,
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
