import {Button, View} from 'react-native';
import React, {useContext, useState} from 'react';
import InputText from './InputText';
import userStore from '../mobx/Admin';
import {observer} from 'mobx-react';
import {Tnavigation} from '../types';
import {COLORS} from '../constants';
import {ToastContext} from './context/ToastContext';

const Login = observer(({navigation}: Tnavigation) => {
  const {changeVisiblity} = useContext(ToastContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    if (!username)
      return changeVisiblity({
        text: "Username can't be empty.",
        icon: 'a-solid fa-circle-xmark',
        error: true,
      });
    if (!password)
      return changeVisiblity({
        text: "Password can't be empty.",
        icon: 'a-solid fa-circle-xmark',
        error: true,
      });
    if (userStore.login({username, password})) {
      console.log('Logged in.');
      changeVisiblity({
        text: 'Logged in.',
        icon: 'fa-solid fa-circle-check',
        error: false,
      });
      return setTimeout(() => {
        navigation.navigate('Home_stack');
      }, 1000);
    } else {
      return changeVisiblity({
        text: 'Wrong username or password.',
        icon: 'fa-solid fa-circle-xmark',
        error: true,
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        top: 100,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginHorizontal: 60,
      }}>
      <InputText
        value={username}
        setValue={setUsername}
        type="text"
        icon={'user'}
        placeholder={'Username'}
      />
      <InputText
        value={password}
        setValue={setPassword}
        type="password"
        icon={'lock'}
        placeholder={'Password'}
      />
      <View style={{width: '100%'}}>
        <Button title="Submit" color={COLORS.primary} onPress={login} />
      </View>
    </View>
  );
});

export default Login;
