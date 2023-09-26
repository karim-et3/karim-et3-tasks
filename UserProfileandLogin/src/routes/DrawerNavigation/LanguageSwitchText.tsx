import {View, Text} from 'react-native';
import React from 'react';
import LanguageSwitchSwitch from './LanguageSwitchSwitch';
import {withObserverAndTheme} from '../../hoc';
import i18n from '../../mobx/i18n';
import {TLanguageSwitchText} from '../../types';

const LanguageSwitchText = ({COLORS, SIZES, FONTS}: TLanguageSwitchText) => {
  return (
    <View
      style={{
        marginLeft: 25,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text
        style={{
          fontSize: SIZES.medium,
          fontWeight: FONTS.medium,
          color: COLORS.test_primary3,
        }}>
        {i18n.getIsArabic ? i18n.get('english') : i18n.get('arabic')}
      </Text>
      <LanguageSwitchSwitch />
    </View>
  );
};

export default withObserverAndTheme(LanguageSwitchText);
