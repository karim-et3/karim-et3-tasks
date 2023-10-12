import {Text, Pressable} from 'react-native';
import React from 'react';
import {WithThemeAndLiteObserver} from '../hoc/theme';
import {TButton} from '../types';
import {COLORS} from '../styles';

const CustomButton = ({
  text,
  textColor,
  backgroundColor,
  onPress,
  shadow,
  disabled,
  SIZES,
  FONTS,
  SHADOWS,
}: TButton) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        shadow === 'small'
          ? SHADOWS.small
          : shadow === 'medium'
          ? SHADOWS.medium
          : null,
        {
          flex: 1,
          minHeight: 38,
          backgroundColor: disabled ? COLORS.grey : backgroundColor,
          padding: 8,
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <Text
        style={{
          color: textColor,
          fontSize: SIZES.medium,
          fontWeight: FONTS.medium,
        }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default WithThemeAndLiteObserver(CustomButton);
