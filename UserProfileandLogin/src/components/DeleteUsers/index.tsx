import React from 'react';
import usersStore from '../../mobx/Users';
import {withObserverAndTheme} from '../../hoc';
import {ScrollView} from 'react-native-gesture-handler';
import DisplayDeleteUser from './DisplayDeleteUser';
import NoUsers from './NoUsers';

const ListDeleteUser = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      {usersStore.getUsers.length ? <DisplayDeleteUser /> : <NoUsers />}
    </ScrollView>
  );
};

export default withObserverAndTheme(ListDeleteUser);
