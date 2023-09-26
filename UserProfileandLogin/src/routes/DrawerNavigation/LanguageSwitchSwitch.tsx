import {Switch} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../../hoc';
import {TLanguageSwitchSwitch} from '../../types';
import transaltionStore from '../../mobx/Translation';

const LanguageSwitchSwitch = ({COLORS}: TLanguageSwitchSwitch) => {
  const changeLanguage = () => {
    const newLanguage = transaltionStore.isArabic ? 'ENG' : 'AR';
    console.log(newLanguage);
    transaltionStore.setLanguage(newLanguage);
  };
  return (
    <Switch
      style={{marginLeft: 10}}
      trackColor={{false: COLORS.grey, true: '#767577'}}
      thumbColor={transaltionStore.isArabic ? COLORS.primary : '#f4f3f4'}
      value={transaltionStore.isArabic}
      onValueChange={changeLanguage}
    />
  );
};

export default withObserverAndTheme(LanguageSwitchSwitch);
