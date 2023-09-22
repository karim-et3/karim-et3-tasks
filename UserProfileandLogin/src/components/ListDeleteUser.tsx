import {View, Text} from 'react-native';
import React from 'react';
import usersStore from '../mobx/Users';
import DeleteUser from './DeleteUser';
import {withObserverAndTheme} from './hoc';
import {ScrollView} from 'react-native-gesture-handler';
import {TListDeleteUser} from '../types';
import langaugeStore from '../mobx/Language';

const ListDeleteUser = ({COLORS, FONTS, SIZES}: TListDeleteUser) => {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      {usersStore.getUsers.length ? (
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
      ) : (
        <View
          style={{
            marginTop: 250,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: COLORS.test_primary3,
              fontSize: SIZES.large,
              fontWeight: FONTS.bold,
            }}>
            {langaugeStore.translate('no users.')}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default withObserverAndTheme(ListDeleteUser);
