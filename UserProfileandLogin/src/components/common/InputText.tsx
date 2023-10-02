import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {TInputTextExport, TInputText} from '../../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import translationStore from '../../mobx/Translation';
import {withObserverAndTheme} from '../../hoc';

const InputText = ({
  COLORS,
  value,
  setValue,
  type = 'text',
  icon,
  placeholder = '',
}: TInputText) => {
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
      <FontAwesomeIcon
        icon={icon}
        color={focused ? COLORS.primary : COLORS.secondary}
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
        placeholder={translationStore.get(placeholder)}
        onChangeText={e => setValue(e)}
        placeholderTextColor={COLORS.placeholder}
        style={{
          color: COLORS.black,
          fontSize: 16,
          width: '100%',
          paddingLeft: 10,
          paddingRight: 20,
        }}
      />
    </View>
  );
};

InputText.defaultProps = {
  type: 'text',
  placeholder: '',
};
export default withObserverAndTheme(
  InputText,
) as React.ComponentType<TInputTextExport>;
