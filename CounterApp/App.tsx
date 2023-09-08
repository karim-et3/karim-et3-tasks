import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigation from './RootNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
