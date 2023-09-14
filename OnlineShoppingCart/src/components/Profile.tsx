import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import InputArea from './InputArea';
import {observer} from 'mobx-react';
import userStore from '../mobx/UserStore';
import {colors} from '../styles';
import {Tnavigation} from '../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Profile = ({navigation}: Tnavigation) => {
  const [name, setName] = useState<string>(userStore?.user.name ?? '');
  const [address, setAddress] = useState<string>(userStore?.user.address ?? '');
  const saveUserData = () => {
    userStore.addUser(name, address);
    userStore.addUser(name, address);
    navigation.navigate('home');
  };
  return (
    <View style={{marginHorizontal: 10}}>
      <InputArea
        value={name}
        setValue={setName}
        icon={
          <FontAwesomeIcon
            icon="fa-solid fa-user-gear"
            size={24}
            color={colors.primary}
          />
        }
        placeholder="Username"
      />
      <InputArea
        value={address}
        setValue={setAddress}
        icon={
          <FontAwesomeIcon
            icon="fa-solid fa-location-dot"
            size={24}
            color={colors.primary}
          />
        }
        placeholder="Address"
      />
      <Pressable
        style={{
          marginTop: 20,
          paddingVertical: 10,
          borderRadius: 8,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={saveUserData}>
        <Text style={{fontSize: 18, color: 'white'}}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default observer(Profile);
