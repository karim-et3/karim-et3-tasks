import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/components/RootNavigation';
import ToastContextProvider from './src/components/ToastContext';

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f9fafb',
        position: 'relative',
      }}>
      <NavigationContainer>
        <ToastContextProvider>
          <RootNavigation />
        </ToastContextProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
