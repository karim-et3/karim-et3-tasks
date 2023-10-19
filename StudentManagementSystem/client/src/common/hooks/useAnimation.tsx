import React from 'react';
import {Animated} from 'react-native';

const FADE_IN_ANIMATION_CONFIG = {
  toValue: 1,
  duration: 100,
  useNativeDriver: true,
};

const FADE_OUT_ANIMATION_CONFIG = {
  toValue: 0.8,
  duration: 100,
  useNativeDriver: true,
};
export default function useAnimation() {
  const opacityValue = React.useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacityValue, {
      toValue: 0.3,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacityValue,
    fadeIn,
    fadeOut,
  };
}
