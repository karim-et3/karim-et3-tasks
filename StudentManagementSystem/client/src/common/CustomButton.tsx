import {Text, Pressable} from 'react-native';
import React, {ReactNode} from 'react';
import {WithThemeAndLiteObserver} from '../hoc/theme';
import {COLORS} from '../styles';

type Props = {
  text: string | ReactNode;
  textColor: string;
  backgroundColor: string;
  onPress: () => void;
  shadow?: 'small' | 'medium';
  disabled?: boolean;
  style?: object;
};

const CustomButton = WithThemeAndLiteObserver<Props>(props => {
  const {
    text,
    textColor,
    backgroundColor,
    onPress,
    shadow,
    disabled,
    style,
    theme,
  } = props;
  const {SIZES, FONTS, SHADOWS} = theme;
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        style,
        shadow === 'small'
          ? SHADOWS.small
          : shadow === 'medium'
          ? SHADOWS.medium
          : null,
        {
          width: '100%',
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
          fontWeight: FONTS.bold,
        }}>
        {text}
      </Text>
    </Pressable>
  );
});

export default CustomButton;
