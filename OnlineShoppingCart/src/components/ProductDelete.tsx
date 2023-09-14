import {View, Text, Pressable} from 'react-native';
import React from 'react';
import cartStore from '../mobx/Cart';
import {TProduct} from '../types';
import {observer} from 'mobx-react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ProductDelete = ({product}: TProduct) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
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
      <Pressable onPress={() => cartStore.deleteProduct(product)}>
        <FontAwesomeIcon
          icon="fa-solid fa-circle-minus"
          size={26}
          color={'#f43f5e'}
        />
      </Pressable>
    </View>
  );
};

export default observer(ProductDelete);
