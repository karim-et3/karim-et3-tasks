import {View, Image} from 'react-native';
import React from 'react';
import {TDeleteUser} from '../types';
import {withObserverAndTheme} from './hoc';
import DeleteUserButton from './DeleteUserButton';
import DeleteUserDescription from './DeleteUserDescription';

const DeleteUser = ({SIZES, SHADOWS, user}: TDeleteUser) => {
  return (
    <View
      key={user.id}
      style={[
        SHADOWS.small,
        {
          backgroundColor: '#e5e5e5',
          borderRadius: 10,
          padding: SIZES.xSmall,
          flexDirection: 'row',
          gap: 10,
          position: 'relative',
          width: '100%',
          alignItems: 'center',
        },
      ]}>
      <Image
        style={{
          width: 60,
          height: 60,
          resizeMode: 'contain',
          borderRadius: 100,
        }}
        source={user.image}
      />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <DeleteUserDescription user={user} />
        <DeleteUserButton />
      </View>
    </View>
  );
};

export default withObserverAndTheme(DeleteUser);
