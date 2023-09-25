import React from 'react';
import RootTabNavigation from './src/routes/RootTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';

function App() {
  return (
    <NavigationContainer>
      <RootTabNavigation />
    </NavigationContainer>
  );
}

export default App;
library.add(fab, fas, far, faSquareCheck);
