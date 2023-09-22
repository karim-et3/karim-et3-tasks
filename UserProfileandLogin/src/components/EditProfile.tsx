import {View, Button} from 'react-native';
import React, {useState} from 'react';
import InputText from './common/InputText';
import userStore from '../mobx/Admin';
import {TEditProfile} from '../types';
import {withObserverAndTheme} from './hoc';
import langaugeStore from '../mobx/Language';

const EditProfile = ({COLORS, navigation}: TEditProfile) => {
  const [username, setUsername] = useState<string>(
    userStore?.getUsername || '',
  );
  const [address, setAddress] = useState<string>(userStore?.getAddress || '');
  const [age, setAge] = useState<string>(userStore?.getAge || '');
  const [phone, setPhone] = useState<string>(userStore?.getPhone || '');

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
          title={langaugeStore.translate('submit')}
          color={COLORS.primary}
          onPress={updateUser}
        />
      </View>
    </View>
  );
};

export default withObserverAndTheme(EditProfile);
