import React from 'react';
import product from '../../mobx/Product';
import Product from './Product';
import {TProduct} from '../../types';
import {withLiteObserver} from '../hoc';

const ListProducts = () => {
  return (
    <>
      {product.getData.map((prod: TProduct) => (
        <Product product={prod} key={prod.id} />
      ))}
    </>
  );
};

export default withLiteObserver(ListProducts);
