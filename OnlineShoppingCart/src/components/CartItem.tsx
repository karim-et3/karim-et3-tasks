import Animated, {FadeOutRight} from 'react-native-reanimated';
import React from 'react';
import {TProduct} from '../types';
import {observer} from 'mobx-react';
import ProductDescription from './ProductDescription';
import ProductDelete from './ProductDelete';
import ProductImage from './ProductImage';

const CartItem = ({product, index}: TProduct & {index: number}) => {
  return (
    <Animated.View
      exiting={FadeOutRight}
      style={{
        marginVertical: 10,
        borderBottomWidth: 1,
        paddingVertical: 20,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'flex-start',
      }}
      key={`${product.quantity}-${product.id}-${index}`}>
      <ProductImage image={product.image} />
      <ProductDescription product={product} />
      <ProductDelete product={product} />
    </Animated.View>
  );
};

export default observer(CartItem);
