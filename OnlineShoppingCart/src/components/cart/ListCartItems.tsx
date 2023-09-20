import React from 'react';
import cartStore from '../../mobx/Cart';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import {TProduct} from '../../types';
import {withLiteObserverAndTheme} from '../hoc';

const ListCartItems = () => {
  return (
    <>
      {cartStore.logCartItem()}
      {cartStore.cartItems.length !== 0 ? (
        cartStore.cartItems.map((item: TProduct, index: number) => (
          <CartItem product={item} key={index} />
        ))
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default withLiteObserverAndTheme(ListCartItems);
