import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {TLoginProp} from '../types';
import {COLORS} from '../constants';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// in App.js
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons/faSquareCheck';

const InputText = ({
  value,
  setValue,
  type = 'text',
  icon,
  placeholder = '',
}: TLoginProp) => {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 18,
        paddingVertical: 0,
        gap: 6,
        borderRadius: 6,
        borderCurve: 'circular',
        borderColor: focused ? COLORS.primary : COLORS.secondary,
        width: '100%',
      }}>
      {/* <FontAwesome6
        name={icon}
        color={focused ? colors.primary : colors.secondary}
        size={20}
      /> */}
      <TextInput
        secureTextEntry={type === 'password' ? true : false}
        onFocus={() => setFocused(true)}
        textContentType={
          type === 'age'
            ? 'URL'
            : type === 'phone'
            ? 'telephoneNumber'
            : type === 'adress'
            ? 'addressCity'
            : type === 'username'
            ? 'username'
            : 'none'
        }
        keyboardType={
          type === 'age' || type === 'phone' ? 'numeric' : 'default'
        }
        onBlur={() => setFocused(false)}
        value={value}
        passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8"
        placeholder={placeholder}
        onChangeText={setValue}
        placeholderTextColor={COLORS.placeholder}
        style={{color: COLORS.black, fontSize: 16, width: '100%'}}
      />
    </View>
  );
};

InputText.defaultProps = {
  type: 'text',
  placeholder: '',
};
export default InputText;
library.add(fab, fas, far, faSquareCheck);
