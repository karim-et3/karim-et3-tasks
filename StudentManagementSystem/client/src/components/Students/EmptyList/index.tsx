import {View, Text} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../../../hoc/theme';

const EmptyList = WithThemeAndLiteObserver<{}>(props => {
  const {COLORS, SIZES, FONTS} = props.theme;
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
        No Students
      </Text>
    </View>
  );
});

export default EmptyList;
