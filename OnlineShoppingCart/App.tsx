import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/components/routes/RootNavigation';
import ToastContextProvider from './src/components/context/ToastContext';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {COLORS} from './src/constants';
import React from 'react';

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
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
library.add(fab, fas, far);
