import {View} from 'react-native';
import React from 'react';
import ListCartItems from './ListCartItems';

const Cart = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <ListCartItems />
    </View>
  );
};

export default Cart;
