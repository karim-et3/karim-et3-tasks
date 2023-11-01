import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {WithThemeAndLiteObserver} from '../../hoc/theme';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootDrawerNavigationProp} from '../../types';

type Props = {
  icon: IconProp;
  count: number;
  link: 'students' | 'subjects' | 'courses';
  navigation: RootDrawerNavigationProp;
};
const CountBox = WithThemeAndLiteObserver<Props>(props => {
  const {icon, count, navigation, link, theme} = props;

  const {COLORS, FONTS, SIZES} = theme;
  return (
    <TouchableOpacity onPress={() => navigation.navigate(link)}>
      <View
        style={[
          // SHADOWS.small,
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
    </TouchableOpacity>
  );
});

export default CountBox;
