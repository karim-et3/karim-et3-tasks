import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import themeStore from './src/mobx/Theme';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerNavigation from './src/routes/RootDrawerNavigation';
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={themeStore.colors.primary}
        />
        <RootDrawerNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
