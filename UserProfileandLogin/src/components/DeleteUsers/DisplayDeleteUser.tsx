import {View} from 'react-native';
import React from 'react';
import usersStore from '../../mobx/Users';
import {withObserverAndTheme} from '../../hoc';
import DeleteUser from './DeleteUser';
import {TDisplayDeleteUser, TDisplayDeleteUserExport} from '../../types';

const DisplayDeleteUser = ({SIZES}: TDisplayDeleteUser) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        gap: 10,
        marginHorizontal: SIZES.medium,
        marginVertical: SIZES.xSmall,
      }}>
      {usersStore.getUsers.map(user => (
        <DeleteUser user={user} key={user.id} />
      ))}
    </View>
  );
};

export default withObserverAndTheme(
  DisplayDeleteUser,
) as React.ComponentType<TDisplayDeleteUserExport>;
