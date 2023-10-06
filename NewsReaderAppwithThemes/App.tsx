import React from 'react';
import RootTabNavigation from './src/routes/RootTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import {StatusBar} from 'react-native';
import {withLiteObserver} from './src/components/hoc';
import themeStore from './src/mobx/Theme';

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={themeStore.white}
        barStyle={themeStore.isLight ? 'dark-content' : 'light-content'}
      />
      <RootTabNavigation />
    </NavigationContainer>
  );
}

export default withLiteObserver(App);
library.add(fab, fas, far, faSquareCheck);
