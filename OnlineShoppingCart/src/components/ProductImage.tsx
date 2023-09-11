import {Image} from 'react-native';
import React from 'react';

const ProductImage = ({image}: {image: number}) => {
  return (
    <Image
      style={{
        width: '25%',
        backgroundColor: 'white',
        height: 80,
        resizeMode: 'cover',
        borderRadius: 8,
      }}
      source={image}
    />
  );
};

export default ProductImage;
