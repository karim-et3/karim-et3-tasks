import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {WithThemeAndLiteObserver} from './src/hoc/theme';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import RootStackNavigation from './src/routes/RootStackNavigation';
import toastStore from './src/mobx/Toast';
import ToastNotification from './src/common/ToastNotification';
import {navigationRef} from './src/routes/navigationRef';
import {LoadingHome} from './src/common';
import globalStore from './src/mobx/Global';

const App = WithThemeAndLiteObserver<{}>(props => {
  const {COLORS} = props.theme;
  console.log(globalStore.isAppReady);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      {!globalStore.isAppReady ? (
        <LoadingHome />
      ) : (
        <>
          {toastStore.show && (
            <ToastNotification
              error={toastStore.getError}
              message={toastStore.getMessage}
            />
          )}
          <RootStackNavigation />
        </>
      )}
    </NavigationContainer>
  );
});

export default App;
library.add(fab, fas, far, faSquareCheck);
