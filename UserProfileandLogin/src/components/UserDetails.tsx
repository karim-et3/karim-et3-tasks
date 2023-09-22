import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import usersStore from '../mobx/Users';
import {TUserDetails} from '../types';
import UserDetailsModal from './UserDetailsModal';
import Loading from './Loading';
import {withObserverAndTheme} from './hoc';

const UserDetails = ({route, navigation, COLORS}: TUserDetails) => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    description: '',
    image: 0,
    id: 0,
  });
  const id = route.params.id;
  useEffect(() => {
    if (id) {
      setUserDetails(usersStore.getUser(id));
    }
  }, [id]);
  useEffect(() => {
    if (userDetails)
      navigation.setOptions({
        title: `${userDetails.firstName} ${userDetails.lastName}`,
      });
  }, [userDetails]);

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
      {userDetails.image ? (
        <View
          style={{
            width: '100%',
            position: 'absolute',
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <UserDetailsModal userDetails={userDetails} />
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default withObserverAndTheme(UserDetails);
