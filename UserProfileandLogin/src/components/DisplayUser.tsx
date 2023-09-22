import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TUsers} from '../types';
import LinkButton from './common/LinkButton';
import {withObserverAndTheme} from './hoc';

const User = ({COLORS, FONTS, SIZES, user}: {user: TUsers}) => {
  return (
    <LinkButton
      to={{screen: 'user-details', params: {id: user.id}}}
      action={undefined}
      rest={undefined}>
      <View
        key={user.id}
        style={{
          backgroundColor: '#e5e5e5',
          borderRadius: 10,
          padding: SIZES.xSmall,
          flexDirection: 'row',
          gap: 20,
          position: 'relative',
          width: '100%',
        }}>
        <LinearGradient
          colors={user.online ? ['#DC1C13', '#F6BDC0'] : ['#1FA808', '#3CE203']}
          start={{x: 0.5, y: 0.5}}
          end={{x: 0, y: 0}}
          style={{
            height: 13,
            width: 13,
            borderRadius: 1000,
            position: 'absolute',
            top: 8,
            right: 8,
          }}
        />
        <Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            borderRadius: 100,
          }}
          source={user.image}
        />
        <View>
          <Text
            style={{
              color: COLORS.test_primary3,
              fontWeight: FONTS.bold,
              fontSize: SIZES.medium,
            }}>
            {user.firstName} {user.lastName}
          </Text>
          <Text
            style={{
              color: COLORS.test_primary3,
              fontWeight: FONTS.medium,
              marginTop: 5,
            }}>
            {user.dob.toLocaleDateString()}
          </Text>
        </View>
      </View>
    </LinkButton>
  );
};

export default withObserverAndTheme(User);
