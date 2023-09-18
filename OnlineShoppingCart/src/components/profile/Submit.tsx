import {Pressable, Text} from 'react-native';
import React from 'react';
import userStore from '../../mobx/UserStore';
import {TSubmit} from '../../types';
import {withLiteObserverAndTheme} from '../hoc';

const Submit = ({navigation, name, address, COLORS}: TSubmit) => {
  const saveUserData = () => {
    userStore.addUser({name, address});
    navigation.navigate('home');
  };
  return (
    <Pressable
      style={{
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={saveUserData}>
      <Text style={{fontSize: 18, color: 'white'}}>Submit</Text>
    </Pressable>
  );
};

export default withLiteObserverAndTheme(Submit);
