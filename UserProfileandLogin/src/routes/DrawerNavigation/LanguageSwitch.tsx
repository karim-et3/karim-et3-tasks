import {View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {withObserverAndTheme} from '../../hoc';
import {TLanguageSwitch} from '../../types';
import LanguageSwitchText from './LanguageSwitchText';

const LanguageSwitch = ({COLORS}: TLanguageSwitch) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        flex: 1,
        paddingHorizontal: 6,
        marginHorizontal: 10,
        paddingVertical: 10,
      }}>
      <FontAwesomeIcon icon="earth-americas" color={COLORS.test_primary3} />
      <LanguageSwitchText />
    </View>
  );
};

export default withObserverAndTheme(LanguageSwitch);
