import {StyleSheet, Text, View} from 'react-native';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import React from 'react';
import {COLORS, SHADOWS} from '../../constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TToast} from '../../types';
import {useTranslation} from 'react-i18next';

const ToastNotification = ({error, text, icon}: TToast) => {
  const {t} = useTranslation();
  return (
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
          padding: 18,
          flexDirection: 'row',
          gap: 8,
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
      ]}>
      <FontAwesomeIcon icon={icon} size={26} color={COLORS.white} />
      <View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
          {t(text)}
        </Text>
      </View>
    </Animated.View>
  );
};

export default ToastNotification;
