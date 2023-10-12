import {View, TextInput, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TInputField, TInputFieldExport} from '../types';
import {WithThemeAndLiteObserver} from '../hoc/theme';

const InputField = ({
  COLORS,
  icon,
  placeholder,
  value,
  setValue,
  focus,
  setFocus,
  required = false,
  blurRef,
}: TInputField) => {
  return (
    <View
      style={{
        width: '90%',
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
        value={value}
        onChangeText={setValue}
        placeholder={`${placeholder} ${required ? '*' : ''}`}
        placeholderTextColor={COLORS.placeholder}
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

export default WithThemeAndLiteObserver(
  InputField,
) as React.ComponentType<TInputFieldExport>;
