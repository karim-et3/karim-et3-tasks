import React from 'react';
import RootTabNavigation from './src/routes/RootTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import {StatusBar} from 'react-native';
import {COLORS} from './src/styles';
import themeStore from './src/mobx/Theme';
import {observer} from 'mobx-react-lite';

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={themeStore.colors.white}
        barStyle={themeStore.isLight ? 'dark-content' : 'light-content'}
      />
      <RootTabNavigation />
    </NavigationContainer>
  );
}

export default observer(App);
library.add(fab, fas, far, faSquareCheck);
