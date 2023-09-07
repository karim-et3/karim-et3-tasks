import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState} from 'react';

type InputAreaProp = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon: any;
  placeholder: string;
};

const InputArea = ({value, setValue, icon, placeholder}: InputAreaProp) => {
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
        borderColor: focused ? '#0ea5e9' : 'black',
        paddingHorizontal: 20,
      }}>
      {icon}
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        style={{fontSize: 20, width: '100%'}}
        onChangeText={e => setValue(e)}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputArea;

const styles = StyleSheet.create({});
{
  /* <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: 5,
          marginHorizontal: 10,
          marginTop: 20,
          paddingHorizontal: 20,
          borderColor: focusedAddress ? '#0ea5e9' : 'black',
        }}>
        
        <TextInput
         
          style={{fontSize: 20}}
          value={user.Person.address ? user.Person.address : address}
          onChangeText={e => setAddress(e)}
          placeholder="Address"
        />
      </View> */
}
