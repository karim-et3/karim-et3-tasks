import React from 'react';
import themeStore from '../../mobx/Theme';
import TabButton from './TabButton';
import {TSwitchThemeTab} from '../../types';
import {withLiteObserver} from '../../components/hoc';

const SwitchThemeTab = ({navigationStateIndex}: TSwitchThemeTab) => {
  return (
    <TabButton
      onPress={() => themeStore.changeTheme()}
      navigationStateIndex={navigationStateIndex}
      type="themeswitch"
    />
  );
};

export default withLiteObserver(SwitchThemeTab);
