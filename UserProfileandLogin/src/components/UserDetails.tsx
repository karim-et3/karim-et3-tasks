import {View, Image, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import usersStore from '../mobx/Users';
import {observer} from 'mobx-react';
import {ActivityIndicator} from 'react-native-paper';
import {COLORS, FONTS, SIZES} from '../constants';
import {Tnavigation} from '../types';

const UserDetails = ({
  route,
  navigation,
}: {
  route: '';
  navigation: Tnavigation;
}) => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    description: '',
    // dob: '',
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
        // marginHorizontal: SIZES.large,
        // marginVertical: SIZES.small,
      }}>
      <View
        style={{
          top: 0,
          // position: 'absolute',
          height: '30%',
          backgroundColor: COLORS.primary,
        }}
      />
      {userDetails.image ? (
        <View style={{position: 'absolute', marginTop: 50}}>
          <View
            style={{flexDirection: 'column', alignItems: 'center', gap: 20}}>
            <Image
              source={userDetails.image}
              style={{width: 120, height: 120, borderRadius: 100}}
            />
            <Text
              style={{
                fontSize: SIZES.xLarge,
                fontWeight: FONTS.bold,
                color: COLORS.test_primary3,
              }}>
              {userDetails.firstName} {userDetails.lastName}
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
              // backgroundColor: COLORS.primary_faded,
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{color: COLORS.test_primary3, fontSize: SIZES.medium}}>
              {userDetails.description}
            </Text>
          </View>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator
            size={36}
            animating={true}
            color={COLORS.primary}
          />
        </View>
      )}
    </View>
  );
};

export default observer(UserDetails);
