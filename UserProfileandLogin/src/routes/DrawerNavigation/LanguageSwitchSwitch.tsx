import {Switch} from 'react-native';
import React from 'react';
import {withObserverAndTheme} from '../../hoc';
import {TLanguageSwitchSwitch} from '../../types';
import i18n from '../../mobx/i18n';

const LanguageSwitchSwitch = ({COLORS}: TLanguageSwitchSwitch) => {
  const changeLanguage = () => {
    const newLanguage = i18n.getIsArabic ? 'en' : 'ar';
    i18n.setLanguage(newLanguage);
  };
  return (
    <Switch
      style={{marginLeft: 10}}
      trackColor={{false: COLORS.grey, true: '#767577'}}
      thumbColor={i18n.getIsArabic ? COLORS.primary : '#f4f3f4'}
      value={i18n.getIsArabic}
      onValueChange={changeLanguage}
    />
  );
};

export default withObserverAndTheme(LanguageSwitchSwitch);
