import {View, Text} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../hoc/theme';

type Props = {
  text: string;
};
const EmptyList = WithThemeAndLiteObserver<Props>(props => {
  const {text, theme} = props;
  const {COLORS, SIZES, FONTS} = theme;
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
      }}>
      <Text
        style={{
          fontSize: SIZES.large,
          fontWeight: FONTS.bold,
          color: COLORS.secondary,
        }}>
        {text}
      </Text>
    </View>
  );
});

export default EmptyList;
