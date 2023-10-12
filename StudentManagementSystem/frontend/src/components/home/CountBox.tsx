import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TCountBox} from '../../types';
import {WithThemeAndLiteObserver} from '../../hoc/theme';

const CountBox = ({COLORS, FONTS, SIZES, SHADOWS, icon, count}: TCountBox) => {
  return (
    <View
      style={[
        SHADOWS.small,
        {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: COLORS.primary,
          // width: 85,
          // height: 85,
          minHeight: 90,
          minWidth: 120,
          backgroundColor: COLORS.white,
          paddingHorizontal: 12,
          paddingVertical: 12,
        },
      ]}>
      <FontAwesomeIcon icon={icon} color={COLORS.primary} size={28} />
      <Text
        style={{
          fontSize: SIZES.xLarge,
          color: COLORS.primary,
          fontWeight: FONTS.bold,
        }}>
        {count}
      </Text>
    </View>
  );
};

export default WithThemeAndLiteObserver(CountBox);
