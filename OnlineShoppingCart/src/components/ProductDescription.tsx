import {View, Text} from 'react-native';
import React from 'react';
import {TProduct} from '../types';

const ProductDescription = ({product}: TProduct) => {
  return (
    <View
      style={{
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 24, fontWeight: '800'}}>
        {product.price} $
      </Text>
      <Text style={{fontSize: 24, fontWeight: '600', color: '#52525b'}}>
        {product.title}
      </Text>
    </View>
  );
};

export default ProductDescription;
