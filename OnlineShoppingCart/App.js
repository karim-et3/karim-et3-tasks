import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Cart from './src/components/Cart';
import HeaderRight from './src/components/HeaderRight';
import HeaderLeft from './src/components/HeaderLeft';
import Profile from './src/components/Profile';
import HeaderTitle from './src/components/HeaderTitle';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f9fafb',
      }}>
      <NavigationContainer>
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
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
