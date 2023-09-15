import React from 'react';
import cartStore from '../../mobx/Cart';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import {observer} from 'mobx-react';
import {TaddProd} from '../../types';

const ListCartItems = () => {
  return (
    <>
      {cartStore.logCartItem()}
      {cartStore.cartItems.length !== 0 ? (
        cartStore.cartItems.map((item: TaddProd, index: number) => (
          <CartItem product={item} index={index} key={index} />
        ))
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default observer(ListCartItems);
