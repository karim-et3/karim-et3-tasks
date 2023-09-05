import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './android/app/src/components/home';

function App(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  counterStyle: {
    backgroundColor: '#0077b6',
    paddingHorizontal: 42,
    paddingVertical: 12,
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    borderRadius: 5,
  },
  centerElements: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modifiersStyle: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 75,
    backgroundColor: '#d1d5db',
  },
  modifiersContainerStyle: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {},
});

export default App;
