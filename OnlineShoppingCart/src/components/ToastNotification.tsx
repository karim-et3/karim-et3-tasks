import {StyleSheet, Text, View} from 'react-native';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import React from 'react';
import {colors} from '../styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ToastNotification = () => {
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={{
        // marginTop: 100,
        position: 'absolute',
        top: 80,
        width: '90%',
        backgroundColor: colors.primary,
        borderColor: colors.grey,
        zIndex: 10,
        borderWidth: StyleSheet.hairlineWidth,
        elevation: 2,
        borderRadius: 5,
        padding: 18,
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon
        icon="fa-solid fa-circle-check"
        size={26}
        color={colors.white}
      />
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.white}}>
          Added to cart!
        </Text>
      </View>
    </Animated.View>
  );
};

export default ToastNotification;
