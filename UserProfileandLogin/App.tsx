import React from 'react';
import {SafeAreaView} from 'react-native';
import RootStackNavigation from './src/components/RootStackNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootStackNavigation />
    </SafeAreaView>
  );
}

export default App;
