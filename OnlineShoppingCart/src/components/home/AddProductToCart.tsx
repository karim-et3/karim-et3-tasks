import {Animated, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {TAddProductToCart} from '../../types';

import {ToastContext} from '../context';
import {withLiteObserverAndTheme} from '../hoc';
import AddButton from './AddButton';

const AddProductToCart = ({COLORS, addToCart}: TAddProductToCart) => {
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
          icon: 'circle-check',
          error: false,
        });
      }}>
      <AddButton
        COLORS={COLORS}
        animatedButtonScale={animatedButtonScale}
        disabled={disabled}
      />
    </TouchableOpacity>
  );
};

export default withLiteObserverAndTheme(AddProductToCart);
