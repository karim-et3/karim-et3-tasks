import {Image} from 'react-native';
import React from 'react';
import {TProductImage} from '../../types';
import {withLiteObserver, withLiteObserverAndTheme} from '../hoc';

const ProductImage = ({image, COLORS}: TProductImage) => {
  return (
    <Image
      style={{
        width: '25%',
        backgroundColor: COLORS.white,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 8,
      }}
      source={image}
    />
  );
};

export default withLiteObserverAndTheme(ProductImage);
