import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import usersStore from '../mobx/Users';
import DeleteUser from './DeleteUser';

const ListDeleteUser = () => {
  return (
    <View>
      {usersStore.getUsers.map(user => (
        <DeleteUser user={user} />
      ))}
      <Text style={{color: COLORS.black}}>DeleteUser</Text>
    </View>
  );
};

export default ListDeleteUser;
