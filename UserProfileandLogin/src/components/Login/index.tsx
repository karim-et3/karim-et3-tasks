import {Button, View} from 'react-native';
import React from 'react';
import InputText from '../common/InputText';
import {TLogin} from '../../types';
import {withObserverAndTheme} from '../../hoc';
import translationStore from '../../mobx/Translation';
import adminStore from '../../mobx/Admin';
import toastStore from '../../mobx/Toast';

const Login = ({COLORS}: TLogin) => {
  const login = () => {
    if (!adminStore.tempUsername)
      return toastStore.changeVisiblity({
        message: "username can't be empty.",
        icon: 'a-solid fa-circle-xmark',
        error: true,
      });
    if (!adminStore.tempPassword)
      return toastStore.changeVisiblity({
        message: "password can't be empty.",
        icon: 'a-solid fa-circle-xmark',
        error: true,
      });
    if (adminStore.login()) {
      console.log('logged in.');
      toastStore.changeVisiblity({
        message: 'logged in.',
        icon: 'fa-solid fa-circle-check',
        error: false,
      });
    } else {
      return toastStore.changeVisiblity({
        message: 'wrong username or password.',
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
        value={adminStore.tempUsername}
        setValue={e => adminStore.setTempUsername(e)}
        type="text"
        icon="fa-solid fa-user"
        placeholder={'username'}
      />
      <InputText
        value={adminStore.tempPassword}
        setValue={e => adminStore.setTempPassword(e)}
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
