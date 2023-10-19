import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
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
import {navigationRef} from './src/routes/NavigationRef';
import LoadingHome from './src/common/LoadingHome';
import {merge} from 'lodash';

const App = WithThemeAndLiteObserver<{}>(props => {
  const {COLORS} = props.theme;
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      {!isAppReady ? (
        <LoadingHome setIsAppReady={setIsAppReady} />
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
