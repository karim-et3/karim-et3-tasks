import {Button, View} from 'react-native';
import React, {useContext, useState} from 'react';
import InputText from './common/InputText';
import userStore from '../mobx/Admin';
import {TLogin} from '../types';
import {ToastContext} from '../context/ToastContext';
import {withObserverAndTheme} from '../hoc';
import translationStore from '../mobx/Translation';

const Login = ({COLORS}: TLogin) => {
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
        icon="fa-solid fa-user"
        placeholder={'username'}
      />
      <InputText
        value={password}
        setValue={setPassword}
        type="password"
        icon="fa-solid fa-lock"
        placeholder={'password'}
      />
      <View style={{width: '100%', marginTop: 20}}>
        <Button
          title={translationStore.get('submit')}
          color={COLORS.primary}
          onPress={login}
        />
      </View>
    </View>
  );
};

export default withObserverAndTheme(Login);
