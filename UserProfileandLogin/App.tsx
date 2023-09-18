import React from 'react';
import {SafeAreaView} from 'react-native';
import RootStackNavigation from './src/components/routes/RootStackNavigation';
import ToastContextProvider from './src/components/context/ToastContext';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ToastContextProvider>
        <RootStackNavigation />
      </ToastContextProvider>
    </SafeAreaView>
  );
}

export default App;
