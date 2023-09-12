import {Button, GestureResponderEvent, View} from 'react-native';
import React, {useState} from 'react';
import InputText from './InputText';
import {colors} from '../styles';
import userStore from '../mobx/User';
import {observer} from 'mobx-react';

const Login = observer(() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function addUser(event: GestureResponderEvent): void {
    const user = {username, password};
    userStore.login(user);
  }

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
        <Button title="Submit" color={colors.primary} onPress={addUser} />
      </View>
    </View>
  );
});

export default Login;
