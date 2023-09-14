import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../styles';
import {TInputAreaProp} from '../types';

const InputArea = ({value, setValue, icon, placeholder}: TInputAreaProp) => {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        // borderWidth: StyleSheet.hairlineWidth,
        borderWidth: 1,
        borderRadius: 5,

        marginTop: 20,
        borderColor: focused ? colors.primary : colors.black,
        paddingHorizontal: 20,
      }}>
      {icon}
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        style={{fontSize: 20, width: '100%', color: colors.black}}
        onChangeText={e => setValue(e)}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
      />
    </View>
  );
};

export default InputArea;
