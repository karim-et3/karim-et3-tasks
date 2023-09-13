import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {TLoginProp} from '../types';
import {colors} from '../styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

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
        borderColor: focused ? colors.primary : colors.secondary,
        width: '100%',
      }}>
      <FontAwesome6
        name={icon}
        color={focused ? colors.primary : colors.secondary}
        size={20}
      />
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
        placeholderTextColor={colors.placeholder}
        style={{color: colors.black, fontSize: 16, width: '100%'}}
      />
    </View>
  );
};

InputText.defaultProps = {
  type: 'text',
  placeholder: '',
};
export default InputText;
