import React from 'react';
import {SafeAreaView, View} from 'react-native';
import RootNavigation from './src/components/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './src/styles';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
