import {StyleSheet, View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import InputArea from './InputArea';
import {observer} from 'mobx-react';
import user from '../../mobx/user';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const Profile = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const [name, setName] = useState<string>(
    user.user.name ? user.user.name : '',
  );
  const [address, setAddress] = useState(
    user.user.address ? user.user.address : '',
  );
  const saveUserData = () => {
    user.addUser(name, address);
    navigation.navigate('home');
  };
  return (
    <View style={{marginHorizontal: 10}}>
      <InputArea
        value={name}
        setValue={setName}
        icon={
          <FontAwesome name="user-o" style={{fontSize: 24, color: '#0ea5e9'}} />
        }
        placeholder="Username"
      />
      <InputArea
        value={address}
        setValue={setAddress}
        icon={
          <Entypo name="address" style={{fontSize: 24, color: '#0ea5e9'}} />
        }
        placeholder="Address"
      />
      <Pressable
        style={{
          marginTop: 20,
          paddingVertical: 10,
          borderRadius: 8,
          backgroundColor: '#0ea5e9',
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

const styles = StyleSheet.create({});
