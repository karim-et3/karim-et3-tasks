import {StyleSheet, Text, View} from 'react-native';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {WithThemeAndLiteObserver} from '../hoc/theme';

type Props = {error: boolean; message: string};
const ToastNotification = WithThemeAndLiteObserver<Props>(props => {
  const {error, message, theme} = props;
  const {COLORS, SHADOWS} = theme;
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={[
          SHADOWS.medium,
          {
            position: 'absolute',
            top: 80,
            width: '90%',
            backgroundColor: error ? COLORS.error : COLORS.primary,
            borderColor: COLORS.grey,
            zIndex: 10,
            borderWidth: StyleSheet.hairlineWidth,
            elevation: 2,
            borderRadius: 5,
            padding: 20,
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'flex-start',
            alignItems: 'center',
          },
        ]}>
        <FontAwesomeIcon
          icon={error ? 'circle-xmark' : 'circle-check'}
          size={26}
          color={COLORS.white}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
            {message}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
});

export default ToastNotification;
