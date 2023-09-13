import React from 'react';
import product from '../mobx/Product';
import Product from './Product';

const ListProducts = () => {
  return (
    <>
      {product.getData.map(prod => (
        <Product product={prod} key={prod.id} />
      ))}
    </>
  );
};

export default ListProducts;
