import {View, Text} from 'react-native';
import React from 'react';
import LanguageSwitchSwitch from './LanguageSwitchSwitch';
import {withObserverAndTheme} from '../../hoc';
import {TLanguageSwitchText} from '../../types';
import transaltionStore from '../../mobx/Translation';

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
        {transaltionStore.IsArabic
          ? transaltionStore.get('english')
          : transaltionStore.get('arabic')}
      </Text>
      <LanguageSwitchSwitch />
    </View>
  );
};

export default withObserverAndTheme(LanguageSwitchText);
