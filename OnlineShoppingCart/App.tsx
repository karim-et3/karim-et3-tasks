import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/components/RootNavigation';
import ToastContextProvider from './src/components/ToastContext';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

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
library.add(fab, fas, far);
