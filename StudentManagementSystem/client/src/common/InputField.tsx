import {View, TextInput} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {WithThemeAndLiteObserver} from '../hoc/theme';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type Props = {
  numeric: boolean;
  blurRef?: any;
  icon: IconProp;
  placeholder: string;
  value: string;
  setValue: (e: string) => void;
  focus: boolean;
  setFocus: () => void;
  required?: boolean;
  maxLength?: number;
};
const InputField = WithThemeAndLiteObserver<Props>(props => {
  const {
    numeric,
    icon,
    placeholder,
    value,
    setValue,
    focus,
    setFocus,
    required = false,
    blurRef,
    maxLength,
    theme,
  } = props;
  const {COLORS} = theme;
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: focus ? COLORS.primary : COLORS.grey,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
      }}>
      <FontAwesomeIcon
        icon={icon}
        color={focus ? COLORS.primary : COLORS.grey}
      />
      <TextInput
        ref={blurRef}
        onFocus={setFocus}
        onBlur={setFocus}
        keyboardType={numeric ? 'numeric' : 'default'}
        value={value}
        onChangeText={setValue}
        placeholder={`${placeholder} ${required ? '*' : ''}`}
        placeholderTextColor={COLORS.placeholder}
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}
        maxLength={maxLength}
      />
    </View>
  );
});

export default InputField;
