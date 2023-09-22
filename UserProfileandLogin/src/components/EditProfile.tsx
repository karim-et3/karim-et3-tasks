import {View, Button} from 'react-native';
import React, {useState} from 'react';
import InputText from './common/InputText';
import userStore from '../mobx/Admin';
import {Tnavigation} from '../types';
import {COLORS} from '../constants';
import {useTranslation} from 'react-i18next';

const EditProfile = ({navigation}: Tnavigation) => {
  const [username, setUsername] = useState<string>(
    userStore?.getUsername || '',
  );
  const [address, setAddress] = useState<string>(userStore?.getAddress || '');
  const [age, setAge] = useState<string>(userStore?.getAge || '');
  const [phone, setPhone] = useState<string>(userStore?.getPhone || '');

  const {t} = useTranslation();
  function updateUser(): void {
    userStore.update({username, age, address, phone});
    navigation.navigate('home-stack');
  }

  return (
    <View style={{gap: 15, marginHorizontal: 20, marginTop: 25}}>
      <InputText
        value={username}
        setValue={setUsername}
        icon="user"
        placeholder="your username"
      />
      <InputText
        value={phone}
        setValue={setPhone}
        icon="phone"
        type="phone"
        placeholder="your phone"
      />
      <InputText
        value={age}
        setValue={setAge}
        icon="image-portrait"
        type="age"
        placeholder="your age"
      />
      <InputText
        value={address}
        setValue={setAddress}
        icon="location-dot"
        placeholder="your address"
      />
      <View style={{marginTop: 12}}>
        <Button
          title={t('submit')}
          color={COLORS.primary}
          onPress={updateUser}
        />
      </View>
    </View>
  );
};

export default EditProfile;
