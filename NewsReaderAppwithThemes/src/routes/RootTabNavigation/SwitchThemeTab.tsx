import React from 'react';
import themeStore from '../../mobx/Theme';
import TabButton from './TabButton';
import {TSwitchThemeTab} from '../../types';
import {withLiteObserver} from '../../hoc';

const SwitchThemeTab = withLiteObserver(
  ({navigationStateIndex}: TSwitchThemeTab) => {
    return (
      <TabButton
        onPress={() => themeStore.changeTheme()}
        navigationStateIndex={navigationStateIndex}
        type="themeswitch"
      />
    );
  },
);

export default SwitchThemeTab;
