import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TApp} from './src/types';
import {WithThemeAndLiteObserver} from './src/hoc/theme';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import RootDrawerNavigation from './src/routes/RootDrawerNavigation';
import RootStackNavigation from './src/routes/RootStackNavigation';
import toastStore from './src/mobx/Toast';
import ToastNotification from './src/common/ToastNotification';
import {navigationRef} from './src/routes/NavigationRef';

function App({COLORS}: TApp): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      {toastStore.show && (
        <ToastNotification
          error={toastStore.getError}
          message={toastStore.getMessage}
        />
      )}
      {/* <RootDrawerNavigation /> */}
      <RootStackNavigation />
    </NavigationContainer>
  );
}

export default WithThemeAndLiteObserver(App);
library.add(fab, fas, far, faSquareCheck);
