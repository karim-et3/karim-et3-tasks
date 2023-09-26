import {View} from 'react-native';
import React from 'react';
import usersStore from '../../mobx/Users';
import {SIZES} from '../../constants';
import DisplayUser from './DisplayUser';
import {ScrollView} from 'react-native-gesture-handler';
import {withObserverAndTheme} from '../../hoc';

const ListDisplayUsers = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View
        style={{
          flex: 1,
          gap: 10,
          flexDirection: 'column',
          marginHorizontal: SIZES.medium,
          marginVertical: SIZES.xSmall,
        }}>
        {usersStore.getUsers.map(user => (
          <DisplayUser user={user} key={user.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default withObserverAndTheme(ListDisplayUsers);
