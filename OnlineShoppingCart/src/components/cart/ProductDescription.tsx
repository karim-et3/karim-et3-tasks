import {View, Text} from 'react-native';
import React from 'react';
import {TProductDescription} from '../../types';
import {withLiteObserverAndTheme} from '../hoc';

const ProductDescription = ({
  product,
  COLORS,
  SIZES,
  FONTS,
}: TProductDescription) => {
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
          fontWeight: FONTS.bold,
        }}>
        {product.price} $
      </Text>
      <Text
        style={{
          fontSize: SIZES.medium,
          fontWeight: FONTS.medium,
          color: COLORS.secondary,
        }}>
        {product.title}
      </Text>
    </View>
  );
};

export default withLiteObserverAndTheme(ProductDescription);
