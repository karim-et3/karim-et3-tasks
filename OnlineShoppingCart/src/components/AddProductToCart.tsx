import {Animated, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {TAddProductToCart} from '../types';
import {colors} from '../styles';
import {ToastContext} from './ToastContext';

const AddProductToCart = ({addToCart}: TAddProductToCart) => {
  const {changeVisiblity} = useContext(ToastContext);
  const [disabled, setDisabled] = useState(false);
  const animatedButtonScale = new Animated.Value(1);
  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1.15,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const animatedScaleStyle = {
    transform: [{scale: animatedButtonScale}],
  };

  useEffect(() => {
    if (disabled) {
      setTimeout(() => {
        setDisabled(!disabled);
      }, 2000);
    }
  }, [disabled]);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => {
        addToCart();
        setDisabled(true);
        changeVisiblity();
      }}>
      <Animated.View
        style={[
          animatedScaleStyle,
          {
            marginTop: 5,
            shadowColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            paddingVertical: 3,
            backgroundColor: disabled
              ? colors.disabledbBackground
              : colors.white,
            borderWidth: 0.5,
            borderColor: disabled ? colors.disabledBorder : colors.border,
            marginHorizontal: 10,
          },
        ]}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: disabled ? colors.white : colors.primary,
          }}>
          Add
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AddProductToCart;
