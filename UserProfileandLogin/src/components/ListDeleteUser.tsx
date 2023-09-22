import {View} from 'react-native';
import React from 'react';
import usersStore from '../mobx/Users';
import DeleteUser from './DeleteUser';
import {withObserverAndTheme} from './hoc';
import {ScrollView} from 'react-native-gesture-handler';
import {TSIZES} from '../types';

const ListDeleteUser = ({SIZES}: {SIZES: TSIZES}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
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
    </ScrollView>
  );
};

export default withObserverAndTheme(ListDeleteUser);
