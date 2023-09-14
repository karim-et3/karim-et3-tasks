import React from 'react';
import product from '../../mobx/Product';
import Product from './Product';
import {TaddProd} from '../../types';

const ListProducts = () => {
  return (
    <>
      {product.getData.map((prod: TaddProd) => (
        <Product product={prod} key={prod.id} />
      ))}
    </>
  );
};

export default ListProducts;
