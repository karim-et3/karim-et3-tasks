import {View} from 'react-native';
import React, {useEffect} from 'react';
import usersStore from '../../mobx/Users';
import {TUserDetails} from '../../types';
import UserDetailsModal from './UserDetailsModal';
import Loading from '../Loading';
import {withObserverAndTheme} from '../../hoc';
import userStore from '../../mobx/User';

const UserDetails = ({route, navigation, COLORS}: TUserDetails) => {
  const id = route.params.id;
  useEffect(() => {
    if (id) {
      usersStore.getUser(id);
    }
  }, [id]);
  useEffect(() => {
    if (userStore.firstName && userStore.lastName)
      navigation.setOptions({
        title: `${userStore.firstName} ${userStore.lastName}`,
      });
  }, [userStore]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          top: 0,
          height: '24%',
          backgroundColor: COLORS.primary,
          borderBottomRightRadius: 60,
          borderBottomLeftRadius: 60,
        }}
      />
      {userStore.image ? (
        <UserDetailsModal userDetails={userStore.userDetails} />
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default withObserverAndTheme(UserDetails);
