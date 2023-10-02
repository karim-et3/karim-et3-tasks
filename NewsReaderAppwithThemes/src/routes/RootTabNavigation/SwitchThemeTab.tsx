import React from 'react';
import themeStore from '../../mobx/Theme';
import {observer} from 'mobx-react-lite';
import TabButton from './TabButton';
import {TSwitchThemeTab} from '../../types';

const SwitchThemeTab = ({navigationStateIndex}: TSwitchThemeTab) => {
  return (
    <TabButton
      onPress={() => {
        themeStore.changeTheme();
        themeStore.logTheme();
      }}
      navigationStateIndex={navigationStateIndex}
      type="themeswitch"
    />
  );
};

export default observer(SwitchThemeTab);
