import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../../constants';
import {TUserDetailsModal} from '../../types';
import Animated, {ZoomIn} from 'react-native-reanimated';
import {withObserverAndTheme} from '../../hoc';

const UserDetailsModal = ({userDetails}: {userDetails: TUserDetailsModal}) => {
  return (
    <View
      style={{
        width: '100%',
        position: 'absolute',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        entering={ZoomIn}
        style={[
          SHADOWS.medium,
          {
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            width: '90%',
            borderRadius: 20,
            padding: 20,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: COLORS.grey,
            backgroundColor: COLORS.white,
          },
        ]}>
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
        <View
          style={{
            width: '90%',
            borderTopWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text
          style={{
            color: COLORS.test_primary3,
            fontSize: SIZES.medium,
            textAlign: 'center',
          }}>
          {userDetails.description}
        </Text>
      </Animated.View>
    </View>
  );
};

export default withObserverAndTheme(UserDetailsModal);
