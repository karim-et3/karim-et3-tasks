import {View} from 'react-native';
import React, {useState} from 'react';
import userStore from '../../mobx/UserStore';
import {Tnavigation} from '../../types';
import UsernameInput from './UsernameInput';
import AddressInput from './AddressInput';
import Submit from './Submit';
import {withLiteObserver} from '../hoc';

const Profile = ({navigation}: Tnavigation) => {
  const [name, setName] = useState<string>(userStore?.user.name ?? '');
  const [address, setAddress] = useState<string>(userStore?.user.address ?? '');

  return (
    <View style={{marginHorizontal: 10}}>
      <UsernameInput name={name} setName={setName} />
      <AddressInput address={address} setAddress={setAddress} />
      <Submit navigation={navigation} name={name} address={address} />
    </View>
  );
};

export default withLiteObserver(Profile);
