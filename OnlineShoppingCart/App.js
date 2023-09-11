import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/components/RootNavigation';

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f9fafb',
      }}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
