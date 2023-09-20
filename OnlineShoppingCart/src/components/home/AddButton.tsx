import {Animated, Text} from 'react-native';
import React from 'react';
import {TAddButton} from '../../types';

const AddButton = ({COLORS, animatedButtonScale, disabled}: TAddButton) => {
  const animatedScaleStyle: object = {
    transform: [{scale: animatedButtonScale}],
  };

  return (
    <Animated.View
      style={[
        animatedScaleStyle,
        {
          marginTop: 5,
          shadowColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          paddingVertical: 3,
          backgroundColor: disabled ? COLORS.disabledbBackground : COLORS.white,
          borderWidth: 0.5,
          borderColor: disabled ? COLORS.disabledBorder : COLORS.border,
          marginHorizontal: 10,
        },
      ]}>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: disabled ? COLORS.disabledText : COLORS.primary,
        }}>
        Add
      </Text>
    </Animated.View>
  );
};

export default AddButton;
