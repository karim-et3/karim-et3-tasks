import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Cart from './src/components/Cart';
import Feather from 'react-native-vector-icons/Feather';

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
              headerRight: () => (
                <Pressable
                  onPress={() => navigation.navigate('cart')}
                  hitSlop={15}>
                  <Feather
                    name="shopping-bag"
                    style={{color: 'white', fontSize: 28}}
                  />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="cart"
            component={Cart}
            options={{
              title: 'Cart',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
