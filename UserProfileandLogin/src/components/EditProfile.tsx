import {View, Button} from 'react-native';
import React, {useState} from 'react';
import InputText from './InputText';
import {colors} from '../styles';
import userStore from '../mobx/Admin';
import {Tnavigation} from '../types';

const EditProfile = ({navigation}: Tnavigation) => {
  const [username, setUsername] = useState<string>(
    userStore?.getUsername || '',
  );
  const [address, setAddress] = useState<string>(userStore?.getAddress || '');
  const [age, setAge] = useState<string>(userStore?.getAge || '');
  const [phone, setPhone] = useState<string>(userStore?.getPhone || '');

  function updateUser(): void {
    userStore.update(username, age, address, phone)
      ? navigation.navigate('home')
      : '';
  }

  return (
    <View style={{gap: 15, marginHorizontal: 20, marginTop: 25}}>
      <InputText
        value={username}
        setValue={setUsername}
        icon="user"
        placeholder="Your Username"
      />
      <InputText
        value={phone}
        setValue={setPhone}
        icon="phone"
        type="phone"
        placeholder="Your Phone"
      />
      <InputText
        value={age}
        setValue={setAge}
        icon="image-portrait"
        type="age"
        placeholder="Your Age"
      />
      <InputText
        value={address}
        setValue={setAddress}
        icon="location-dot"
        placeholder="Your Address"
      />
      <View style={{marginTop: 12}}>
        <Button title="Submit" color={colors.primary} onPress={updateUser} />
      </View>
    </View>
  );
};

export default EditProfile;
