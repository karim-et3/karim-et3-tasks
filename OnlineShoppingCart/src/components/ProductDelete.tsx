import {View, Text, Pressable} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import cart from '../mobx/Cart';
import {TProduct} from '../types';
import {observer} from 'mobx-react';

const ProductDelete = ({product}: TProduct) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
      }}>
      <Text
        style={{
          color: 'black',
          padding: 8,
          fontWeight: '500',
          borderRadius: 4,
          backgroundColor: 'white',
        }}>
        {product.quantity}
      </Text>
      <Pressable onPress={() => cart.deleteProduct(product)}>
        <MaterialIcons name="delete" style={{fontSize: 32, color: '#f43f5e'}} />
      </Pressable>
    </View>
  );
};

export default observer(ProductDelete);
