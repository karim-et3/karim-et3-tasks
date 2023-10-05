import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {WithThemeAndLiteObserver} from '../../../components/hoc';

const TabButtonSwitch = ({COLORS, isLight, navigationStateIndex}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
      }}>
      <FontAwesomeIcon icon={isLight ? 'sun' : 'moon'} color={COLORS.primary} />
      <Text
        style={{
          color: navigationStateIndex === 2 ? COLORS.black : COLORS.grey,
        }}>
        {isLight ? 'Light' : 'Dark'}
      </Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(TabButtonSwitch);
