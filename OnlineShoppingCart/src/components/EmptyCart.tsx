import {Text, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';

const EmptyCart = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 24, color: colors.secondary, fontWeight: '600'}}>
        Cart is empty
      </Text>
    </View>
  );
};

export default EmptyCart;
