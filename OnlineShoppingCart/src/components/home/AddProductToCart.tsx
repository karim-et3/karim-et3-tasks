import {Animated, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {TAddProductToCart} from '../../types';
import {COLORS} from '../../constants';
import {ToastContext} from '../context';

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
        changeVisiblity({
          text: 'Added to cart!',
          // icon: 'anchor-circle-check',
          icon: 'circle-check',
          error: false,
        });
      }}>
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
            backgroundColor: disabled
              ? COLORS.disabledbBackground
              : COLORS.white,
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
    </TouchableOpacity>
  );
};

export default AddProductToCart;
