import React from 'react';
import cartStore from '../mobx/Cart';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import {observer} from 'mobx-react';
import {TaddProd} from '../types';

const ListCartItems = () => {
  return (
    <>
      {cartStore.items.length !== 0 ? (
        cartStore.items.map((item: TaddProd, index: number) => (
          <CartItem product={item} index={index} />
        ))
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default observer(ListCartItems);
