import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import InputArea from './InputArea';
import {observer} from 'mobx-react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import userStore from '../mobx/UserStore';
import {colors} from '../styles';
import {Tnavigation} from '../types';

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
          <FontAwesome
            name="user-o"
            style={{fontSize: 24, color: colors.primary}}
          />
        }
        placeholder="Username"
      />
      <InputArea
        value={address}
        setValue={setAddress}
        icon={
          <Entypo
            name="address"
            style={{fontSize: 24, color: colors.primary}}
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
