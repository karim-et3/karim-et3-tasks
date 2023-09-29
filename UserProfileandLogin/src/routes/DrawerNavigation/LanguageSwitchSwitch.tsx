import {Switch} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../../hoc';
import {TLanguageSwitchSwitch} from '../../types';
import translationStore from '../../mobx/Translation';

const LanguageSwitchSwitch = ({COLORS}: TLanguageSwitchSwitch) => {
  const changeLanguage = () => {
    const newLanguage = translationStore.isArabic ? 'ENG' : 'AR';
    translationStore.setLanguage(newLanguage);
  };
  return (
    <Switch
      style={{marginLeft: 10}}
      trackColor={{false: COLORS.grey, true: '#767577'}}
      thumbColor={translationStore.isArabic ? COLORS.primary : '#f4f3f4'}
      value={translationStore.isArabic}
      onValueChange={changeLanguage}
    />
  );
};

export default withObserverAndTheme(LanguageSwitchSwitch);
