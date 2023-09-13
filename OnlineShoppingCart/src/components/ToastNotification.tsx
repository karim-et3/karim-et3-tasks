import {StyleSheet, Text, View} from 'react-native';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../styles';

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
      <FontAwesome name="check-circle-o" size={30} color={colors.white} />
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.white}}>
          Added to cart!
        </Text>
      </View>
    </Animated.View>
  );
};

export default ToastNotification;
