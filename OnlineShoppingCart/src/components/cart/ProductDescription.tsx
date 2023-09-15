import {View, Text} from 'react-native';
import React from 'react';
import {TProduct} from '../../types';
import {COLORS, FONT, SIZES} from '../../constants';

const ProductDescription = ({product}: TProduct) => {
  return (
    <View
      style={{
        width: '60%',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: COLORS.black,
          fontSize: SIZES.xLarge,
          fontWeight: FONT.bold,
        }}>
        {product.price} $
      </Text>
      <Text
        style={{
          fontSize: SIZES.medium,
          fontWeight: FONT.medium,
          color: COLORS.secondary,
        }}>
        {product.title}
      </Text>
    </View>
  );
};

export default ProductDescription;
