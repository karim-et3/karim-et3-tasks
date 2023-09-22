import React from 'react';
import {SafeAreaView} from 'react-native';
import RootStackNavigation from './src/components/routes/StackNavigation';
import ToastContextProvider from './src/components/context/ToastContext';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import {withObserverAndTheme} from './src/components/hoc';
import './src/assets/i18n/i18n';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ToastContextProvider>
        <RootStackNavigation />
      </ToastContextProvider>
    </SafeAreaView>
  );
}

export default App;
library.add(fab, fas, far, faSquareCheck);
